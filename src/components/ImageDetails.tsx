import React from "react";
import styled from "styled-components";

import { IImageData } from "../index";

const IndividualImageContainer = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    margin-top: 25px;
`;

const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: #000;
    width: 90%;
    text-align: center;
`;

const IndividualImageDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 430px;
`;

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const StyledImage = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    padding-left: 50px;
`;

const Text = styled.p`
    fonet-weight: 700;
    text-align: center; 
`;

const ReturnButton = styled.button`
    height: 75px;
    width: 200px;
    margin-top: 20px;
    font-size: 16px;
    background-color: #008CBA;
    color: #fff;
    border: none;
    border-radius: 2px;
`;

interface IImageDetailsProps {
    setShouldShowInividualImageDetails : (val: boolean) => void;
    shouldShowIndividualImageDetails: boolean;
     setSelectedImage: (val: IImageData) => void; 
     selectedImage: IImageData | null
}
export const  ImageDetails = (props: IImageDetailsProps) => {
    const { selectedImage } = props;
    console.log("sel", selectedImage)
    return (
    <IndividualImageContainer>
        <DetailsContainer>
            <Title>{selectedImage?.title}</Title>
            <IndividualImageDetailsContainer>
                <ImageContainer>
                    {!!selectedImage && 
                    <StyledImage src={selectedImage.url} />
                    }
                </ImageContainer>
                <TextContainer>
                    {!!selectedImage && 
                    <Text>This post was created by: {selectedImage.author}</Text>
                    }
                    {!!selectedImage &&
                    <Text> The Upvote Ratio is: {selectedImage.upvote_ratio}</Text>
                    }
                    {!!selectedImage &&
                    <Text> Reddit Karma is: {selectedImage.score}</Text>
                    }
                </TextContainer>
            </IndividualImageDetailsContainer>
            <ReturnButton onClick={() => props.setShouldShowInividualImageDetails(!props.shouldShowIndividualImageDetails)}>Return</ReturnButton>

        </DetailsContainer>
    </IndividualImageContainer>
    )
}