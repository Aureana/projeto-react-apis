import styled from "styled-components";

export const PokemonCardConteiner = styled.div`
display: flex;
flex-direction:row-reverse;
justify-content: space-between;
position: relative;
width: 400px;
height: 210px;
left: 0px;
top: 0px;
background-color:${(props) => props.color};
border-radius: 12px;
margin-bottom:40px;

.imgBulba{
position: absolute;
width: 193px;
height: 193px;
left: 210px;
top: -52px;

}
.bolaPokeCard{
width: 250.73px;
height: 210.73px;
right: 0;
bottom:192px;
z-index: 0;


}
.ladoEsquerdo{
    display: flex;
    flex-direction:column;
    left:40px;
    margin-top:24px;
    margin-bottom:20px;
    max-width: 200px;
    min-width:200px;
    position: relative;

    p{
        font-size:16px;
        color:white; 
}

h2{
    color:white;
    font-size:32px;
    font-weight:700;
}
}
.tipos{
    display: flex;
    gap:8px;       
}
h3{
    margin-top:auto;
    font-weight:700;
    text-decoration:underline;
    color: white;
    font-weight:700;
}
.ladoDireito{  
    z-index: 0;
    min-width:220px;
    max-width: 220px;


    .botaoCapturar{
    background-color: white;
    color: black;
    z-index: 1;
    position: relative;
    bottom: 50px;
    padding: 4px 10px;
    left: 80px;
    width: 106px;
    height: 38px;

    } 
    .botaoExcluir{
    z-index: 1;
    position: relative;
    bottom: 50px;
    left: 80px; 
    padding: 4px 10px; 
    width: 106px;
    height: 38px;
    background-color: #FF6262;
    color:  #FFFFFF;
   

    }
   
}
`