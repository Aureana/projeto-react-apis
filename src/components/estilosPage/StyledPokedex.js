import styled from "styled-components";

export const PokedexPageStyled = styled.div`

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
export const DivMOdal2 = styled.div`
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