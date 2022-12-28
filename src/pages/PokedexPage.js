import React from "react";
import PokemonCard from "../components/card/PokemonCard";
import Header from "../components/Header";
import { PokedexPageStyled, DivMOdal2 } from "../components/estilosPage/StyledPokedex"
import Modal from 'react-modal'

import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Button } from "@chakra-ui/react";


const PokedexPage = () => {

    const context = useContext(GlobalContext)

    const { pokedex, setPokedex, removePokedex, modal, modalCapturarSumir, customStyle } = context

    function excluirTodos() {
        const podekexVazio = []
        setPokedex(podekexVazio)
        const pokedexString = JSON.stringify(podekexVazio) //para zerar o local store
        window.localStorage.setItem("pokeBrowser", pokedexString)
    }

    return (
        <>
            <Header isPokedex={true} />

            <PokedexPageStyled>
                <div className="divTitulopokedex">
                    <h1>Meus Pokemons</h1>
                    <Button className="botaoExcluirTodos" onClick={() => excluirTodos()}> Excluir Todos</Button>
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
                    isOpen={modal}
                    ariaHideApp={false}>
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