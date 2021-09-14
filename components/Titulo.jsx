// Importando o estilo deste componente:
import styles from "../styles/titulo.module.css"


// Componente de título, o conteudo do título é definido por meio de <Titulo conteudo="..."/>
export default function Footer(props){
    return (
        <h1 className={styles.titulo}>{props.conteudo}</h1>
    )
}