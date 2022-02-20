import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 40rem;
    margin: auto;
    padding-top: 10rem;
`
const Title = styled.div`
    color: white;
    font-size: 3rem;
    text-align: center;
`
const Start = styled.div`
    border: 2px solid white;
    width: fit-content;
    cursor: pointer;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    color: white;
    margin: 2rem auto;
    &:hover{
        background: white;
        color: red;
    }

`
const LandingContent = (props) => {
  return (
    <Container>
    <Title>Introvert or Extrovert Test</Title>
    <Start onClick={()=>props.setFirstLoad(false)}>Start Test</Start>
    </Container>
  );
}

export default LandingContent;
