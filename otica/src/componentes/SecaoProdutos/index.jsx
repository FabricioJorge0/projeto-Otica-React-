import Image from "next/image"
import Oculos1 from "../../../public/oculos01.png"
import Oculos2 from "../../../public/oculos02.png"
import Oculos3 from "../../../public/oculos03.png"
import Oculos4 from "../../../public/oculos04.png"
import style from "@/componentes/SecaoProdutos/SecaoProdutos.module.css"

export default function Produtos(){
    return(
        <section id="produto" className={style.produto}>
            <div className={style.titulos}>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, ócilos de sol, lentes transition nos modelos masculinos, femininos e infantil</p>
                <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado!</p>
            </div>

            <div className={style.cardProdutos}>
                <div className={style.card}>
                    <h4>Óculos de grau</h4>
                    <Image className={style.imgCard} src={Oculos1} alt="Imagem do oculos 1"/>
                    <p>R$ 500,00</p>
                </div>
                <div className={style.card}>
                    <h4>Óculos transition</h4>
                    <Image className={style.imgCard} src={Oculos2} alt="Imagem do oculos 2"/>
                    <p>R$ 750,00</p>
                </div>
                <div className={style.card}>
                    <h4>Óculos transition</h4>
                    <Image className={style.imgCard} src={Oculos3} alt="Imagem do oculos 3"/>
                    <p>R$ 750,00</p>
                </div>
                <div className={style.card}>
                    <h4>Óculos transition</h4>
                    <Image className={style.imgCard} src={Oculos4} alt="Imagem do oculos 4"/>
                    <p>R$ 750,00</p>
                </div>
            </div>

            <div className={style.descricaoProduto}>
                <h3>Todos os nosso produtos incluem:</h3>
                <ol className={style.listaBen}>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ol>
            </div>
        </section>
    )
}