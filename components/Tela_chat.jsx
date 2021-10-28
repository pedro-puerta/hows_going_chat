// Importando o estilo deste componente:
import styles from "../styles/tela_chat.module.css"
// Importando o componente de mensagem:
import Msg from "./Msg"
import Link from "next/link"
import { useState } from "react"
import { enviaMsg_API, recebeMsg_API } from "../public/js/api"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){

    const [caixa, setCaixa] = useState("")

    const [mensagens, setMensagens] = useState([])

    let recebidas = recebeMsg_API("usuario")

    let msg_recebidas = []

    for (i in recebidas){
        if (i["from"] == "interlocutor"){
            msg_recebidas.push(i["msg"])
        }
    }

    setMensagens(mensagens => [...mensagens, msg_recebidas])

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