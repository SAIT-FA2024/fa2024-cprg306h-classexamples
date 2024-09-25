
export default function FunctionPage(){

    function helloWorld(username, dayOfWeek) {
        // return "Hello World! Welcome back " + username + ". Today is " + dayOfWeek;
        return `Hello World! Welcome back ${username}. Today is ${dayOfWeek}`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back ${username}. Today is ${dayOfWeek}`;
    }

    const helloworld3 = (username) => `Hello ${username}`;
    const helloMath = (a,b) => a + b;

    const louder = (textFunc, username) => {
        // check to make sure that textFunc is a function
        // check to make sure the function is consistent with my logic
        let thisText = textFunc(username);
        return `${thisText.toUpperCase()}!!!!!`
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    const originalFunc = (num) => num + 2; 
    const newFunc = originalFunc;

    return (
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Wednesday")}</p>
            <p>{helloWorld2("Joe", "Thursday")}</p>
            <p>{helloworld3("Bob")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloworld3, "Robert")}</p>
            <p>{louder(helloWorld2, "Anne")}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(7)}</p>
            <p>{newFunc.name}</p>
        </main>
    );
}