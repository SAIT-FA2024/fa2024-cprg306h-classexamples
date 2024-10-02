"use client"

import { useState } from "react";
import ContactForm from "./managed-form";

export default function ContactPage() {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        if (showForm) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    }

    const toggleForm2 = () => showForm ? setShowForm(false) : setShowForm(true);

    return(
        <main className="p-5">
            <h1 className="text-3xl text-center mb-4 font-serif font-black">Contact Us!</h1>
            { showForm && (<ContactForm />) }
            <div>
                <button className="bg-blue-700 hover:bg-blue-600 active:bg-blue-500 text-white px-3 py-2 mt-5 rounded" onClick={toggleForm2}>Contact Form</button>
            </div>
        </main>
    )
}