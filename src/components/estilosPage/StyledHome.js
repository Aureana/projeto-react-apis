import styled from "styled-components";


export const HomePageStyled = styled.div`

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
export const DivMOdal = styled.div`
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
