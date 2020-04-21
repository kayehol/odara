import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import logo from "./logoPrincipal.png";
import padrao from "./padrao1.png"
import email from "./email.png"
import whatsapp from "./whatsapp.png"
import fotoLoja from "./fotoLoja.jpeg"

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
    #horario {
        margin: 50px 0 50px 0;
        font-size: 4em;
        letter-spacing: 10px;
    }
    #horarioBody {
        width: 90%;
        text-align: center;
        margin: 100px 0 250px 0;
        border-style: solid;
    }

    a:link {
        text-decoration: underline;
        color: #fff;
    }
`

const Horario = () => (
    <HorarioWrapper>
        <h1 id="horario">HORÁRIO</h1>
        <div id="horarioBody">
            <h2>
                Devido à pandemia, estamos apenas com produtos na nossa <a href="#loja">lojinha</a>.
                <br></br>
                Não temos pronta entrega, apenas encomendas.
            </h2>
        </div>
    </HorarioWrapper>
)

const LojinhaWrapper = styled.div`
    background-color: #d98236;
    color: #fff;
    #loja {
        padding: 50px 0 0 0;
        font-size: 4em;
        letter-spacing: 10px;
        text-align: center;
    }
    #lojaBody {
        background-color: #d98236;
    }
    #lojaCabecalho {
        background-color: #d98236;
        display: flex;
        flex-direction: row;
        padding: 30px 0 50px 0;
    }
    #lojaCabecalho img {
        margin: auto;
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
`

const ListItem = (props) => (
    <li>{props.value}</li>
)

const Lojinha = (props) => 
  {
      const produtos = props.produtos;
      return (
        <LojinhaWrapper>
            <h1 id="loja">LOJINHA</h1>
            <div id="lojaBody">
                <div id="lojaCabecalho">
                    <div id="lojaContato">
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
                <ul>
                    {produtos.map((produto) =>
                        <ListItem key={produto.nome.toString()}
                            value={produto.nome} />
                    )}
                </ul>
            </div>
        </LojinhaWrapper>
    )
  }  


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
    {nome: 'COMPOTAS', peso: '350g', sabores: [
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
        <Lojinha produtos={produtos} />
        <Horario />
    </Layout>
)
