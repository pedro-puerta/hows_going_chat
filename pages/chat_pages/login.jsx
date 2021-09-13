import Login from "../../components/Login"
import Footer from "../../components/Footer"
import Titulo from "../../components/Titulo"



export default function login(){
    return (
        <body style={{backgroundColor:"#4b4c4d"}}>
            <Titulo conteudo="how's going chat"/>
            <Login/>
            <Footer/>
        </body>
    )
}