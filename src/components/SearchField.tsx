import React, { useState } from "react";
import styled from "styled-components";

import { IImageData } from "../index";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputField = styled.input`
  border: 3px solid #008cba;
  border-radius: 3px;
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  border-radius: 4px;
  background-color: #008cba;
  border: none;
`;

interface SearchFieldProps {
  imageData: IImageData[] | null;
  setShouldShowIndividualImageDetails: (val: boolean) => void;
  setSelectedImage: (val: IImageData) => void;
}
export const SearchField = (props: SearchFieldProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const { imageData, setShouldShowIndividualImageDetails, setSelectedImage } =
    props;

  const handleSearch = () => {
    !!imageData &&
      imageData.find((image: IImageData) => {
        return image.title === searchText && handleMatchingPost(image);
      });
  };

  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleMatchingPost = (post: IImageData) => {
    setShouldShowIndividualImageDetails(true);
    setSelectedImage(post);
  };

  return (
    <SearchContainer>
      <InputField placeholder="Search By Title" onChange={handleChange} />
      <SubmitButton onClick={() => handleSearch()}>Search</SubmitButton>
    </SearchContainer>
  );
};
