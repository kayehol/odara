import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import "../../static/fonts/fonts.css"

import logo from "./logoPrincipal.png"
import padrao from "./padrao1.png"
import email from "./email.png"
import whatsapp from "./whatsapp.png"
import fotoLoja from "./fotoLoja.jpeg"
import fotoQuemSomos from "./fotoQuemSomos.jpeg"
import ondaBranca from "./ondaBranca.png"
import ReactGA from "react-ga"


ReactGA.initialize('UA-165900894-1');
ReactGA.pageview('/homepage');


const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin: 0;
    background-color: #f4c533;
    #logo {
        margin: 25px 0 25px 0;
        width: 50%;
    }
    #padrao-baixo{
        width: 100%;
        margin-top: 20px;
    }
    #padrao-topo{
        width: 100%;
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 720px){
        #logo {
            width: 100%;
            padding: 80px 0;
        }
        #padrao-baixo {
            margin-top: 5px;
        }
        #padrao-topo {
            margin-bottom: 5px;
        }
    }
`

const Home = () => (
    <HomeWrapper>
        <img src={padrao} alt="Odara" id="padrao-topo"/>
        <img src={logo} alt="Logo Odara" id="logo" />
        <img src={padrao} alt="Odara" id="padrao-baixo"/>
    </HomeWrapper>
)

const HorarioWrapper = styled.div`
    background-color: #f4c533;
    font-family: Futura;
    color: #000;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    #horario {
        justify-content: center;
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
    #ondaBranca1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background: rgba(0, 128, 0, 0);
        transform: scaleX(-1);
    }
    #ondaBranca2 {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
        background: rgba(0, 128, 0, 0);
        transform: scaleY(-1);
        width: 20%;
    }
    @media only screen and (max-width: 720px){
        #horario {
            width: 100%;
            justify-content: center;
            text-align: center;
            z-index: 1;
        }
        .horarioBody {
            width: 100%;
            font-size: 1em;
            justify-content: center;
            z-index: 1;
        }
        #ondaBranca2 {
            display: none;
        }
    }
    @media only screen and (max-width: 480px){
        #horario {
            font-size: 3em;
        }
        #ondaBranca1 {
            width: 75%;
        }
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
        <img src={ondaBranca} alt="Onda preta 1" id="ondaBranca1" />
        <img src={ondaBranca} alt="Onda preta 2" id="ondaBranca2" />
    </HorarioWrapper>
)

const LojinhaWrapper = styled.div`
    background-color: #d98236;
    font-family: Futura;
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
    #fotoLoja {
        margin: auto;
        border-radius: 50%;
    }
    #lojaContato {
        margin: 0;
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
    #lojaFone h2 a:link {
        text-decoration: underline;
        color: #fff;
    }
    #lojaFone h2 a:visited {
        text-decoration: underline;
        color: #fff;
    }
    #lojaEmail h2 a:link {
        text-decoration: underline;
        color: #fff;
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
        padding: 20px 0 10px 20px;
        border-bottom: 3px solid;
        margin: 0;
    }
    @media only screen and (max-width: 720px){
        font-size: 0.8em;
        #lojaRodape {
            display: flex;
            flex-direction: column;
            margin: 0px;
            padding: 20px;
        }
        #fotoLoja {
            margin-top: 40px;
            width: 75%;
        }
        #lojaBody table{
            width: 75%;
            margin: auto;
            padding: 35px;
            font-size: 1.5em;
        }
        #lojaContato img {
            width: 32px;
            height: 32px;
        }
        #lojaContato {
            margin: 0;
            
        }
        #lojaFone {
            align-items: center;
        }
        #lojaEmail {
            align-items: center;
        }
        #lojaEmail h2 {
            font-size: 1.3em;
        }
    }
    @media only screen and (max-width: 320px) {
        #lojaBody table {
            font-size: 1em;
            padding: 25px 15px;
        }
        #lojaFone {
            flex-direction: column;
        }
        #lojaEmail {
            flex-direction: column;
        }
        #lojaEmail h2 {
            font-size: 0.9em;
            text-align: center;
        }
        #ondaBranca1 {
            width: 65%;
        }
    }
`

