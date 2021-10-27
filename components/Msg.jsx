// Importando o estilo deste componente:
import styles from "../styles/mensagem.module.css"


// Esse componente é o "balãozinho" de mensagem, a variável statusMsg recebe o 
// valor dependendo se for uma mensagem de envio ou de recebimento, para que o 
// estilo do "balãozinho" seja apropriado.
export default function Msg_recebida(props){
    // caso o atributo do componente seja recebida (Mensagem recebida) receberá 
    // o estilo de mensagem recebida, caso contrário receberá o estilo de 
    // mensagem enviada.
    let statusMsg = props.status == "recebida" ? styles.msg_r : styles.msg_e
    return <div className={statusMsg}>{props.conteudo}</div>
}