import Image from "next/image"
import imagemLoja from "../../../public/loja.png"
import imagemAtendimento from "../../../public/atendimento.png"
import style from "@/componentes/SecaoSobre/SecaoSobre.module.css"


export default function Sobre(){
    return(
        <section id="sobre" className={style.secaoSobre}>
            <div className={style.titulos}>
                <h3>QUEM SOMOS NÓS</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>

            <div className={style.cardSobre}>
                <div className={style.cards}>
                    <Image className={style.imgCard}  src={imagemLoja} />
                </div>
                <div className={style.cards}>
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div >
                <div className={style.cards}>
                    <h4>Atendimento Flexível</h4>
                    <p>Nossa equipe possui e é treinada para te atender</p>
                </div>
                <div className={style.cards}>
                    <Image className={style.imgCard} src={imagemAtendimento}/>
                </div>
            </div>
        </section>
    )
}