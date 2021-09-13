import styles from "../styles/login.module.css"

export default function Login(props){
    return (
        <div className={styles.loginPage}>
            <div className={styles.form}>
                <form className={styles.loginForm}>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                </form>
            </div>
        </div>
    )
}