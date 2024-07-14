import Imagem from "next/image"
import Logo from "../../../public/logo.png"
import style from "@/componentes/Topo/Topo.module.css"

export default function Topo() {
    return(
        <header>
            <div>
                <Imagem src={Logo} alt="Logo da Otica"/>
            </div>
            <div>
                <ul>
                    <li><a href="#">Produto</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}