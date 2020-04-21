import React from "react"
import "./layout.css"
import styled from "styled-components"

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
            <li><a href="#loja">LOJINHA</a></li>
            <li><a href="#horario">HORÁRIO</a></li>
            <li><a href="#cardapio">CARDÁPIO</a></li>
            <li><a href="#eventos">EVENTOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
        </ul>
    </HeaderWrapper>
)

const FooterWrapper = styled.div`
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding: 30px;
    margin: 0;
    font-size: 0.8em;
`

const Footer = () => (
    <FooterWrapper>
        <p>© 2020 - Kayê Holanda</p>
    </FooterWrapper>
)

export default ({ children }) => (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
) 