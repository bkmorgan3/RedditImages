import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";

import { Images } from "./components/Images";
import { ImageDetails } from "./components/ImageDetails";

const BackgroundContainer = styled.div`
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
  margin-top: 30px;
`;

const MainHeader = styled.h1``;

export interface IImageData {
  url: string;
  title: string;
  score: number;
  author: string;
  id: string;
  upvote_ratio: number;
}

export const App = () => {
  const [
    shouldShowIndividualImageDetails,
    setShouldShowIndividualImageDetails,
  ] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<IImageData | null>(null);

  return (
    <BackgroundContainer>
      <MainHeader>
        Reddit Image{!shouldShowIndividualImageDetails && "s"}
      </MainHeader>
      {!shouldShowIndividualImageDetails ? (
        <Images
          setShouldShowIndividualImageDetails={
            setShouldShowIndividualImageDetails
          }
          shouldShowIndividualImageDetails={shouldShowIndividualImageDetails}
          setSelectedImage={setSelectedImage}
        />
      ) : (
        <ImageDetails
          setShouldShowIndividualImageDetails={
            setShouldShowIndividualImageDetails
          }
          selectedImage={selectedImage}
          shouldShowIndividualImageDetails={shouldShowIndividualImageDetails}
        />
      )}
    </BackgroundContainer>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
