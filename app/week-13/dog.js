export default function Dog({dogObj}){

    return(
        <div className="border-b-2">
            <p><b>Name:</b> {dogObj.name} </p>
            <p><b>Age:</b> {dogObj.age} </p>
        </div>
    );
}