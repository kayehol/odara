import React, {useState} from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import "../../static/fonts/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
//import de imagens
import logo from "./logoPrincipal.png"
import email from "./email.png"
import whatsapp from "./whatsapp.png"
import fotoLoja from "./fotoLoja.jpeg"
import perfilNil from "./perfilNil.jpeg"
import perfilMari from "./perfilMari.jpeg"
import perfilAnne from "./perfilAnne.jpeg"
import ara1 from "./ara1.jpeg"
import ara2 from "./ara2.jpeg"
import ara3 from "./ara3.jpeg"
import ara4 from "./ara4.jpeg"
import pia1 from "./pia1.jpeg"
import pia2 from "./pia2.jpeg"
import pia3 from "./pia3.jpeg"
import pia4 from "./pia4.jpeg"
import pia5 from "./pia5.jpeg"
import outros1 from "./outros1.jpeg"
import outros2 from "./outros2.jpeg"
import outros3 from "./outros3.jpeg"
import cardapioAlmoco from "../images/cardapio-almoco.png"
import cardapioJantar from "../images/cardapio-jantar.png"
import cardapioBebidas from "../images/cardapio-bebidas.png"
import ReactGA from "react-ga"
import { ToggleButton } from "react-bootstrap"

ReactGA.initialize("UA-165900894-1")
ReactGA.pageview("/homepage")

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: #fff;
  #logo {
    margin: 25px 0 25px 0;
    width: 50%;
  }
  @media only screen and (max-width: 720px) {
    #logo {
      width: 100%;
      padding: 8em 0;
    }
  }
`

const Home = () => (
  <HomeWrapper>
    <img src={logo} alt="Logo Odara" id="logo" />
  </HomeWrapper>
)

const HorarioWrapper = styled.div`
  font-family: Futura;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  #horario {
    justify-content: center;
    font-size: 4em;
    font-family: African;
    padding-top: 40px;
  }
  .horarioBody {
    width: 100%;
    margin: auto;
    padding: 4em 0;
    font-size: 2em;
    display: flex;
    justify-content: center;
  }
  table, th, td {
    border-bottom: 4px solid black;
    margin: 0;
    padding: 1em 2em 0 0;
    border-spacing: 1em;
    background-color: #ffee6e;
  }
  @media only screen and (max-width: 720px) {
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
  }
  @media only screen and (max-width: 480px) {
    #horario {
      font-size: 3em;
    }
    .horarioBody {
      padding: 2em 1em 6em 1em;
    }
    table {
      width: 100%;
    }
  }
`

const Horario = () => (
  <HorarioWrapper>
    <h1 id="horario">HORARIO</h1>
    <div className="horarioBody">
      <table>
        <tr>
          <td>Quarta à domingo</td>
          <td>12-16h</td>
        </tr>
        <tr>
          <td>Sexta e sábado</td>
          <td>12-16h & 19-23h</td>
        </tr>
      </table>
    </div>
  </HorarioWrapper>
)

const LocalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 4em;
  }
  h2 {
    text-align: center;
    padding: 2em 0;
  }
  #mapa {
    align-self: center;
    padding-bottom: 2em;
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    #mapa {
      height: 100%;
      margin: 0;
      padding-bottom: 0;
    }
  }
`

const Local = () => {
  const iframe = {
    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2634055616845!2d-35.717907685601425!3d-9.658520104700003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014581b681cb19%3A0xec78e60733405054!2sOdara%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1607265407544!5m2!1spt-BR!2sbr" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  }
  return (
    <LocalWrapper>
      <h1>LOCAL</h1>
      <h2>Avenida Brasil, 807 - Poço</h2>
      <div id='mapa' dangerouslySetInnerHTML={iframe} />
    </LocalWrapper>
  )
}

const CardapioWrapper = styled.div`
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 4em;
    padding-top: 1em;
  }
  #selectorCardapio {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #selector {
    display: flex;
    flex-direction: row;
    padding: 2em 0 0 2em;
    font-size: 2em;
    justify-content: center;
    align-self: center;
    text-align: center;
  }
  #imageSelected {
    align-self: center;
    padding: 2em 0;
  }
  @media only screen and (max-width: 480px) {
    #imageSelected {
      align-self: center;
      margin: auto;
    }
    img {
      align-self: center;
      width: 95%;
      margin: auto;
    }
    #selector {
      padding: 2em 0;
    }
  }
`

const Cardapio = () => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    {name: 'Almoço', value: '1'},
    {name: 'Jantar', value: '2'},
    {name: 'Bebidas', value: '3'},
  ];

  let images;
  if (radioValue === '1') {
    images = <img src={cardapioAlmoco} alt='cardápio almoço'></img>
  } else if (radioValue === '2') {
    images = <img src={cardapioJantar} alt='cardápio jantar'></img>
  } else {
    images = <img src={cardapioBebidas} alt='cardápio bebida'></img>
  }
  
  return (
    <CardapioWrapper>
      <h1>CARDAPIO</h1>
      <div id='selectorCardapio'>
        <div id='selector'>
         <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type='radio'
              variant='secondary'
              name='radio'
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
         </ButtonGroup>
        </div>
        <div id='imageSelected'>
            {images}
        </div>
      </div>
    </CardapioWrapper>
  )
}

