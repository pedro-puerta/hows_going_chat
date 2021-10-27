// Importando o estilo deste componente:
import styles from "../styles/tela_chat.module.css"
// Importando o componente de mensagem:
import Msg from "./Msg"
import Link from "next/link"
import { useState } from "react"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){

    const [caixa, setCaixa] = useState("")

    const [mensagens, setMensagens] = useState([])

    function envia_msg(){
        let mensagem = <Msg conteudo={caixa}/>
        // Posso inserir a mensagem no banco aqui!
        // setMensagens(mensagens.push(mensagem)) --> ERRADO!!!
        setMensagens(mensagens => [...mensagens, mensagem])
        setCaixa("")
    }
    
    const teste = [
        <Msg conteudo="teste1"/>,
        <Msg conteudo="teste2"/>,
        <Msg conteudo="teste3"/>,
        <Msg conteudo="teste4"/>,
        <Msg conteudo="teste5"/>
    ]

    return (
        <>
        <div className={styles.txt_sobre_tela}>
            <Link href="/chat_pages/selecao_interlocutor"><p className={styles.voltar}>Voltar</p></Link>
            <Link href="/chat_pages/login"><p className={styles.logout}>Logout</p></Link>
        </div>
        <div className={styles.tela}>
            <h1>Nome do Interlocutor</h1>
            {mensagens}
            <input type="text" value={caixa} onChange={e => setCaixa(e.target.value)} placeholder="Digite sua mensagem..."/>
            <button onClick={envia_msg}>Enviar</button>
            </div>
        </>
    )
}