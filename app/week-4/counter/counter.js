

export default function Counter({currentCount, incrementCountFunction, resetCounterFunction}) {

    // button enabled
    let buttonStyles = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    if(currentCount >= 10){
        // button disabled
        buttonStyles = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }

    return(
        <div className="bg-slate-300 p-5">
            <h2 className="text-2xl">Increment Counter</h2>
            <p className="text-lg">Counter: {currentCount}</p>
            <button onClick={incrementCountFunction} className={buttonStyles}>Increment!</button>
            <button className="bg-blue-400 hover:bg-blue-700
            active:bg-yellow-300 rounded text-white
            mt-5 px-4 py-2" onClick={resetCounterFunction}>Reset Counter</button>
        </div>
    );
}