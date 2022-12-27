import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import { MainStyled, DivMOdal3 } from "../components/card/StyledDetlhesPage"
import { DetalhesCard } from '../components/card/DetalhesCard'
import Modal from 'react-modal'

import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


const DetalhesPage = () => {
  const urlCadaPoke = `https://pokeapi.co/api/v2/pokemon/`
  const { id } = useParams()
  const [details, setDetails] = useState(null)
  const [poder, setPoder] = useState([])
  const [poder2, setPoder2] = useState([])
  const [base, setBase] = useState([])

  const fetchDetalhes = async (url) => {
    const APIResponse = await fetch(url)
    const data = await APIResponse.json()
    setDetails(data)
    setPoder2(data['types']['0']['type']['name'])
    setPoder(data['types']['1']['type']['name'])
  }
  const BaseState = async () => {
    setBase(details['stats'])
  }
  useEffect(() => {
    BaseState()
  }, [fetchDetalhes])

  useEffect(() => {
    const pokemonUrl = `${urlCadaPoke}${id}`
    fetchDetalhes(pokemonUrl)
  }, [])
  console.log(details)

  const context = useContext(GlobalContext)
  const { pokedex, removePokedex, modal, modalCapturarSumir, customStyle } = context

  return (
    <>
      <Header isDetalhes={true} isPokedex={true} details={details} />

      <MainStyled>
        <div className='tituloDetalhe'>
          <h1>Detalhes</h1>
        </div>
        {
          details && <DetalhesCard details={details} poder={poder} poder2={poder2} base={base} /> //enviando este objeto p detais card
        }
        <Modal
          onRequestClose={modalCapturarSumir}
          style={customStyle}
          isOpen={modal}>
          <DivMOdal3>
            <h1>Oh, no! </h1>
            <p>O pokemon foi removido da sua pokedex</p>
          </DivMOdal3>
        </Modal>
      </MainStyled>

    </>
  )

}

export default DetalhesPage