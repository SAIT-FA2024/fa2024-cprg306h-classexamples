import {z} from "zod";

// fetch the list of dogs
export async function GET() {
    // fetch dogs from database
    // SELECT * FROM dogs
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 },
    ];

    return new Response( JSON.stringify(dogs), {status: 200} );
}

export async function POST(request){
    let newDog = await request.json();
    // validate newDog to make sure the data is ok
    // if( newDog.name == null || typeof newDog.name != 'string' || !newDog.name instanceof String ){ }

    const newDogSchema = z.object( {
        name: z.string(),
        age: z.number().min(1).max(30)
    } );

    try {
        newDog = newDogSchema.parse(newDog);
    } catch (error) {
        return new Response("Provided object does not match valid schema.", {status:406});
    }

    // add newDog to database
    // const newDogRef = (db, "dogs");
    newDog.id = 4;
    // INSERT INTO dogs (name, age) VALUES ( ${newDog.name}, ${newDog.age} );

    return new Response( JSON.stringify(newDog), {status:201} );
}