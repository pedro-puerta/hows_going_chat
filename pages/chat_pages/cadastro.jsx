// Importando os componentes que serão usados nessa página
import Cadastro from "../../components/Cadastro"
import Footer from "../../components/Footer"
import Titulo from "../../components/Titulo"


export default function cadastro(){
    return ( // os componentes são as tags em verde, para editá-los ir em ../../components/
        <body style={{backgroundColor:"#4b4c4d"}}>
            <Titulo conteudo="Cadastre-se em nosso chat!"/> {/* as tags tem propriedades (props) neste caso a propriedade é "conteudo" */}
            <Cadastro/>
            <Footer/>
        </body>
    )
}