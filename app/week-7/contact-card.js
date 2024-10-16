export default function DirectoryCard({contact}){
    return(
        <div className="rounded p-5 bg-blue-500">
            <h3>{contact.fname} {contact.lname}</h3>
            <p>ID#: {contact.id}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Contact Type: {contact.type}</p>
        </div>
    );
}