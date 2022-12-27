import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPokedex, ButtonTodosPokemonsDetalhes, ButtonExcluir, ButtonRedesSociais, HeaderStyled } from "./Header.styled"
import { goToHomePage, goToPokedexPage } from "../routes/coordinators"
import imgPokemonHeader from "../imagens/img-pokemon-header.png"
import github2 from "../imagens/github2.png"
import linkedin from "../imagens/linkedin.png"
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

const Header = (props) => {

  const navigate = useNavigate()

  const irParaPokedex = () => {
    goToPokedexPage(navigate)
  }

  const homePage = () => {
    goToHomePage(navigate)
  }
  // console.log(pokedex)

  const { isHomePage, isDetalhes, isPokedex, details } = props
  const context = useContext(GlobalContext)
  const { pokedex, setPokedex, modalCapturarAparecer } = context

  return (
    <HeaderStyled>
      <div className="GridHeader1">
     {isHomePage && <ButtonRedesSociais>
        <a href="https://github.com/Aureana"> <img class="icone-git" src={github2} /></a>
        <a href="https://www.linkedin.com/in/aureana-santos-a7091b21b"> <img class="icone-git" src={linkedin} alt='iconeGit' /></a>
      </ButtonRedesSociais>}    
      <div>{isPokedex && <ButtonTodosPokemonsDetalhes onClick={homePage}>Todos os Pokemons</ButtonTodosPokemonsDetalhes>}</div>
      </div>
      <div className="GridHeader2"> <img className='imgPokemonHeader' src={imgPokemonHeader} alt='iconeGit'/></div>
      <div className="GridHeader3">
        {isHomePage && <ButtonPokedex onClick={irParaPokedex}>Pokedéx</ButtonPokedex>}
        {isDetalhes && <ButtonExcluir onClick={() => {
          const removerDoDetalhes = pokedex.filter((poke) =>
            poke.name !== details.name
          )
          setPokedex(removerDoDetalhes)
          modalCapturarAparecer()
          const pokedexString = JSON.stringify(removerDoDetalhes)
          window.localStorage.setItem("pokeBrowser", pokedexString)
        }}>Excluir da Pokédex</ButtonExcluir>}
      </div>

    </HeaderStyled>
  )
}
export default Header