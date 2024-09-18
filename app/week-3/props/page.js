import StudentComponent from "./student-component";
import StudentComponentNew from "./student-component-new";

export default function PropsPage(){

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

    let studentTwo = {
        studentName: "Alice",
        studentAge: 23,
        address: {
            city: "Edmonton",
            province: "AB"
        }
    }

    return(
        <main>
            <StudentComponent sName="Kevin" sAge="21" sCity="Edmonton" sProvince="AB" />
            <StudentComponent
                sName={studentOne.studentName}
                sAge={studentOne.studentAge}
                sCity={studentOne.address.city}
                sProvince={studentOne.address.province}
            />
            <StudentComponentNew studentObj={studentOne}/>
            <StudentComponentNew studentObj={studentTwo} />
        </main>
    );
}