const LojinhaWrapper = styled.div`
  background-color: #fff;
  font-family: Futura;
  color: #000;
  #loja {
    padding: 50px 0 0 0;
    font-size: 4em;
    text-align: center;
    font-family: African;
    margin: 0;
  }
  #lojaBody {
    background-color: #fff;
  }
  #lojaRodape {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 90px 0 90px 0;
  }
  #fotoLoja {
    margin: auto;
    border-radius: 50%;
  }
  #lojaContato {
    margin: 60px;
    border-style: solid;
    padding: 20px;
    background-color: #fff;
    font-size: 2em;
  }
  #lojaContato h2 {
    margin-left: 20px;
  }
  #entre {
    text-align: center;
    padding: 20px 0;
  }
  #lojaFone {
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
  }
  #lojaFone img {
    margin: 0;
  }
  #lojaFone h2 a:link {
    text-decoration: underline;
    color: #000;
  }
  #lojaFone h2 a:visited {
    text-decoration: underline;
    color: #000;
  }
  #lojaEmail h2 a:link {
    text-decoration: underline;
    color: #000;
  }
  #lojaEmail {
    display: flex;
    flex-direction: row;
    align-items: center;
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
  @media only screen and (max-width: 720px) {
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
    #lojaBody table {
      width: 85%;
      margin: auto;
      padding: 2em 0;
      font-size: 1.5em;
    }
    #lojaContato img {
      width: 32px;
      height: 32px;
    }
    #lojaContato {
      margin: 30px;
    }
    #lojaEmail h2 {
      font-size: 0.9em;
    }
    #lojaEmail {
      flex-direction: column;
    }
    #lojaFone {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 480px) {
    #lojaBody table {
      font-size: 1.4em;
      padding: 25px 15px;
    }
    #lojaEmail h2 {
      font-size: 0.7em;
    }
    #ondaBranca1 {
      width: 65%;
    }
    #lojaContato {
        margin: 20px;
    }
  }
  @media only screen and (max-width: 420px) {
    #lojaFone h2 {
      font-size: 1em;
    }
    #lojaEmail h2 {
      font-size: 0.5em;
    }
    #lojaContato {
      margin: 10px;
    }
  }
  @media only screen and (max-width: 320px) {
    #lojaBody table {
      font-size: 1em;
      padding: 25px 15px;
    }
    #lojaEmail h2 {
      font-size: 0.4em;
    }
    #lojaFone h2 {
      font-size: 0.8em;
    }
  }
`

const ListItem = props => (
  <tbody>
    <tr>
      <td>{props.value}</td>
      <td>{props.peso}</td>
      <td>R${props.preco}</td>
    </tr>
    {props.sabores && (
      <tr>
        <td style={{ border: "none", width: "100%" }} colSpan="3">
          {props.sabores.join(" · ")}
        </td>
      </tr>
    )}
    {props.saboresCompotas &&
      props.saboresCompotas.map(sabor => (
        <tr>
          <td>{sabor.nome}</td>
          <td></td>
          <td>{sabor.preco}</td>
        </tr>
      ))}
  </tbody>
)

const Lojinha = props => {
  const produtos = props.produtos
  return (
    <LojinhaWrapper>
      <h1 id="loja">LOJINHA</h1>
      <div id="lojaBody">
        <table>
          {produtos.map(produto => (
            <ListItem
              key={produto.nome.toString()}
              value={produto.nome}
              peso={produto.peso}
              preco={produto.preco}
              sabores={produto.sabores}
              saboresCompotas={produto.saboresCompotas}
            />
          ))}
        </table>
        <div id="lojaRodape">
          <div id="lojaContato">
            <h2 id="entre">Entre em contato!</h2>
            <div id="lojaFone">
              <img src={whatsapp} alt="Whatsapp" width="64px" height="64px" />
              <h2>
                <a
                  href="https://wa.me/5582991214966"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (82)99121-4966
                </a>
              </h2>
            </div>
            <div id="lojaEmail">
              <img src={email} alt="E-mail" width="64px" height="64px" />
              <h2>
                <a href="mailto:adm.odararestaurante@gmail.com">
                  adm.odararestaurante@gmail.com
                </a>
              </h2>
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
    background-color: #fff;
    color: #000;
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

  #quemSomosSubHeader {
    width: 40%;
    margin: auto;
    padding-top: 1.5em;
    text-align: justify;
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
  margin: 0;
  .fotoPerfil img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 256px;
  }

  .fotoPerfil {
    text-align: center;
    padding: 80px 0;
  }

  #perfis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  @media only screen and (max-width: 720px) {
    .quemSomosHeader {
      width: 100%;
    }
    .quemSomosHeader h1 {
      padding: 0;
      font-size: 2.6em;
    }
    #quemSomosSubHeader {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
    .quemSomosBody {
      display: flex;
      flex-direction: column;
      font-size: 1.3em;
      text-align: center;
      margin: 0;
      padding-top: 0;
    }
    #perfis {
      flex-direction: column;
    }
    .fotoPerfil {
      padding: 40px 0;
    }
  }
  @media only screen and (max-width: 480px) {
  
    .fotoPerfil {
      padding: 40px 20px;
    }
  }
  @media only screen and (max-width: 320px) {
    #
  }
