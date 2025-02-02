import React from "react";
import style from "./FilterButton.module.css"

export default function FilterButton({ onTypeSelect }) {

    const types = [
        'Normal',
        'Water',
        'Grass',
        'Fire',
        'Electric',
        'Ice',
        'Ground',
        'Flying',
        'Poison',
        'Fighting',
        'Dark',
        'Psychic',
        'Bug',
        'Rock',
        'Steel',
        'Dragon',
        'Fairy',
        'Ghost',
        ""
    ];

    function handleFilterClick(event) {
        onTypeSelect(event.target.value)
    }


    return (
        <>
            {types.map((type) => (
                <button className={style.button} key={type} value={type} onClick={handleFilterClick}>
                    {type === "" ? "Show All" : type}
                </button>
            ))}

        </>

    )
}