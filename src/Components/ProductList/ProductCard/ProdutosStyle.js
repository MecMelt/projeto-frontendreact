import styled from "styled-components";
export const CCartas = styled.div`
    border: 1px solid white;
    width: 10w;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 1rem 1.1rem;
    line-height: 2rem;
    background-color: white;
    border-radius: 8px;
    padding: 0.3rem;
    :hover{ transform: scale(1.1); border: 3px solid black; border-radius: 12px; border-color : #8A2BE2;}
` 
export const PR = styled.p`
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    font-weight: 500;
`
export const Botaoadd = styled.button`
    width: 7vw;
    height: 3.5vh;
    background-color: black;
    color: white;
    border-radius: 8px;
    :active{ font-size: 12px;}
`
