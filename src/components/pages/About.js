import React from 'react';
import './About.css';
import company from "../../img/Empresa.jpg"
import erick from "../../img/erick.jpeg"
import franklin from "../../img/franklares.jpg"
import gustavo from "../../img/gus.jpeg"
import felipe from "../../img/felipe.jpg"
import rute from "../../img/rute.jpeg"
import vitor from "../../img/xvitos.jpeg"
import neto from "../../img/neto.jpg"
import fabio from "../../img/fabio.jpeg"
import jp from "../../img/jp.jpeg"

function About() {
  return (
    <div className="about-page">
        <h1>Sobre Nós</h1>
        <p>Nós somos uma empresa de gerenciamento de projetos que ajuda negócios a executar seus projetos com sucesso dentro do prazo e orçamento.</p>
        <img className='company' src={company} alt="Company" />
        <p>Nossa missão é fornecer serviços excepcionais de gerenciamento de projetos que gerem resultados e superem as expectativas dos clientes.</p>
        <h2>Nossa Equipe</h2>
        <p>Temos uma equipe de gerentes de projetos experientes que são dedicados a entregar resultados excepcionais para nossos clientes.</p>

        <div className="container__equipe">

          <div className="equipe__container">
            <img className="equipe__imagem" src={franklin} alt="Franklin Rodrigues" />
            <p>Franklin Farias</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={erick} alt="Érick Fernandes" />
            <p>Érick Fernandes</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={jp} alt="João Pedro" />
            <p>João Pedro</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={vitor} alt="Vitor Daniel" />
            <p>Vitor Daniel</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={gustavo} alt="Gustavo Nascimento" />
            <p>Gustavo Nascimento</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={felipe} alt="Felipe Zeri" />
            <p>Felipe Zeri</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={rute} alt="Rute Borges" />
            <p>Rute Borges</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={fabio} alt="Fabio Moreira" />
            <p>Fábio Moreira</p>
          </div>

          <div className="equipe__container">
            <img className="equipe__imagem" src={neto} alt="José Neto" />
            <p>José Carlos Neto</p>
          </div>
        </div>

        <h2>Nossas Soluções</h2>
        <p>Nós oferecemos uma variedade de soluções de gerenciamento de projetos, incluindo planejamento de projetos, gerenciamento de riscos, acompanhamento de projetos e relatórios.</p>
        <h2>Nossos Clientes</h2>
        <p>Já trabalhamos com uma variedade de clientes em setores como saúde, finanças e tecnologia.</p>
    </div>
  );
}

export default About;
