import styled from "styled-components";
export const ConteinerItens = styled.div`
    border: 1px;
    background-color: white;
    margin-bottom: 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 22vh;
    width: 7vw;
    border-radius: 10px;
    gap: 0.7rem;
    text-align: center;
    :hover{ transform: scale(1.1); border: 3px solid black; border-color : #8A2BE2;}
`
export const BotaoRemover = styled.button`
    background-color: black;
    color: white;
    height: 3.5vh;
    width: 5.5vw;
    border-radius: 8px;
    :active{ font-size: 12px; }
`
export const H3 = styled.h3`
    font-size: 0.8em;
`