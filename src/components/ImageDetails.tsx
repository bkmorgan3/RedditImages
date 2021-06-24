import React from "react";
import styled from "styled-components";

import { IImageData } from "../index";

const ImageDetailsContainer = styled.div`
    width: 100%;
    height: 700px;
    border: 1px solid brown;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

const DetailsContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: #000;
`;

interface IImageDetailsProps {
    setShouldShowInividualImageDetails : (val: boolean) => void;
    shouldShowIndividualImageDetails: boolean;
     setSelectedImage: (val: IImageData) => void; 
     selectedImage: IImageData | null
}
export const  ImageDetails = (props: IImageDetailsProps) => {
    console.log("details", props)
    const { selectedImage } = props;
    return <ImageDetailsContainer>
        <DetailsContainer>
            <Title>{selectedImage?.title}</Title>
            <button onClick={() => props.setShouldShowInividualImageDetails(!props.shouldShowIndividualImageDetails)}>Return</button>

        </DetailsContainer>
    </ImageDetailsContainer>
}