"use client"

import { useState } from "react";

export default function DirectoryForm({directoryArray}){

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("");

    const handleFNameChange = (event) => setFName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // validation
        let newContact = {
            id: (directoryArray.length + 2),
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            type: type
        }
    }

    return(
        <form onSubmit={handleSubmit} className="bg-green-400 rounded p-5">
            <h2>Contact Form</h2>
            <div className="mb-3">
                <label className="inline-block w-40">First Name:</label>
                <input type="text" onChange={handleFNameChange} value={fname} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Last Name:</label>
                <input type="text" onChange={ (event) => setLName(event.target.value) } value={lname} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Email:</label>
                <input type="text" onChange={ (event) => setEmail(event.target.value) } value={email} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Phone:</label>
                <input type="text" onChange={ (event) => setPhone(event.target.value) } value={phone} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Contact Type:</label>
                <select onChange={ (event) => setType(event.target.value) } value={type}>
                    <option value="" selected disabled>--- Please choose a type ---</option>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div>
                <button>Add New Contact</button>
            </div>
        </form>
    );
}