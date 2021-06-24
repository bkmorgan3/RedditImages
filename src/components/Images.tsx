import React, { useState, useEffect } from "react";
import { requestURL } from "../utils/url";
import styled from "styled-components";
import { IImageData } from "../index";

import { Loading } from "./Loading";

const ImagesContainer = styled.div`
  width: 100%;
`;

const IndividualImage = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
`;

const ImageTitle = styled.h3`
  color: #000;
  width: 70%;
  text-align: center;
`;

interface IImagesProps {
  setShouldShowIndividualImageDetails: (val: boolean) => void;
  shouldShowIndividualImageDetails: boolean;
  setSelectedImage: (val: IImageData) => void;
}

export const Images = (props: IImagesProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<IImageData[] | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const res = await fetch(requestURL);
      const json = await res.json();
      const formattedImages: IImageData[] = [];
      json.data.children.forEach((child: any) => {
        const imagePostData = {
          url: child.data.url,
          id: child.data.id,
          title: child.data.title,
          score: child.data.score,
          author: child.data.author,
          upvote_ratio: child.data.upvote_ratio,
        };
        formattedImages.push(imagePostData);
      });
      setImageData(formattedImages);
      setIsLoading(false);
    } catch (err) {
      console.warn(err);
    }
  }
  const handleImageClick = (image: IImageData): void => {
    props.setSelectedImage(image);
    props.setShouldShowIndividualImageDetails(
      !props.shouldShowIndividualImageDetails
    );
  };
  return (
    <ImagesContainer>
      {isLoading && <Loading />}

      {!!imageData &&
        imageData.map((image: IImageData) => {
          return (
            <IndividualImage key={image.id}>
              <StyledImage
                src={image.url}
                onClick={() => handleImageClick(image)}
              />
              <ImageTitle>{image.title}</ImageTitle>
            </IndividualImage>
          );
        })}
    </ImagesContainer>
  );
};