`

const QuemSomos = () => (
  <QuemSomosWrapper>
    <div className="quemSomosHeader" id="quemsomos">
      <h1>QUEM SOMOS</h1>
      <div id="quemSomosSubHeader">
        <h4>
          Somos uma empresa liderada por mulheres com o intuito de valorizar a gastronomia afro-brasileira e outras vertentes culturais, como autores, pintores e músicos, artistas em geral.
          Nosso restaurante é composto por três cozinheiras que se conheceram trabalhando em outros locais e resolveram se juntar para compartilhar seus conhecimentos. O Odara vai além de um restaurante, é um local para cursos, aulas e sobre a história da gastronomia brasileira.
        </h4>
      </div>
    </div>
    <div id="perfis">
      <div class="fotoPerfil">
        <img src={perfilNil} alt="Ivanilda Luz" />
        <h2>Ivanilda Luz</h2>
      </div>
      <div class="fotoPerfil">
        <img src={perfilMari} alt="Mariana Nogueira" />
        <h2>Mariana Nogueira</h2>
      </div>
      <div class="fotoPerfil">
        <img src={perfilAnne} alt="Anne Soares" id="fotoAnne" />
        <h2>Anne Soares</h2>
      </div>
    </div>
  </QuemSomosWrapper>
)

const EventosWrapper = styled.div`
  * {
    background-color: #fff;
    color: #000;
  }

  h1 {
    padding: 50px 0 50px 0;
    font-size: 4em;
    font-family: African;
    text-align: center;
    margin: 0;
  }
  .evento {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .carousel {
      padding: 30px 80px;
  }
.slideGrande {
      max-width: 40%;
      margin: auto;
      height: auto;
}
.slideGrande2 {
    max-width: 50%;
    margin: auto;
}
.slideGrande3 {
    max-width: 85%;
    margin: auto;
}
@media only screen and (max-width: 720px) {
    .carousel {
        padding: 30px 20px;
    }
}
@media only screen and (max-width: 480px) {
  .carousel {
      padding: 20px 10px;
  }
  .evento h2 {
    font-size: 1em;
  }
  h1 {
    font-size: 3em;
  }
}
`

const Eventos = () => {
  return (
    <EventosWrapper>
      <h1>EVENTOS</h1>
      <div class="evento">
        <h2>Palestra Sabores e Saberes - Arapiraca</h2>
        <div class="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={ara3} alt="Primeiro slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ara4} alt="Segundo slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ara2} alt="Terceiro slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 slideGrande" src={ara1} alt="Quarto slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div class="evento">
        <h2>Palestra Sabores e Saberes - Piaçabuçu</h2>
        <div class="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={pia1} alt="Primeiro slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pia2} alt="Segundo slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 slideGrande" src={pia3} alt="Terceiro slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pia4} alt="Quarto slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pia5} alt="Quarto slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div class="evento">
        <h2>Outros eventos</h2>
        <div class="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 slideGrande3" src={outros1} alt="Primeiro slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 slideGrande3" src={outros2} alt="Segundo slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 slideGrande2" src={outros3} alt="Terceiro slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </EventosWrapper>
  )
}

const produtos = [
  {
    nome: "COCADA EM CALDA",
    peso: "350g",
    preco: "20,00",
    sabores: ["caju", "maracujá", "siriguela", "abacaxi ao vinho"],
  },
  { nome: "DOCE DE ABÓBORA COM COCO", peso: "350g", preco: "23,00" },
  { nome: "DOCE DE BANANA", peso: "350g", preco: "15,00" },
  { nome: "DOCE DE LEITE", peso: "350g", preco: "20,00" },
  { nome: "TARECO DE RAPADURA", peso: "350g", preco: "20,00" },
]

export default () => (
  <Layout>
    <Home />
    <QuemSomos />
    <Horario />
    <Local />
    <Cardapio />
    <Lojinha produtos={produtos} />
    <Eventos />
  </Layout>
)
