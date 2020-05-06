import React from "react"
import "./layout.css"
import ScrollTop from "@nzambello/react-scrolltop"
import styled from "styled-components"
import { bubble as Menu } from "react-burger-menu"

const HeaderWrapper = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-size: 0.9em;

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #000;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;

  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    overflow-y: hidden !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.7em;
    width: 100%;
  }

  .bm-item-list a {
    text-decoration: none;
    color: #fff;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    padding: 0.5em;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  @media only screen and (min-width: 720px) {
      .bm-burger-button {
          display: none;
      }
      

  }
  
`

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
        this.handleStateChange = this.handleStateChange.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <HeaderWrapper>
                <Menu isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                    <a href="#quemsomos" onClick={() => this.closeMenu()}>
                        QUEM SOMOS
                    </a>
                    <a href="#loja" onClick={() => this.closeMenu()}>
                        LOJINHA
                    </a>
                    <a href="#lojaRodape" onClick={() => this.closeMenu()}>
                        CONTATO
                    </a>
                    <a href="#horario" onClick={() => this.closeMenu()}>
                        HORÁRIO
                    </a>
                    <a href="#cardapio" onClick={() => this.closeMenu()}>
                        CARDÁPIO
                    </a>
                    <a href="#eventos" onClick={() => this.closeMenu()}>
                        EVENTOS
                    </a>
                </Menu>
                <MenuGrande />
            </HeaderWrapper>
        )
    }
}
  
const MenuGrandeWrapper = styled.div`
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
  @media only screen and  (max-width: 720px){
    ul li {
        display: none;
    }
`

const MenuGrande = () => (
  <MenuGrandeWrapper>
    <ul>
      <li>
        <a href="#quemsomos">
          QUEM SOMOS
        </a>
      </li>
      <li>
        <a href="#loja">
          LOJINHA
        </a>
      </li>
      <li>
        <a href="#lojaRodape">
          CONTATO
        </a>
      </li>
      <li>
        <a href="#horario">
          HORÁRIO
        </a>
      </li>
      <li>
        <a href="#cardapio">
          CARDÁPIO
        </a>
      </li>
      <li>
        <a href="#eventos">
          EVENTOS
        </a>
      </li>
    </ul>
  </MenuGrandeWrapper>
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
    <ScrollTop />
  </div>
)
