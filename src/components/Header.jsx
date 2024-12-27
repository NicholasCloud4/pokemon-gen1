import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Pokémon <span className={styles.gen}>GEN 1</span>
            </h1>
        </header>
    );
}
