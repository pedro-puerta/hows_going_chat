// Importando o estilo deste componente:
import styles from "../styles/login.module.css"
import Link from "next/link"

//Teste
// Este componente é a tela de login, podendo ser "chamada" pela <Login/>
export default function Login(props){
    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <form className={styles.loginForm}>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <Link href="/chat_pages/tela_chat"><button>login</button></Link>
                </form>
            </div>
        </div>
    )
}