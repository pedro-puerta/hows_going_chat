import styles from "../styles/footer.module.css"

export default function Footer(props){
    return (
        <div className={styles.footer}>
                <ul className={styles.footer}>
                    <li className={styles.footer}>Desenvolvedores:</li>
                    <li className={styles.footer}>- Adalto</li>
                    <li className={styles.footer}>- Pedro</li>
                </ul>
                <p className={styles.copyright}>Projeto Faculdade Impacta 2021</p>
        </div>
    )
}