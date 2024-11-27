"use client"
import { useEffect, useState } from "react";
import Dog from "./dog";

export default function DogPage(){

    const [dogList, setDogList] = useState([]);
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState(0);
    const handleDogNameChange = (event) => setDogName(event.target.value);
    const handleDogAgeChange = (event) => setDogAge(event.target.value);

    async function getAllDogs(){
        const response = await fetch("http://localhost:3000/week-13/api/dogs");
        const data = await response.json();
        setDogList(data);
    }

    async function deleteDog(id){
        let request = new Request(
            `http://localhost:3000/week-13/api/dogs/${id}`, 
            {
                method: "DELETE"
            }
        );
    }

    async function handleSubmit(event){
        event.preventDefault();
        let newDogObj = {
            name: dogName,
            age: dogAge
        }
        let request = new Request(
            "http://localhost:3000/week-13/api/dogs", 
            {
                method: "POST",
                body: JSON.stringify(newDogObj)
            }
        );
        try {
            const response = await fetch(request);
            if (response.ok) {
                console.log("Success");                
            }
        } catch (error) {
            console.log(error);
        }
        
        getAllDogs();

    }

    useEffect( () => {
        getAllDogs();
    }, [] );

    return(
        <main>
            <header>
                <h1>Edit Dogs</h1>
            </header>
            <section>
                { dogList.map( (dog) => <Dog key={dog.id} dogObj={dog} /> ) }
            </section>
            <form onSubmit={handleSubmit}>
                <h2>Add new dog</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={handleDogNameChange} value={dogName} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" onChange={handleDogAgeChange} value={dogAge} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}