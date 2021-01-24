import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import "../../static/fonts/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Tabletop from "tabletop"
//import de imagens
import logo from "./logoPrincipal.png"
import email from "./email.png"
import whatsapp from "./whatsapp.png"
import fotoLoja from "./fotoLoja.jpeg"
import perfilNil from "./perfilNil.jpeg"
import perfilMari from "./perfilMari.jpeg"
import perfilAnne from "./perfilAnne.jpeg"
import iconIfood from "../images/ifood.svg"
import iconInstaD from "../images/instadelivery-logo.png"
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
  table,
  th,
  td {
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
    __html:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2634055616845!2d-35.717907685601425!3d-9.658520104700003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014581b681cb19%3A0xec78e60733405054!2sOdara%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1607265407544!5m2!1spt-BR!2sbr" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  }
  return (
    <LocalWrapper>
      <h1>LOCAL</h1>
      <h2>Avenida Brasil, 807 - Poço</h2>
      <div id="mapa" dangerouslySetInnerHTML={iframe} />
    </LocalWrapper>
  )
}

const CardapioWrapper = styled.div`
  height: 1800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  h1 {
    font-size: 4em;
    padding-top: 1em;
    align-self: center;
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
  .cardPedido {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    text-align: center;
    margin: 0.5em 0;
    padding: 2em 0;
    align-items: center;
    background-color: #ffee6e;
    border: solid 8px;
    width: 50%;
  }
  .cardPedido h2 {
    text-align: center;
    padding: 1em 0 0 1em;
  }
  .cardPedido a {
    text-decoration: underline;
    color: #000;
  }
  .cardPedido img {
    align-self: center;
    padding: 1em 0;
    width: 25%;
  }
  #ifood img {
    width: 15%;
  }
  @media only screen and (max-width: 480px) {
    padding: 1em 0;
    #imageSelected {
      align-self: center;
      margin: auto;
      align-self: center;
      width: 90%;
      margin: auto;
    }
    #selector {
      padding: 2em 0;
    }
    .cardPedido {
      width: 90%;
      flex-direction: column;
      padding: 1em 0;
    }
    .cardPedido img {
      width: 90%;
      padding: 0;
    }
    .cardPedido h2 {
      padding: 0;
    }
    #ifood img {
      width: 50%;
    }
  }
`

