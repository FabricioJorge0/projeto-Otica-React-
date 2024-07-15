import Imagem from "next/image"
import Logo from "../../../public/logo.png"
import style from "@/componentes/Topo/Topo.module.css"

export default function Topo() {
    return(
        <header className={style.topo}>
            <div className={style.topoComponent}>
                <div >
                    <Imagem className={style.imagemTopo} src={Logo} alt="Logo da Otica"/>
                </div>
                <nav className={style.nav}>
                    <ul>
                        <li><a href="#">Produto</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}