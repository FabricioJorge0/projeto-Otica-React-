import Imagem from "next/image"
import Logo from "../../../public/logo.png"
import style from "@/componentes/Topo/Topo.module.css"
import abrirMenu from "../../../public/abrir menu.png"
import fecharMenu from '../../../public/fechar menu.png'



function abrirModal(){
    var mudarBotao = document.getElementById('botao')
    var fecharBotao = document.getElementById('fechaBotao')
    var modal = document.getElementById('modal')                 
    modal.style.display = 'block'
    mudarBotao.style.display = 'none'
    fecharBotao.style.display = 'flex'
}
function fecharModal(){
    var mudarBotao = document.getElementById('botao')
    var fecharBotao = document.getElementById('fechaBotao')
    var modal = document.getElementById('modal')                 
    modal.style.display = 'none'
    mudarBotao.style.display = 'flex'
    fecharBotao.style.display = 'none'
}

// () => {
//     var mudarBotao = document.getElementById('botao')
//     var fecharBotao = document.getElementById('fechaBotao')
//     var modal = document.getElementById('modal')
//     var topo = document.getElementById('topo')
//     if(topo.style.width >= '30%'){

//         modal.style.display = 'none'
//         mudarBotao.style.display = 'none'
//         fecharBotao.style.display = 'none'
//     }
// }






export default function Topo() {

    return(
        <header  className={style.topo}>
            <div id="topo" className={style.topoComponent}>
                <div >
                    <Imagem className={style.imagemTopo} src={Logo} alt="Logo da Otica"/>
                </div>
                <nav className={style.nav}>
                    <ul>
                        <li><a href="#produto">Produto</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>

                <div id="botao" className={style.menuBotao} >
                    <button onClick={abrirModal} id="botao" className={style.botao}>
                        <Imagem className={style.abrir} src={abrirMenu} />
                    </button>
                </div>
                <div id="fechaBotao" className={style.fecharBotao} >
                    <button onClick={fecharModal} id="botao" className={style.botao}>
                        <Imagem className={style.abrir} src={fecharMenu} />
                    </button>
                </div>
                {/* {
                    let botao = document.getElementById('botao')
                    if(botao.style.display == 'none'){
                        modal.style.display = 'none'
                    }
                } */}

                

                <nav id="modal" className={style.modal}>
                    <ul>
                        <li><a href="#produto">Produto</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>

            </div>

            
        </header>
    )
}

// modalWidth()
