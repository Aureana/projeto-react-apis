import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import { MainStyled, DivMOdal3 } from "../components/estilosPage/StyledDetalhesPage"
import { DetalhesCard } from '../components/card/DetalhesCard'
import Modal from 'react-modal'
import axios from 'axios'

import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


const DetalhesPage = () => {
  const urlCadaPoke = `https://pokeapi.co/api/v2/pokemon/`
  const { id } = useParams()
  const [details, setDetails] = useState(null)
  const [poder, setPoder] = useState([])
  const [poder2, setPoder2] = useState([])
  const [base, setBase] = useState([])

  const fetchDetalhes = async () => {
    try{
    const APIResponse = await axios.get(`${urlCadaPoke}${id}`)
    setDetails(APIResponse.data)
    }
    catch(error){
    }
   
  }

  useEffect(() => {
    fetchDetalhes()
  },[])
  const typeEbase = async () => {
    if(details){
      setPoder2(details['types']['0'].type?.['name'])
      setPoder(details.types[1]?.type?.['name'])
      setBase(details['stats'])
      }
  }
  useEffect(()=>{
    typeEbase()
  },[details])
 
  const context = useContext(GlobalContext)
  const { modal, modalCapturarSumir, customStyle } = context

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
          isOpen={modal}
          ariaHideApp={false}>           
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