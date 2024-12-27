import React, { useState } from 'react'
import styles from './Search.module.css'

export default function Search({ onSearch }) {

    function handleChange(event) {
        onSearch(event.target.value)
    }

    return (
        <div className={styles.searchContainer}>
            <label className={styles.searchLabel}>Search Pokémon: </label>
            <input className={styles.searchInput} type="text" placeholder='Pikachu' onChange={handleChange}></input>
        </div>
    )
}
