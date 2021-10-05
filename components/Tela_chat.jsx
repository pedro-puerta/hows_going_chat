// Importando o estilo deste componente:
import styles from "../styles/tela_chat.module.css"
// Importando o componente de mensagem:
import Msg from "./Msg"
import Link from "next/link"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){
    return (
        <>
        <div className={styles.txt_sobre_tela}>
            <Link href="/chat_pages/selecao_interlocutor"><p className={styles.voltar}>Voltar</p></Link>
            <Link href="/chat_pages/login"><p className={styles.logout}>Logout</p></Link>
        </div>
        <div className={styles.tela}>
            <h1>Nome do Interlocutor</h1>
            <Msg status="recebida"/> {/* a propriedade da mensagem "status" é = a recebida (ver componente Msg.jsx) */}
            <Msg status="enviada"/> {/* a propriedade da mensagem "status" é = a enviada (ver componente Msg.jsx) */}
            <input type="text" placeholder="Digite sua mensagem..."/>
        </div>
        </>
    )
}