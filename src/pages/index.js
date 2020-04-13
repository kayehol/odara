import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const HeaderWrapper = styled.div`
    background-color: #000000;
    color: #ffffff;
    font-size: 0.9em;
    padding: 10px;
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 0;
    }

    ul li {
        margin-right: 50px;
    }
    
    ul a:link {
        text-decoration: none;
        color: #fff;
      }
      
    ul a:visited {
        text-decoration: none;
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

export default () => (
    <Layout>
        <Header />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Layout>
)
