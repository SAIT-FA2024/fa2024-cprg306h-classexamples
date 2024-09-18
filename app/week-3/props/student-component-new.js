

export default function StudentComponentNew({studentObj}){

    let {studentName, studentAge, address:{city, province} } = studentObj;

    return(
        <div className="bg-red-400 border border-yellow-600 p-5 my-5 mx-10 ">
            <h3>{studentName}</h3>
            <p>Age: {studentAge}</p>
            <p>{city} <b>{province}</b></p>
        </div>
    );
}