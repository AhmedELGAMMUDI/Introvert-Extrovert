import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 40rem;
    margin: auto;
    padding-top: 10rem;
`
const Result = styled.div`
    color: white;
    font-size: 3rem;
    text-align: center;
`

const Results = (props) => {
  return (
    <Container>
      {
        props.results.filter(result => result === "extrovert").length > props.results.filter(result => result === "introvert").length
          ?
          <Result>You Are an Extrovert</Result>
          :
          <Result>You Are an Introvert</Result>
      }
    </Container>
  );
}

export default Results;
