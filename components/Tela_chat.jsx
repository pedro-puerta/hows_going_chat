// Importando o estilo deste componente:
import styles from "../styles/tela_chat.module.css"
// Importando o componente de mensagem:
import Msg from "./Msg"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){
    return (
        <div className={styles.tela}>
            <Msg status="recebida"/> {/* a propriedade da mensagem "status" é = a recebida (ver componente Msg.jsx) */}
            <Msg status="enviada"/> {/* a propriedade da mensagem "status" é = a enviada (ver componente Msg.jsx) */}
            <input type="text" placeholder="Digite sua mensagem..."/>
        </div>
    )
}