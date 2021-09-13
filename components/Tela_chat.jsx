import styles from "../styles/tela_chat.module.css"
import Msg from "./Msg"

export default function Tela(props){
    return (
        <div className={styles.tela}>
            <Msg status="recebida"/>
            <Msg status="enviada"/>
            <input type="text" placeholder="Digite sua mensagem..."/>
        </div>
    )
}