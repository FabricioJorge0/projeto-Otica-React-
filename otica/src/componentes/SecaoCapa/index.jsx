import style from "@/componentes/SecaoCapa/SecaoCapa.module.css"

export default function Capa(){
    return(
        <div className={style.capa} >
            <section className={style.secaoCapa}>
                <div className={style.texto}>
                    <p>Preços baixos em</p>
                    <h1>ÓCULOS DE GRAU E DE SOL</h1>
                    <p>Você só encontra aqui!!</p>
                </div>
            </section>
        </div>
    )
}