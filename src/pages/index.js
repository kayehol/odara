import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import logo from "./logoPrincipal.png";
import padrao from "./padrao1.png"

const HeaderWrapper = styled.div`
    background-color: #000000;
    color: #ffffff;
    font-size: 0.9em;
    padding: 0;
    margin: 0;
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 0;
    }
    ul li {
        margin-right: 50px;
        height: 55px;
        display: flex;
        align-items: center;
        padding: 10px;
    }
    ul a:link {
        text-decoration: none;
        color: #fff;
    }
    ul a:visited {
        text-decoration: none;
    }
    ul li:hover {
        background-color: #c03238;
    }
`

const Header = () => (
    <HeaderWrapper>
        <ul>
            <li><a href="#quemsomos">QUEM SOMOS</a></li>
            <li><a href="#horarios">HORÁRIOS</a></li>
            <li><a href="#local">LOCAL</a></li>
            <li><a href="#cardapio">CARDÁPIO</a></li>
            <li><a href="#eventos">EVENTOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
        </ul>
    </HeaderWrapper>
)

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

export default () => (
    <Layout>
        <Header />
        <Home />
    </Layout>
)
