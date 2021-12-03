import {Spinner} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Optionas from "./Optionas";
import cat from "./Cat";

const Search = () => {

    const [cats, setCats] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
            fetch("https://api.thecatapi.com/v1/breeds")
                .then(response => response.json())
                .then(data => setCats(data))
        },[]
    )

    const handleClick = () => {
        setShow(true);
        const select = document.querySelector('.form-select');
        const value = select.options[select.selectedIndex].value;

        console.log('Katino id - ' + value);
    }

    console.log(cats[0])




    return(

        <>
            <select className="form-select" aria-label="Default select example" onChange={handleClick}>
                <option selected>Open this select menu</option>
                {cats.map(cat=><Optionas value={cat.id} name={cat.name}/>)}
            </select>
            {(show)&&<h1>Pavyko</h1>}
        </>

    )
}

export default Search