import Image from "next/image"
import local from "../../../public/local.png"
import telefone from "../../../public/telefone.png"
import email from "../../../public/email.png"
import fb from "../../../public/fb.png"
import ig from "../../../public/ig.png"
import tt from "../../../public/tt.png"
import style from "@/componentes/SecaoContato/SecaoContato.module.css"

export default function Contato(){
    return(
        <section id="contato" className={style.secaoContato}>
            <div className={style.titulos}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
            </div>

            <div className={style.divContatos}>
                <div className={style.contatos}>
                    <h3>Nossos Contatos</h3>
                    <div className={style.lead}>
                        <div className={style.imagens}>
                            <Image className={style.img} src={local} alt="imagem localização"/>
                            <Image className={style.img}  src={telefone} alt="imagem telefone"/>
                            <Image className={style.img}  src={email} alt="imagem email"/>
                        </div>
                        <div className={style.endereco}>
                            <span>Nova Iguaçu, RJ</span>
                            <span>(21) 9999-9999</span>
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                </div>
                <div className={style.contatos}>
                    <h3>Nossas Redes Sociais</h3>
                    <div className={style.lead}>
                        <div className={style.imagens}>
                            <Image className={style.img}  src={fb} alt="imagem Facebook"/>
                            <Image className={style.img}  src={ig} alt="imagem Instagram"/>
                            <Image className={style.img}  src={tt} alt="imagem Twitter"/>
                        </div>
                        <div className={style.endereco}>
                            <span>/OticaVida</span>
                            <span>@oticavidarj</span>
                            <span>@oticavidarj</span>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}