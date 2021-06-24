import React from 'react';
import styled from "styled-components";

const LoadingBackground = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Loading = () => {
    return <LoadingBackground>
       <h2>Loading...</h2>
    </LoadingBackground>
}