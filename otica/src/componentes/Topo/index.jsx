import Imagem from "next/image"
import Logo from "../../../public/logo.png"
import style from "@/componentes/Topo/Topo.module.css"
import abrirMenu from "../../../public/abrir menu.png"

export default function Topo() {
    return(
        <header className={style.topo}>
            <div className={style.topoComponent}>
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

                <div className={style.menuBotao} >
                    <button className={style.botao}>
                        <Imagem className={style.abrir} src={abrirMenu} />
                    </button>
                </div>

                <nav className={style.modal}>
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