import LinkButton from "../layout/LinkButton"

import "./Home.css"
import savings from "../../img/savings.svg"

const Home = () => {
    return (
        <section className="home_container">
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="newproject" text="Criar Projeto"/>
            <img src={savings} alt="Savings" />
        </section>
    )
}

export default Home