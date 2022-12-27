import styled from "styled-components";

export const ButtonPokedex = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 287px;
height: 74px;
margin-right:10px;
top: 41px;
background: #33A4F5;
border-radius: 8px;
color: white;
font-weight:bold;
font-size: 24px;
`
export const ButtonTodosPokemonsDetalhes = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: absolute;
width: 287px;
height: 74px;
top: 41px;
background: transparent;
color: black;
text-decoration: underline;
font-style: normal;
font-weight: 700;
font-size: 24px;
`
export const ButtonRedesSociais = styled.button `
display: flex;
width: 100px;
height: 40px;
gap:5px;
margin-left:80px;

img{
  width: 40px;
  height: 40px;
}
`

export const ButtonExcluir = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 287px;
height: 74px;
margin-right:41px;
top: 41px;
background: #FF6262;;
border-radius: 8px;
color: white;
font-size: 16px;
`

export const HeaderStyled = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height: 160px;
width:95vw;
margin: 0 auto;
display: flex;
justify-content:space-between;
align-items: center;
div{
  width: 100%;
  display: flex;
  justify-content:center; 
}
h1{
font-size:32px;
}
.imgPokemonHeader{
  width: 307px;
  height: 113px;
}
.GridHeader1{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  
}
.GridHeader2{
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
}
.GridHeader3{
  width: 100%;
  height: 100%;
}
`

