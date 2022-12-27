import React from "react"
import PokemonCard from "../components/card/PokemonCard"
import Header from "../components/Header"
import styled from 'styled-components'
import Modal from 'react-modal'

import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const HomePageStyled = styled.div`

padding:24px;
background-color:#5D5D5D;
min-height:100vh;
width: 100%;

h1{
    color: white;
    font-weight:700;
    font-size: 48px;
    margin-bottom:56px;     
   
}
.divCard{
    display: flex;
    flex-wrap:wrap;
    gap:20px;  
    
}
.containerCard{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.divTitulo{
  width:100%;
  height: 90px;
  margin-bottom:25px;
}
`
const DivMOdal = styled.div`
width: 451px;
height: 222px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
}
p{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
`


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
        isOpen={modal}>
        <DivMOdal>
          <h1>Gotcha!</h1>
          <p>O pokemon foi adicionado a sua pokedex</p>
        </DivMOdal>

      </Modal>
    </>

  )
}
export default HomePage