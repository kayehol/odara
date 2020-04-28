import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import logo from "./logoPrincipal.png";
import padrao from "./padrao1.png"
import email from "./email.png"
import whatsapp from "./whatsapp.png"
import fotoLoja from "./fotoLoja.jpeg"
import fotoQuemSomos from "./fotoQuemSomos.jpeg"
import ondaBranca from "./ondaBranca.png"
import ondaPreta from "./ondaPreta.png"

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    #logo {
        margin: 25px 0 25px 0;
    }
    #padrao{
        width: 100%;
        margin-top: 20px;
    }
`

const Home = () => (
    <HomeWrapper>
        <img src={padrao} alt="Odara" id="padrao"/>
        <img src={logo} alt="Logo Odara" width="50%" id="logo" />
        <img src={padrao} alt="Odara" id="padrao"/>
    </HomeWrapper>
)

const HorarioWrapper = styled.div`
    background-color: #f4c533;
    color: #000;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    #horario {
        padding: 25px 0 25px 0;
        font-size: 4em;
        font-family: African;
    }
    .horarioBody {
        width: 90%;
        text-align: center;
        padding: 60px 0 180px 0;
        a:visited {
            text-decoration: underline;
            color: #8a8787;
        }
    }

    a:link {
        text-decoration: underline;
        color: #fff;
    }
    #ondaPreta1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background: rgba(0, 128, 0, 0);
        transform: scaleX(-1);
    }
    #ondaPreta2 {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
        background: rgba(0, 128, 0, 0);
        transform: scaleY(-1);
        width: 20%;
    }
`

const Horario = () => (
    <HorarioWrapper>
        <h1 id="horario">HORARIO</h1>
        <div className="horarioBody">
            <h2>
                Devido à pandemia, estamos apenas com produtos na nossa <a href="#loja">lojinha</a>.
                <br></br>
                Não temos pronta entrega, apenas encomendas.
            </h2>
        </div>
        <img src={ondaPreta} alt="Onda preta 1" id="ondaPreta1" />
        <img src={ondaPreta} alt="Onda preta 2" id="ondaPreta2" />
    </HorarioWrapper>
)

const LojinhaWrapper = styled.div`
    background-color: #d98236;
    color: #fff;
    #loja {
        padding: 50px 0 0 0;
        font-size: 4em;
        text-align: center;
        font-family: African;
        margin: 0;
    }
    #lojaBody {
        background-color: #d98236;
    }
    #lojaRodape {
        background-color: #d98236;
        display: flex;
        flex-direction: row;
        padding: 90px 0 90px 0;
    }
    #lojaRodape img {
        margin: auto;
        border-radius: 50%;
    }
    #lojaContato {
        margin: auto;
        border-style: solid;
        padding: 20px;
        background-color: #d98236;
    }
    #lojaContato h2 {
        margin-left: 20px;
    }
    #entre {
        text-align: center;
        font-size: 3em;
    }
    #lojaFone {
        background-color: #d98236;
        display: flex;
        flex-direction: row;
    }
    #lojaFone img {
        margin: 0;
    }
    #lojaEmail {
        background-color: #d98236;
        display: flex;
        flex-direction: row;
    }
    #lojaBody table {
        width: 75%;
        margin: auto;
        padding: 50px;
        font-size: 1.5em;
    }
    #lojaBody table td {
        padding: 20px 0 0 20px;
        border-bottom: 3px solid;
    }
