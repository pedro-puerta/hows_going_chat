import Footer from "../../components/Footer"
import Tela from "../../components/Tela_chat"
import Titulo from "../../components/Titulo"

export default function tela_chat(){
    return (
        <body style={{backgroundColor:"#4b4c4d"}}>
            <Titulo conteudo="how's going chat"/>
            <Tela/>
            <Footer/>
        </body>
    )
}