const ListItem = (props) => (
    <tbody>
        <tr>
            <td>{props.value}</td>
            <td>{props.peso}</td>
            <td>R${props.preco}</td>
        </tr>
        {props.sabores &&
            <tr>
                <td style={{border: 'none', width: "100%"}} colSpan="3">
                    {props.sabores.join(' · ')}
                </td>
            </tr>
        }
        {props.saboresCompotas &&
            props.saboresCompotas.map((sabor)=>
                <tr>
                    <td>{sabor.nome}</td>
                    <td></td>
                    <td>{sabor.preco}</td>
                </tr>
            )
        }
    </tbody>
)

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
                                value={produto.nome} peso={produto.peso} preco={produto.preco} sabores={produto.sabores}
                                saboresCompotas={produto.saboresCompotas}
                                />
                        )}
                </table>
                <div id="lojaRodape">
                    <div id="lojaContato">
                        <h2 id="entre">Entre em contato!</h2>
                        <div id="lojaFone">
                            <img src={whatsapp} alt="Whatsapp" width="64px" height="64px"/>
                            <h2><a href="https://wa.me/5582991214966" target="_blank" rel="noopener noreferrer">(82)99121-4966</a></h2>
                        </div>
                        <div id="lojaEmail">
                            <img src={email} alt="E-mail" width="64px" height="64px" />
                            <h2><a href="mailto:adm.odararestaurante@gmail.com">adm.odararestaurante@gmail.com</a></h2>
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
        font-family: Futura;
    }
    .quemSomosHeader {
        text-align: center;
        position: relative;
        margin: 0;
    }
    .quemSomosHeader h1 {
        padding: 50px 0 0 0;
        font-size: 4em;
        font-family: African;
        margin: 0;
    }
    
    #quemSomosSubHeader{
        display: flex;
        flex-direction: row;
    }
    #quemSomosSubHeader h3 {
        font-size: 2em;
        padding: 20px;
        margin: 80px 100px;
        vertical-align: middle;
        border: solid 2px;
        text-align: center;
        display: flex;
        align-items: center;
        z-index: 1;
    }
    #quemSomosSubHeader img{
       z-index: 0;
       border-radius: 50%;
       width: 100%;
       align-items: center;
       margin: auto;
       padding: 20px 80px;
    }
    .quemSomosBody {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .quemSomosBody h2 {
        text-align: center;
        text-decoration: underline;
    }
    #missao {
        text-align: center;
        padding: 40px;
    }
    #visao {
        text-align: center;
        padding: 40px;
    }
    #valores {
        text-align: center;
        padding: 40px 120px;
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
    margin: 0;
    @media only screen and (max-width: 720px){
        .quemSomosHeader {
            width: 100%;
        }
        
        #quemSomosSubHeader {
            display: flex;
            flex-direction: column
        }
        #quemSomosSubHeader h3 {
            z-index: 1;
        }
        #quemSomosSubHeader img {
            width: 85%;
            padding: 20px;
        }
        .quemSomosBody {
            display: flex;
            flex-direction: column;
            font-size: 1.3em;
            text-align: center;
            margin: 0;
            padding-top: 0;
        }
        #ondaBranca2 {
            display: none;
        }
    }
    @media only screen and (max-width: 480px){
        #quemSomosSubHeader h3 {
            font-size: 1.5em;
            margin: 0;
            width: 90%;
        }
    }
    @media only screen and (max-width: 320px){
        #quemSomosSubHeader h3 {
            font-size: 1.2em;
            margin: 40px auto;
            width: 75%;
        }
        #ondaBranca1 {
            width: 75%;
        }
        #valores {
            margin: 0;
            padding: 20px 40px;
        }
        #missao {
            padding: 20px 40px;
        }
        #visao {
            padding: 20px 40px;
        }
    }
`
  
  const QuemSomos = () => (
      <QuemSomosWrapper>
          <div className="quemSomosHeader" id="quemsomos">
            <h1>QUEM SOMOS</h1>
            <div id="quemSomosSubHeader">
                <h3>
                    O restaurante Odara traz uma proposta de ancestralidade e valorização da cultura e da gastronomia afro-brasileira.
                </h3>
                <img src={fotoQuemSomos} alt="Pimentas Odara"/>
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
                <h3>Ancestralidade</h3>
                <h3>Respeito</h3>
                <h3>Diversidade</h3>
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
    {nome: 'COCADA EM CALDA', peso: '350g', preco: '15,00', 
        sabores: ['caju', 'maracujá','siriguela', 'abacaxi ao vinho']
    },
    {nome: 'DOCE DE ABÓBORA COM COCO', peso: '350g', preco: '18,00'},
    {nome: 'DOCE DE BANANA', peso: '350g', preco: '10,00'},
    {nome: 'DOCE DE LEITE', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE FRUTAS', peso: '350g', preco: '15,00', 
        sabores: ['uva','cajá','umbu','goiaba','acerola','abacaxi','maracujá']
    },
    {nome: 'TARECO DE RAPADURA', peso: '350g', preco: '15,00'},
    {nome: 'BISCOITINHOS DE BATATA DOCE', peso: '350g', preco: '15,00'},
    {nome: 'AMANTEIGADO ROMEU E JULIETA', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE PIMENTA DE CHEIRO SUAVE', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE PIMENTA DE CHEIRO PICANTE', peso: '350g', preco: '15,00'},
    {nome: 'GELEIA DE PIMENTA DE CHEIRO SABORIZADA', peso: '350g', preco: '20,00', 
        sabores: ['laranja','abacaxi','maracujá','damasco']
    },
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