const Cardapio = () => {
  const [radioValue, setRadioValue] = useState("1")

  const radios = [
    { name: "Almoço", value: "1" },
    { name: "Jantar", value: "2" },
    { name: "Bebidas", value: "3" },
  ]

  let images
  if (radioValue === "1") {
    images = <img src={cardapioAlmoco} alt="cardápio almoço"></img>
  } else if (radioValue === "2") {
    images = <img src={cardapioJantar} alt="cardápio jantar"></img>
  } else {
    images = <img src={cardapioBebidas} alt="cardápio bebida"></img>
  }

  return (
    <CardapioWrapper>
      <h1>CARDAPIO</h1>
      <div id="selectorCardapio">
        <div id="selector">
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={e => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div id="imageSelected">{images}</div>
      </div>
      <div id="instadelivery" className="cardPedido">
        <img src={iconInstaD} alt="insta delivery"></img>
        <a href="https://instadelivery.com.br/odararestaurante">
          <h2>Pedir no InstaDelivery</h2>
        </a>
      </div>
      <div id="ifood" className="cardPedido">
        <img src={iconIfood} alt="ifood"></img>
        <a href="https://www.ifood.com.br/delivery/maceio-al/odara-delivery-poco/e0749a5f-cd49-4178-bdc9-fd58190ea008">
          <h2>Pedir no iFood</h2>
        </a>
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
    border: solid 8px;
    padding: 20px;
    font-size: 2em;
    background-color: #ffee6e;
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
  .fotoPerfil p {
    padding: 1em 2em;
    text-align: justify;
  }

  .fotoPerfil h2 {
    padding-top: 1em;
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
    .fotoPerfil p {
      padding: 1em 0;
    }
  }
  @media only screen and (max-width: 480px) {
    .fotoPerfil {
      padding: 40px 20px;
    }
  }
  @media only screen and (max-width: 320px) {
    #;
  }
`

const QuemSomos = () => (
  <QuemSomosWrapper>
    <div className="quemSomosHeader" id="quemsomos">
      <h1>QUEM SOMOS</h1>
      <div id="quemSomosSubHeader">
        <h4>
          Somos uma empresa liderada por mulheres com o intuito de valorizar a
          gastronomia afro-brasileira e outras vertentes culturais, como
          autores, pintores e músicos, artistas em geral. Nosso restaurante é
          composto por três cozinheiras que se conheceram trabalhando em outros
          locais e resolveram se juntar para compartilhar seus conhecimentos. O
          Odara vai além de um restaurante, é um local para cursos, aulas e
          sobre a história da gastronomia brasileira.
        </h4>
      </div>
    </div>
    <div id="perfis">
      <div class="fotoPerfil">
        <img src={perfilNil} alt="Ivanilda Luz" />
        <h2>Ivanilda Luz</h2>
        <p>
          Nil é uma mistura debochada de paulista com alagoana, sempre dizendo
          que quer muito ir a praia, mas nunca indo, com sua péssima memória
          esquece que aqui é só atravessar a rua para chegar no mar. Teve seu
          primeiro contato com a gastronomia bem pequena por meio de sua mãe;
          através de sua religião de matriz africana entende que comida foi
          feita para compartilhar e que o alimento é algo sagrado, se
          desenvolveu profissionalmente na gastronomia em outros restaurantes,
          sendo cozinheira no Restaurante Sur e comandando a cozinha do Cambito,
          no entanto filha de Iemanjá com Ogum sua cozinha sempre foi de raiz
          ancestral, daí surgiu a ideia do restaurante odara, onde a mesma
          comanda a cozinha.
        </p>
      </div>
      <div class="fotoPerfil">
        <img src={perfilMari} alt="Mariana Nogueira" />
        <h2>Mariana Nogueira</h2>
        <p>
          Mari, nascida em Arapiraca é filha de uma alagoana com um mineiro e
          leva essa mistura para sua cozinha; cresceu no meio da fazenda criando
          animais e plantando pequenas folhas e tubérculos. Desde pequena se
          interessava pela gastronomia e aperreava seus pais e sua avó enquanto
          cozinhavam, o que continua fazendo com suas colegas de trabalho, pois
          fala pelos cotovelos e é ligada no 220v. Fez faculdade na Maurício de
          Nassau e um curso no Laurent Sudeau, trabalhou em alguns restaurantes
          por Maceió, tais como o SuR, Asia Bistrô, Boteco do mar e Fundo de
          quintal, delivery que abriu com seu irmão durante a pandemia,
          atualmente comanda o fogão do Odara com a Nil.
        </p>
      </div>
      <div class="fotoPerfil">
        <img src={perfilAnne} alt="Anne Soares" id="fotoAnne" />
        <h2>Anne Soares</h2>
        <p>
          Anne, como uma boa maceioense é rata de praia, adora comer e é
          eclética desde a música até suas profissões, se formou em gastronomia
          na Maurício de Nassau e agora cursa design na Ufal. Aprendeu a fazer
          doces com sua tia quando se juntavam para fazer reuniões familiares,
          coisa que ela não admite, mas ama. Desde nova começou a comercializar
          por conta própria seus produtos, nos últimos anos trabalhou no
          Restaurante SuR na parte de entradas e sobremesas, aqui no Odara
          conseguiu unir as duas profissões desenvolvendo toda a parte gráfica
          do restaurante e atuando como cozinheira.
        </p>
      </div>
    </div>
  </QuemSomosWrapper>
)

const EventosWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 3em;
    }
  }
`
const Titulo = styled.h1`
  padding: 50px 0 0 0;
  font-size: 4em;
  font-family: African;
  margin: 0;
`
const TabelaStyle = styled.table`
  width: 75%;
  margin: 2em auto;
  padding: 4em 0;
  td {
    margin: 0;
    text-align: left;
    font-size: 1.5em;
  }
  .mesEvento {
    font-size: 1em;
    background-color: #ffee6e;
    color: #000;
    padding: 1em 0 1em 1em;
  }
  .rowEvento td {
    border-bottom: 2px solid #000;
    padding: 0 1em;
  }
  @media only screen and (max-width: 480px) {
    .rowEvento td {
      padding: 0 0.5em;
      font-size: 1.4em;
    }
  }
`
const ListEvents = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    Tabletop.init({
      key: "1VOxmevLEGekXFnwp0JJ8RXFqvQSxB86K5aUxvcbB8cI",
      simpleSheet: true,
    })
      .then(data => setData(data))
      .catch(err => console.warn(err))
  }, [])

  return (
    <TabelaStyle>
        {data.map((item, i) => (
          item.Mes === props.mes &&
            <tr id={i} class='rowEvento'>
              <td>
                <a href={item.Link}>{item.Evento}</a>
              </td>
              <td>{item.Data}</td>
              <td>{item.Hora}</td>
            </tr>
        ))}
    </TabelaStyle>
  )
}

const Tabela = () => {
  return (
    <tbody>
      <tr>
        <td class="mesEvento">JANEIRO</td>
      </tr>
      <ListEvents mes='Janeiro' />
      <tr>
        <td class="mesEvento">FEVEREIRO</td>
      </tr>
      <ListEvents mes='Fevereiro' />
      <tr>
        <td class="mesEvento">MARÇO</td>
      </tr>
      <ListEvents mes='Março' />
    </tbody>
  )
}

const Eventos = () => {
  return (
    <EventosWrapper>
      <Titulo>EVENTOS</Titulo>
      <TabelaStyle>
        <Tabela />
      </TabelaStyle>
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
