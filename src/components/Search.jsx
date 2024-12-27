import React, { useState } from 'react'


export default function Search({ onSearch }) {


    function handleChange(event) {
        onSearch(event.target.value)
    }


    return (
        <>
            <label>Search Pokémon: </label>
            <input type="text" placeholder='Pikachu' onChange={handleChange}></input>
        </>
    )
}
