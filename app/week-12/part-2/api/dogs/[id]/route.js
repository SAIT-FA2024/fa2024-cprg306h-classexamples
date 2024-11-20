export async function GET(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    // SELECT * FROM dogs
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 },
    ];
    const dog = dogs.find((dog) => dog.id === idNum);
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
        // UPDATE dogs SET name = ${dog.name}, age = ${dog.age} WHERE id = ${idNum}
        return new Response(null, { status: 204 });
    } catch (error) {

    }
}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();

    if (dog.name) {
        // update name in database
    }

    if (dog.age) {
        // update age in database
    }

    return new Response(null, { status: 204 });
}

export async function DELETE(request, {params}){
    const { id } = await params;
    const idNum = Number(id);

    // delete dog from database
    // DELETE FROM dags WHERE id = ${id};

    return new Response(null, { status: 204 });
}