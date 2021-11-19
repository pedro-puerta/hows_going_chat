// Importando o estilo deste componente:
import styles from "../styles/tela_chat.module.css"
// Importando o componente de mensagem:
import Msg from "./Msg"
import Link from "next/link"
import { useState } from "react"
import { PostMsg } from "../public/scripts/api"


// Esse componenente é onde a conversa do chat acontece.
export default function Tela(props){

    const [inputMsg, setInputMsg] = useState("")

    const [inputFrom, setInputFrom] = useState("")

    const [inputTo, setInputTo] = useState("")

    const [mensagens, setMensagens] = useState([])

    function envia_msg(){
        let mensagem = <Msg conteudo={inputMsg}/>
        const dados = {
            "to": inputTo,
            "from": inputFrom,
            "msg": inputMsg
        }
        PostMsg(dados)
        setMensagens(mensagens => [...mensagens, mensagem])
        setInputMsg("")
    }

    function resgata_msg(){

        // Primeiro GET para trazer as mensagens enviadas:

        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                let resposta = JSON.parse(this.responseText);
                if (resposta != null){
                    let mensagens_get = JSON.parse(resposta["body"]);
                    for (let i = 0; i < mensagens_get.length; i++){
                        let mensagem = <Msg date_time={mensagens_get[i]["date_time"]} conteudo={mensagens_get[i]["msg"]}/>
                        setMensagens(mensagens => [...mensagens, mensagem])
                    }
                }
            }});
        let consulta = "?from=" + inputFrom + "&to=" + inputTo
        xhr.open("GET", "https://o5bbyytss4.execute-api.us-east-1.amazonaws.com/prod" + consulta);
        xhr.send();

        // Segundo GET para trazer as mensagens recebidas:

        let xhr_recebida = new XMLHttpRequest();
        xhr_recebida.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                let resposta_recebida = JSON.parse(this.responseText);
                if (resposta_recebida != null){
                    let mensagens_get_recebida = JSON.parse(resposta_recebida["body"]);
                    for (let a = 0; a < mensagens_get_recebida.length; a++ ){
                        let mensagem_recebida = <Msg status="recebida" date_time={mensagens_get_recebida[a]["date_time"]} conteudo={mensagens_get_recebida[a]["msg"]}/>
                        setMensagens(mensagens => [...mensagens, mensagem_recebida])
                    }
                }
            }});
        let consulta_recebida = "?from=" + inputTo + "&to=" + inputFrom
        xhr_recebida.open("GET", "https://o5bbyytss4.execute-api.us-east-1.amazonaws.com/prod" + consulta_recebida);
        xhr_recebida.send();

    }

    return (
        <>
        <div className={styles.txt_sobre_tela}>
            <Link href="/chat_pages/selecao_interlocutor"><p className={styles.voltar}>Voltar</p></Link>
            <Link href="/chat_pages/login"><p className={styles.logout}>Logout</p></Link>
        </div>
        <div className={styles.tela}>
            <input type="text" value={inputFrom} onChange={e => setInputFrom(e.target.value)} placeholder="De"/>
            <input type="text" value={inputTo} onChange={e => setInputTo(e.target.value)} placeholder="Para"/>
            <button onClick={resgata_msg}>Conectar</button>
            {mensagens}
            <input className={styles.msg} type="text" value={inputMsg} onChange={e => setInputMsg(e.target.value)} placeholder="Digite sua mensagem..."/>
            <button onClick={envia_msg}>Enviar</button>
            </div>
        </>
    )
}