import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../apiService';

//#region styled component

const Container = styled.div`
    width: 67vw;
    margin: auto;
    padding-top: 2rem;
`
const AnswerConainer = styled.div`
padding: 2rem;
color: white;
`
const Question = styled.div`
    color: white;
    font-size: 1.5rem;
`
const Finsih = styled.div`
    border: 2px solid white;
    width: fit-content;
    cursor: pointer;
    padding: 0.5rem 2rem;
    color: white;
    &:hover{
        background: white;
        color: red;
    }

`
//#endregion

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const getQuestions = async (url) => {
    const questions = await api('get', url);
    setQuestions(questions)
  }
  useEffect(() => {
    getQuestions('http://127.0.0.1:8000/api/question/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    return setAnswers({
      ...answers,
      [name]: value,
    });
  };
  return (
    <Container>
      {
        questions?.map((question, index) =>
          <React.Fragment key={index}>
            <Question key={index}>{question.question}</Question>
            <AnswerConainer>
              {
                question.answers?.map((answer, index) =>
                  <div key={index}>
                    <input onChange={handleChange} type="radio" value={answer.answer_type} name={question.question}/>
                    <span>{answer.answer}</span>
                  </div>
                )}
            </AnswerConainer>
          </React.Fragment>
        )
      }
      <Finsih onClick={()=>{props.setFinish(true);props.setResults(answers)}}>Finish</Finsih>
    </Container>
  )
}

export default Questions;