import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Router from "./routes/Router"
import { useState, useEffect } from "react"
import axios from "axios"
import { GlobalContext } from "./contexts/GlobalContext"


const App = () => {

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [typePoke, setTypePoke] = useState([])
    const [modal, setModal] = useState(false)
        

    const fetchPokelist = () => {

        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=27').then((response) => {
            //console.log(response.data.results)
            const inforPokemon = response.data.results.map((item) => {
                return (
                    axios.get(item.url)
                )
            })
            Promise.all(inforPokemon).then((res) => {
                const buscaInfo = res.map((item) => {
                    return (
                        item.data
                    )
                })
                //console.log("aqui", buscaInfo)

                setPokelist(buscaInfo)


            }).cath(() => {

            })

        }).catch((error) => {

        })
        //console.log(response)          

    }
    //console.log(pokelist) 

    useEffect(() => {
        fetchPokelist();
        // pokemonInformacao();

    }, []);

    //para ps botões 
    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd]
            setPokedex(newPokedex) 
            
            const pokedexString = JSON.stringify(newPokedex)
            window.localStorage.setItem("pokeBrowser", pokedexString)
        }
    };

    useEffect(()=>{
        if(localStorage.getItem("pokeBrowser")){
            const newPokeBrouser = localStorage.getItem("pokeBrowser")
            const newPokeBrouser2 = JSON.parse(newPokeBrouser)
            setPokedex(newPokeBrouser2)}
            
    },[])

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        )

        setPokedex(newPokedex) 
        const pokedexString = JSON.stringify(newPokedex)
        window.localStorage.setItem("pokeBrowser", pokedexString)
    }

    function modalCapturarAparecer(){ //para aparecer na tela
        setModal(true)
      }
      function modalCapturarSumir(){ //para sumir da tela
        setModal(false)
      }

      const customStyle = {
        content : {
          top: '50%',
          left: '50%',
          bottom: 'auto',
          right: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px',
        }
      }

    const context = {
        pokedex,
        pokelist,
        setPokedex,
        setPokelist,
        addToPokedex,
        removeFromPokedex,
        typePoke,
        setTypePoke,
        fetchPokelist,
        modal,
        modalCapturarAparecer,
        modalCapturarSumir,
        customStyle, 
    }

    return (
        <GlobalContext.Provider value={context}>
            <ChakraProvider >
                <Router />
            </ChakraProvider>
        </GlobalContext.Provider>
    )
}

export default App
