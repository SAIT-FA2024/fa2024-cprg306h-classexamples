import DirectoryCard from "./contact-card";


export default function DirectoryList({directoryArray}){
    return(
        <section className="grid grid-cols-3 gap-5">
            {directoryArray.map( (contact) => (
                <DirectoryCard contact={contact} />
            ) )}
        </section>
    );
}