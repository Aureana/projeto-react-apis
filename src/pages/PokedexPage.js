import React from "react";
import PokemonCard from "../components/card/PokemonCard";
import Header from "../components/Header";
import styled from 'styled-components';
import Modal from 'react-modal'

import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Button } from "@chakra-ui/react";


const PokedexPageStyled = styled.div`

padding:24px;
background-color:#5D5D5D;
min-height:100vh;
display: flex;
flex-direction:column;

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
.pokedexContainerCard{
     display: flex;
     flex-wrap:wrap;
     gap:20px; 
     justify-content: center;
}
.divTitulopokedex{
  display:flex ;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  height: 120px;
  width:100%;
  color: white;
}
.botaoExcluirTodos{
    color:red;
    margin-bottom: 30px;;
    
}
`
const DivMOdal2 = styled.div`
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

const PokedexPage = () => {

    const context = useContext(GlobalContext)

    const { pokedex, setPokedex, removePokedex, modal, modalCapturarSumir, customStyle } = context

    function excluirTodos(){
        const podekexVazio = []
        setPokedex (podekexVazio)
        const pokedexString = JSON.stringify(podekexVazio) //para zerar o local store
        window.localStorage.setItem("pokeBrowser", pokedexString)
    }

    return (
        <>
            <Header isPokedex={true} />

            <PokedexPageStyled>
                <div className="divTitulopokedex">
                    <h1>Meus Pokemons</h1>
                    <Button className="botaoExcluirTodos" onClick={()=>excluirTodos()}> Excluir Todos</Button>
                </div>
                <div className="pokedexContainerCard">

                    {pokedex.map((pokemon) => {
                        return (
                            <PokemonCard
                                isPokedex={true}
                                key={pokemon.name}
                                pokemon={pokemon}
                                removeFromPokedex={removePokedex}
                            />
                        )
                    })}

                </div>

                <Modal
                    onRequestClose={modalCapturarSumir}
                    style={customStyle}
                    isOpen={modal}>
                    <DivMOdal2>
                        <h1>Oh, no! </h1>
                        <p>O pokemon foi removido da sua pokedex</p>
                    </DivMOdal2>

                </Modal>



            </PokedexPageStyled>

        </>


    )
}
export default PokedexPage