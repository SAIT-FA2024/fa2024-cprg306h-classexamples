"use client"

import { useState } from "react";
import DirectoryForm from "./contact-form";
import DirectoryList from "./contact-list";
import directoryData from "./contacts-info.json";

export default function PageDirectory(){

    // let directoryArray = directoryData.map(
    //     (contact) => ({...contact})
    // );

    const [directoryList, setDirectoryList] = useState(
        directoryData.map( (contact) => ({...contact}) )
    );
    
    const [isFormOpen, setFormOpen] = useState(false);

    const handleNewContact = (newContact) => {
        setDirectoryList( [...directoryList, newContact] )
    }

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return(
        <main>
            {
                isFormOpen &&
                <DirectoryForm
                    directoryArray={directoryList}
                    newContactFunc={handleNewContact}
                    closeFormFunc={closeForm}
                />
            }
            <h1>Contacts Directory</h1>
            <DirectoryList directoryArray={directoryList} />
            <div>
                <button onClick={openForm} >Add new contact</button>
            </div>
        </main>
    );
}