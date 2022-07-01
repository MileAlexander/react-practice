import React, { useEffect, useState } from 'react';

function Timer2() {


    const [time, setTime] = useState(0);
    const [countryName, setCountryName] = useState("");
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
        setLoading(true);
        fetch(`https://restcountries.com/v3.1/name/hungary`)
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
            setLoading(false);
        });   
    }, []);

    useEffect(()=>{
        console.log("Time changed!");

    }, [time]);
    
    useEffect(()=>{
        async function fetchData() {
            let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            let data = await response.json();
            setCountry(data[0].name.nativeName[data[0].cca3.toLowerCase()].common);
            
        }
        if(countryName !== ""){
            fetchData();
        };
    }, [countryName]);

    return(
        loading ? <div>Loading...</div> :
        <>
            <div>
                {time}
            </div>
            <input type="text" onChange={(event)=>{setCountryName(event.target.value)}}></input>
            <button onClick={()=>{setTime(time+1)}}>Click me!</button>
            <div>{country}</div>
        </>
    );
};

export default Timer2;