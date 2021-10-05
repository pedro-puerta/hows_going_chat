// Importando o estilo deste componente:
import styles from "../styles/login.module.css"
import Link from "next/link"

//Teste
// Este componente é a tela de login, podendo ser "chamada" pela <Login/>
export default function Cadastro(props){
    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <form className={styles.loginForm}>
                    <input type="text" placeholder="Crie seu Username"/>
                    <input type="password" placeholder="Crie sua senha"/>
                    <input type="password" placeholder="Confirme sua senha"/>
                    <Link href="/chat_pages/login"><button>Criar</button></Link>
                    <Link href="/chat_pages/login"><p style={{color: "#ddd"}}>Já tenho uma conta!</p></Link>
                </form>
            </div>
        </div>
    )
}