export default function Artwork({artworkObj}){

    const {
        title,
        primaryImageSmall,
        artistDisplayName,
        objectDate,
        department
    } = artworkObj;

    return(
        <div className="mx-20 my-10 p-5 bg-blue-400 rounded">
            <h3 className="text-lg">{title}</h3>
            <img src={primaryImageSmall} className="max-h-60 border-2 border-cyan-900" />
            <ul>
                <li>Artist: {artistDisplayName}</li>
                <li>Date: {objectDate}</li>
                <li>Department: {department}</li>
            </ul>
        </div>
    );
}