import Image from "next/image"
import local from "../../../public/local.png"
import telefone from "../../../public/telefone.png"
import email from "../../../public/email.png"
import fb from "../../../public/fb.png"
import ig from "../../../public/ig.png"
import tt from "../../../public/tt.png"

export default function Contato(){
    return(
        <section id="contato">
            <div>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
            </div>

            <div>
                <div>
                    <h3>Nossos Contatos</h3>
                    <div>
                        <Image src={local} alt="imagem localização"/>
                        <Image src={telefone} alt="imagem telefone"/>
                        <Image src={email} alt="imagem email"/>
                    </div>
                    <div>
                        <span>Nova Iguaçu, RJ</span>
                        <span>(21) 9999-9999</span>
                        <span>contato@oticavida.com</span>
                    </div>
                </div>
                <div>
                    <h3>Nossas Redes Sociais</h3>
                    <div>
                        <Image src={fb} alt="imagem Facebook"/>
                        <Image src={ig} alt="imagem Instagram"/>
                        <Image src={tt} alt="imagem Twitter"/>
                    </div>
                    <div>
                        <span>/OticaVida</span>
                        <span>@oticavidarj</span>
                        <span>@oticavidarj</span>
                    </div>
                </div>
            </div>
        </section>
    )
}