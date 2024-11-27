import {z} from "zod";
import {neon} from "@neondatabase/serverless";

export async function GET(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    
    const response = await sql`SELECT * FROM dogs;`;

    const dog = response.find((dog) => dog.id === idNum);
    if (!dog) {
        return new Response(null, { status: 404 });
    }
    return new Response(JSON.stringify(dog), { status: 200 });
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const idNum = Number(id);
        const dog = await request.json();
        console.log(dog);
        const dogSchema = z.object( {
            name: z.string(),
            age: z.number().min(1).max(30)
        } );
        try {
            dogSchema.parse(dog);
        } catch (error) {
            return new Response("Provided object does not match valid schema.", {status:406});
        }
        const dbUrl = process.env.DATABASE_URL || "";
        const sql = neon(dbUrl);
        const response = await
        sql`UPDATE dogs SET name = ${dog.name},
        age = ${dog.age} WHERE id = ${idNum}`;
        return new Response(null, { status: 204 });
    } catch (error) {

    }
}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    let response = null;

    if (dog.name) {
        // validate data from dog object
        // update name in database
        response = await sql`UPDATE dogs SET name = ${dog.name} WHERE id = ${idNum}`;
    }

    if (dog.age) {
        // update age in database
        response = await sql`UPDATE dogs SET age = ${dog.age} WHERE id = ${idNum}`;
    }

    return new Response(null, { status: 204 });
}

export async function DELETE(request, {params}){
    const { id } = await params;
    const idNum = Number(id);
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    // delete dog from database
    const response = await sql`DELETE FROM dogs WHERE id = ${idNum};`;

    return new Response(null, { status: 204 });
}