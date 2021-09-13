import styles from "../styles/mensagem.module.css"

export default function Msg_recebida(props){
    if (props.status == "recebida"){
        return (
            <div className={styles.msg_r}></div>
        )
    } else {
        return (
            <div className={styles.msg_e}></div>
        )
    }
}