import React from "react"
import PokemonCard from "../components/card/PokemonCard"
import Header from "../components/Header"
import {HomePageStyled, DivMOdal} from "../components/estilosPage/StyledHome"
import Modal from 'react-modal'

import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


const HomePage = () => {

  const context = useContext(GlobalContext)

  const { pokelist, modal, modalCapturarSumir, customStyle } = context

  return (
    <>
      <Header isHomePage={true} />

      <HomePageStyled>
        <div className="divTitulo"><h1>Todos os Pokemons</h1></div>
        <div className="containerCard">
          {pokelist && pokelist.map((item) => {
            return (<div key={item.name}>
              <PokemonCard pokemon={item} pokemonUrlCada={item.url} isHomePage={true} />

            </div>)
          })
          }
        </div>
      </HomePageStyled>
      <Modal
        onRequestClose={modalCapturarSumir}
        style={customStyle}
        isOpen={modal}
        ariaHideApp={false}>
        <DivMOdal>
          <h1>Gotcha!</h1>
          <p>O pokemon foi adicionado a sua pokedex</p>
        </DivMOdal>

      </Modal>
    </>

  )
}
export default HomePage