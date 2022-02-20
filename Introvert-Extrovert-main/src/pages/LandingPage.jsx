import React, { useState } from "react";
import styled from "styled-components";
import LandingContent from "../component/LandingContent";
import Questions from "../component/Questions";
import Results from "../component/Results";

const LandingContainer = styled.div`
    background:url(${props => props.background});
    width: 100%;
    height: 100%;
`
const LandingPage = () => {
    const [firstLoad, setFirstLoad] = useState(true);
    const [finish, setFinish] = useState(false);
    const [results, setResults] = useState({});
    return (
        <LandingContainer background={process.env.PUBLIC_URL + '/assets/images/background.jpg'}>
            {
                firstLoad ?
                    <LandingContent setFirstLoad={setFirstLoad} />
                    :
                    finish ?
                        <Results results={Object.values(results)}/>
                        :
                        <Questions setFinish={setFinish} setResults={setResults}/>

            }
        </LandingContainer>
    );
}

export default LandingPage;
