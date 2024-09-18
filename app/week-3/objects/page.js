

export default function ObjectsPage(){

    let studentOne = {
        studentName: 'Joe',
        studentAge: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"],
        address: {
            line1: "123 Main St.",
            city: "Calgary",
            province: "AB"
        }
    }

    let {studentName: sName, studentAge, address:{city, province}, schedule:{3:webDev2} } = studentOne;

    return (
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>Web Dev 2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>
            <h2>Destructuring</h2>
            <p>Name: {sName}</p>
            <p>Age: {studentAge}</p>
            <p>City: {city}</p>
            <p>Web Dev 2: {webDev2}</p>

        </main>
    );
}