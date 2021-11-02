// Importando o estilo deste componente:
import styles from "../styles/tela_chat.module.css"
// Importando o componente de mensagem:
import Msg from "./Msg"
import Link from "next/link"
import { useState } from "react"
import { enviaMsg_API, recebeMsg_API } from "../public/scripts/api"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){

    const [caixa, setCaixa] = useState("")

    const [mensagens, setMensagens] = useState([])

    function envia_msg(){
        let mensagem = <Msg conteudo={caixa}/>
        const dados = {
            "to": "Padrão",
            "from": "Padrão",
            "msg": caixa
        }
        enviaMsg_API(dados)
        setMensagens(mensagens => [...mensagens, mensagem])
        setCaixa("")
    }

    function recebe_msg(){
        const dados = {
            "from": "Padrão",
            "to": "Padrão"
        }
        let response = recebeMsg_API(dados)
        for (i in response){
            alert(i)
        }
    }

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
            <button onClick={recebe_msg}>Recebe</button>
            </div>
        </>
    )
}