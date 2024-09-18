

export default function StudentComponent({sName, sAge, sCity, sProvince}) {

    return(
        <div className="bg-green-400 mb-10">
            <h3>{sName}</h3>
            <p>Age: {sAge}</p>
            <p>{sCity}, {sProvince}</p>
        </div>
    );
}