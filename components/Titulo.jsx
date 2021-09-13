import styles from "../styles/titulo.module.css"

export default function Footer(props){
    return (
        <h1 className={styles.titulo}>{props.conteudo}</h1>
    )
}