import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";

import {Images } from "./components/Images";
import { ImageDetails } from "./components/ImageDetails";

const BackgroundContainer = styled.div`
    border: 1px solid #000;
    width: 90%;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-conent: flex-start;
    align-items: center;
    margin: 0 auto;
    background-color: white;
    border-radius: 4px;
    padding: 30px;
`;

export interface IImageData {
    url: string;
    title: string;
    score: number;
    author: string;
    id: string;
}

const App = () => {
    const [shouldShowIndividualImageDetails, setShouldShowInividualImageDetails] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<IImageData | null>(null)
   
    
    useEffect(() => {
        console.log("S", shouldShowIndividualImageDetails)

    },[shouldShowIndividualImageDetails])
    return <BackgroundContainer>
        {!shouldShowIndividualImageDetails && 
        <Images 
            setShouldShowInividualImageDetails={setShouldShowInividualImageDetails} 
            shouldShowIndividualImageDetails={shouldShowIndividualImageDetails} 
            setSelectedImage={setSelectedImage}
        />
        }
        {shouldShowIndividualImageDetails && 
        <ImageDetails 
            setShouldShowInividualImageDetails={setShouldShowInividualImageDetails} 
            shouldShowIndividualImageDetails={shouldShowIndividualImageDetails} 
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
        />}
    </BackgroundContainer>
}

ReactDOM.render(<App />, document.querySelector("#root"))
