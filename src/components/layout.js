import React from "react"
import "./layout.css"
import ScrollTop from '@nzambello/react-scrolltop'
import styled from "styled-components"
import menu from "../pages/menu.png"

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
        color: #fff;
    }
    ul li:hover {
        background-color: #c03238;
    }
    button {
        background-color: #000;
        border: none;
        padding: 10px;
        display: none;
    }
    button img {
        width: 56px;
        height: 56px;
    }
    @media only screen and (max-width: 720px) {
        width: 100%;
        margin: auto;
        ul {
            display: none;
        }
        button {
            display: flex;
            width: 100%;
        }
    }
`
/*
const MenuVertical = styled.div`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0;
    li {
        margin-right: 50px;
        height: 55px;
        display: flex;
        align-items: center;
        padding: 10px;
    }
`
*/

const Menu = () => (
    <ul>
        <li><a href="#quemsomos">QUEM SOMOS</a></li>
        <li><a href="#loja">LOJINHA</a></li>
        <li><a href="#lojaRodape">CONTATO</a></li>
        <li><a href="#horario">HORÁRIO</a></li>
        <li><a href="#cardapio">CARDÁPIO</a></li>
        <li><a href="#eventos">EVENTOS</a></li>
    </ul>
)

const MenuVertical = () => (
    <ul style={{display: 'flex', flexDirection: 'column'}}>
        <li><a href="#quemsomos">QUEM SOMOS</a></li>
        <li><a href="#loja">LOJINHA</a></li>
        <li><a href="#lojaRodape">CONTATO</a></li>
        <li><a href="#horario">HORÁRIO</a></li>
        <li><a href="#cardapio">CARDÁPIO</a></li>
        <li><a href="#eventos">EVENTOS</a></li>
    </ul>
)

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggleMenu: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            toggleMenu: !state.toggleMenu
        }));
    }

    render() {
        return (
            <HeaderWrapper>
                <button onClick={this.handleClick}>
                    <img src={menu} alt="menu" />
                </button>
                {this.state.toggleMenu &&
                    <MenuVertical />
                }
                <Menu />
            </HeaderWrapper>
        )
    } 
}

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
        <ScrollTop />
    </div>
) 