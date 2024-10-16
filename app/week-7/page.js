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
    
    const handleNewContact = (newContact) => {
        setDirectoryList( [...directoryList, newContact] )
    }

    return(
        <main className="m-5">
            <h1>Contacts Directory</h1>
            <DirectoryForm directoryArray={directoryList}/>
            <DirectoryList directoryArray={directoryList} />
            
        </main>
    );
}