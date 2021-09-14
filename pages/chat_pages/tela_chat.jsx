// Importando os componentes que serão usados nessa página
import Footer from "../../components/Footer"
import Tela from "../../components/Tela_chat"
import Titulo from "../../components/Titulo"


export default function tela_chat(){
    return ( // os componentes são as tags em verde, para editá-los ir em ../../components/
        <body style={{backgroundColor:"#4b4c4d"}}>
            <Titulo conteudo="how's going chat"/> {/* as tags tem propriedades (props) neste caso a propriedade é "conteudo" */}
            <Tela/>
            <Footer/>
        </body>
    )
}