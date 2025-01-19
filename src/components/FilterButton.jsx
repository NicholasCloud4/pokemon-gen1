import React from "react";

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
    ];

    function handleFilterClick(event) {
        onTypeSelect(event.target.value)
    }


    return (
        <>
            {types.map((type) => (
                <button key={type} value={type} onClick={handleFilterClick}>
                    {type}
                </button>
            ))}

        </>

    )
}