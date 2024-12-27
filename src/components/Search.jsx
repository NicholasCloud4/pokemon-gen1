import React, { useState } from 'react'

/**
 * 
 * Think about the following:

  1. What is the onChange event, and how can you use it to get the input value?
  2. What is the value attribute, and how can you use it to store the input value?
  3. How can you use a state variable to store the input value?

  Try to modify your code to store the input value in a state variable. 
  You can use the useState hook for this.
 */

export default function Search() {

    const [search, setSearch] = useState("");

    function handleChange(event) {
        setSearch(event.target.value)
    }
    console.log(search);


    return (
        <>
            <label>Search Pokémon: </label>
            <input type="text" placeholder='Pikachu' onChange={handleChange} value={search}></input>
        </>
    )
}
