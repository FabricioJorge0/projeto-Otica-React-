import Image from "next/image"
import Oculos1 from "../../../public/oculos01.png"
import Oculos2 from "../../../public/oculos02.png"

export default function Produtos(){
    return(
        <section>
            <div>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, ócilos de sol, lentes transition nos modelos masculinos, femininos e infantil</p>
                <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado!</p>
            </div>

            <div>
                <div>
                    <h4>Óculos de grau</h4>
                    <Image src={Oculos1} alt="Imagem do oculos 1"/>
                    <p>R$ 500,00</p>
                </div>
                <div>
                    <h4>Óculos transition</h4>
                    <Image src={Oculos2} alt="Imagem do oculos 1"/>
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div>
                <h3>Todos os nosso produtos incluem:</h3>
                <ol>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ol>
            </div>
        </section>
    )
}