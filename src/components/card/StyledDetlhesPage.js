import styled from "styled-components"

export const MainStyled = styled.main`
width: 100%;
height: 110vh;
padding:0 26px;
background-color:#5D5D5D;
padding: 0 110px;

.tituloDetalhe{ 
  display:flex ;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  height: 120px;
  width:100%;
  color: white;
}
`
export const ContainerCard = styled.main`
display: flex;
background-color: ${(props)=>props.color};
width: 100% ;
max-height: 663px;
min-height: 500px;
padding: 12px;
border-radius: 34px;
z-index: 0;
`
export const DetalhesLadoEsquerdo = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
   
    .divImgFrenteVerso{
        display: flex;
        display: grid;
        flex-direction: column;;
        width: 50%;
        height: 100%;
        padding:10px 20px;
        align-items: center;
        gap: 30px;
    }
    .divImgFrente{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 106%;
        max-height:230px;
        min-height:230px;        
        background-color: white;
        border-radius: 10px;
    }
    .imgCostaFrente{
        width: 100%;
        height: 100%;
    }
    .divImgCosta{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 106%;
        max-height:230px;
        min-height:230px;  
        background-color: white;
        border-radius: 10px;
    }
    .baseState{ 
        min-width:60%;              
        min-height:100%;        
        padding:10px 10px;
        
    }
    .base{
        background-color: white;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 20px;
    }
    h1{
        font-size: 30px;
        font-weight: bold;
        border-bottom: 1px solid #ECECEC;
        width: 103%; 
        margin-bottom:5px;      
    }
    .divBaseStatTotal{
        display: flex;
        gap:5px;
        position: relative;
        right: 110px;
        top:15px;
        border-bottom: 1px solid #ECECEC;
        width: 170%; 
    }
    .progressBase{
        position: relative;
        right: 110px;
        border-bottom: 1px solid #ECECEC;
        width: 170%;
        top:17px;
        }
    .spanBase1{
        font-weight: bold;
        margin-left:52px;
       
    }
    .spanBase2{
        font-weight: bold;
        margin-left:28px;
    }
    .spanBase3{
        font-weight: bold;
        margin-left:15px;
    }
    .spanBase4{
        font-weight: bold;
        margin-left:23px;
    }
    .spanBase5{
        font-weight: bold;
        margin-left:23px;
    }
    .spanBase6{
        font-weight: bold;
        margin-left:30px;
    }
    .spanTotal{
        font-weight: bold;
        margin-left:22px;              
    } 
`
export const DetalhesLadoDireito = styled.div`
    display: flex;
    gap:10px;     
    width: 50%;
    height: 100%;
    padding: 10px 30px;
    .pokemonDivDireito{
        width: 50%;
        height: 100%;
    }
    .imgDireito{
        width: 50%;
        height: 100%;         
    }
    .imgPokens{
        width: 200px;
        height: 200px;
        position: relative;
        bottom: 100px;
        left: 15px;
        z-index:0;
    }
    .tiposDireito{
        display: flex;
        gap: 10px;
        margin-bottom: 20px;         
    }
    
    h2{
        font-size: 30px;
        font-weight:bold;
        color:#FFF;    
    }
    p{
        font-size: 16px;
        font-weight:700;
        color:#FFF;         
    }
    .divMoves{
        width: 100%;
        height: 372px;
        background-color: white;
        border-radius:10px; 
        padding: 15px;  
        position: relative;
        z-index: 0;
    }
    .move{
        display: flex;
        flex-direction: column;
    }
    span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 17px;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        padding: 8px 10px;
        background-color: #ECECEC;
        width: fit-content;
    }
   
    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        padding-bottom:20px       
    }
    .bolaPoke{
        position: absolute;
        max-width: 638px;
        max-height: 470px;       
        min-width: 638px;
        min-height: 539px;       
        top:280px;
        right: 112px;
        z-index: 0;
    }

`
export const DivMOdal3 = styled.div`
width: 451px;
height: 222px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index:0;
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

