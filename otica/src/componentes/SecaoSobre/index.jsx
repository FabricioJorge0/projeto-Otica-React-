import Image from "next/image"
import imagemLoja from "../../../public/loja.png"
import imagemAtendimento from "../../../public/atendimento.png"


export default function Sobre(){
    return(
        <section>
            <div>
                <h3>QUEM SOMOS NÓS</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>

            <div>
                <div>
                    <Image src={imagemLoja} />
                </div>
                <div>
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div>
                    <h4>Atendimento Flexível</h4>
                    <p>Nossa equipe possui e é treinada para te atender</p>
                </div>
                <div>
                    <Image src={imagemAtendimento}/>
                </div>
            </div>
        </section>
    )
}