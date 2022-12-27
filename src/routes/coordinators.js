export const goToHomePage = (navigate) =>{
    navigate("/")
}

export const goToPokedexPage = (navigate) =>{
    navigate("/pokedex")
}
export const gotoDetalhesPage = (navigate, pokemon )=>{
    navigate(`/detalhes/${pokemon}`)
}