`

const ListItem = (props) => {
    return(
        <tr>
            <td>{props.value}</td>
            <td>{props.peso}</td>
            <td>R${props.preco}</td>
        </tr>
    )
}


const Lojinha = (props) => 
  {
      const produtos = props.produtos;
      return (
        <LojinhaWrapper>
            <h1 id="loja">LOJINHA</h1>
            <div id="lojaBody">
                <table>
                    {produtos.map((produto) =>
                        <ListItem key={produto.nome.toString()}
                            value={produto.nome} peso={produto.peso} preco={produto.preco}
                            sabores={produto.sabores} />
                    )}
                </table>
                <div id="lojaRodape">
                    <div id="lojaContato">
                        <h2 id="entre">Entre em contato!</h2>
                        <div id="lojaFone">
                            <img src={whatsapp} alt="Whatsapp" width="64px" height="64px"/>
                            <h2>(82)99121-4966</h2>
                        </div>
                        <div id="lojaEmail">
                            <img src={email} alt="E-mail" width="64px" height="64px" />
                            <h2>adm.odararestaurante@gmail.com</h2>
                        </div>
                    </div>
                    <img id="fotoLoja" src={fotoLoja} alt="Produtos" width="35%" />
                </div>
            </div>
        </LojinhaWrapper>
    )
  }

  const QuemSomosWrapper = styled.div`

    * {
        background-color: #c03238;
        color: #fff;
    }
    .quemSomosHeader {
        text-align: center;
        position: relative;
    }
    .quemSomosHeader h1 {
        padding: 50px 0 0 0;
        font-size: 4em;
        font-family: African;
    }
    #quemSomosSubHeader h3 {
        margin: auto;
        font-size: 2em;
        width: 500px;
        padding: 40px;
        border: solid 2px;
        justify-content: center;
    }
    #quemSomosSubHeader{
        display: flex;
        flex-direction: row;
    }
   
    #quemSomosSubHeader img{
       margin: auto;
       z-index: 1;
       border-radius: 50%;
    }
    .quemSomosBody {
        margin: 0;
        display: flex;
        flex-direction: row;
        padding: 80px 80px 80px 100px;
        width: auto;
    }
    #missao  {
        padding-right: 60px;
    }
    #missao h2 {
        text-align: center;
        text-decoration: underline;
    }
    #visao  {
        padding-right: 60px;
    }
    #visao h2 {
        text-align: center;
        text-decoration: underline;
    }
    #valores  {
        padding-right: 60px;
    }
    #valores h2 {
        text-align: center;
        text-decoration: underline;
    }
    #valores ul {
        list-style-type: none;
        font-size: 1.5em;
    }
    #ondaBranca1 {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 0;
        background: rgba(0, 128, 0, 0);
    }
    #ondaBranca2 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        transform: scaleX(-1);
        background: rgba(0, 128, 0, 0);
    }
  `
  
  const QuemSomos = () => (
      <QuemSomosWrapper>
          <div className="quemSomosHeader" id="quemsomos">
            <h1>QUEM SOMOS</h1>
            <div id="quemSomosSubHeader">                <h3>
                    O restaurante Odara traz uma proposta de ancestralidade e valorização da cultura e da gastronomia afro-brasileira.
                </h3>
                <img src={fotoQuemSomos} alt="Pimentas Odara" width="35%"/>
            </div>
            <img src={ondaBranca} alt="Onda branca" id="ondaBranca1" />
            <img src={ondaBranca} alt="Onda branca" id="ondaBranca2" />
          </div>
          <div className="quemSomosBody">
              <div id="missao">
                <h2>MISSÃO</h2>
                <h3>
                    Fornecer aos seus clientes a história e a cultura afro-brasileira através do sabor.
                </h3>
              </div>
            <div id="visao">
                <h2>VISÃO</h2>
                <h3>
                    Expansão da gastronomia afro-brasileira, respeitando a tradição, e a ancestralidade.
                </h3>
            </div>
            <div id="valores">
                <h2>VALORES</h2>
                <ul>
                    <li>Ancestralidade</li>
                    <li>Respeito</li>
                    <li>Diversidade</li>
                </ul>
            </div>
          </div>        
      </QuemSomosWrapper>
  )

  /*
const EventosWrapper = styled.div`
    * {
        background-color: #c03238;
        color: #fff;
    }

    h1 {
        padding: 50px 0 50px 0;
        font-size: 4em;
        font-family: African;
        text-align: center;
        margin: 0;
    }
    .eventosBody {
        display: flex;
        flex-direction: row;
        margin: 0;
    } 
`

const Eventos = () => {
    return (
        <EventosWrapper>
            <h1>EVENTOS</h1>
            <div className="eventosBody">
                <div id="eventosTexto">
                    <h2>Texto</h2>
                </div>
                <div id="eventosForm">
                    <h2>Form</h2>
                </div>
            </div>
        </EventosWrapper>
    )
}
*/


const produtos = [
    {nome: 'COCADA EM CALDA', peso: '350g', preco: '15,00', sabores: ['caju', 'maracujá','siriguela', 'abacaxi ao vinho']},
    {nome: 'DOCE DE ABÓBORA COM COCO', peso: '350g', preco: '18,00'},
    {nome: 'DOCE DE BANANA', peso: '350g', preco: '10,00'},
    {nome: 'DOCE DE LEITE', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE FRUTAS', peso: '350g', preco: '15,00', sabores: ['uva','cajá','umbu','goiaba','acerola','abacaxi','maracujá']},
    {nome: 'TARECO DE RAPADURA', peso: '350g', preco: '15,00'},
    {nome: 'BISCOITINHOS DE BATATA DOCE', peso: '350g', preco: '15,00'},
    {nome: 'AMANTEIGADO ROMEU E JULIETA', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE FRUTAS', peso: '350g', preco: '15,00', sabores: ['uva','cajá','umbu','goiaba','acerola','abacaxi','maracujá']},
    {nome: 'GELEIA DE PIMENTA DE CHEIRO SUAVE', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE PIMENTA DE CHEIRO PICANTE', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE PIMENTA DE CHEIRO SABORIZADA', peso: '350g', preco: '20,00', sabores: ['laranja','abacaxi','maracujá','damasco']},
    {nome: 'COMPOTAS', peso: '350g', saboresCompotas: [
        {nome: 'jaca', preco: '15,00'},
        {nome: 'caju', preco: '15,00'},
        {nome: 'jambo', preco: '15,00'},
        {nome: 'goiaba', preco: '12,00'},
        {nome: 'abacaxi', preco: '12,00'},
        {nome: 'carambola', preco: '15,00'},
    ], obs: 'as compotas estarão disponíveis de acordo com a sazonalidade das frutas. Consultar disponibilidade'}
]

export default () => (
    <Layout>
        <Home />
        <QuemSomos />
        <Lojinha produtos={produtos} />
        <Horario />
    </Layout>
)
