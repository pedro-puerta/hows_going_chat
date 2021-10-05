// Importando o estilo deste componente:
import styles from "../styles/selecao_interlocutor.module.css"
import Link from "next/link"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){
    return (
        <>
        <div className={styles.txt_sobre_tela}>
            <Link href="/chat_pages/login"><p className={styles.logout}>Logout</p></Link>
        </div>
        <div className={styles.tela}>
            <input type="text" placeholder="Buscar um usuário"/>
            <ul>
                <Link href="/chat_pages/tela_chat"><li>Interlocutor 1</li></Link>
                <Link href="/chat_pages/tela_chat"><li>Interlocutor 2</li></Link>
                <Link href="/chat_pages/tela_chat"><li>Interlocutor 3</li></Link>
                <Link href="/chat_pages/tela_chat"><li>Interlocutor 4</li></Link>
            </ul>
        </div>
        </>
    )
}