import styles from './PokemonInfo.module.css';

export default function PokemonInfo({ id, name, type, base }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <p className={styles.id}>#{id}</p>
                <h1 className={styles.name}>{name}</h1>
            </div>
            <p className={styles.type}>
                <strong>Type:</strong> {type.join(', ')}
            </p>
            <div className={styles.stats}>
                <h2>Base Stats</h2>
                <p><strong>HP:</strong> {base.HP}</p>
                <p><strong>Attack:</strong> {base.Attack}</p>
                <p><strong>Defense:</strong> {base.Defense}</p>
                <p><strong>Sp. Attack:</strong> {base["Sp. Attack"]}</p>
                <p><strong>Sp. Defense:</strong> {base["Sp. Defense"]}</p>
                <p><strong>Speed:</strong> {base.Speed}</p>
            </div>
        </div>
    );
}
