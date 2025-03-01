import React, { useState } from "react";
import {
  DiaryContainer,
  DiaryTitle,
  DiaryBlock,
  DiaryContent,
  ImageContainer,
  AddImageButton,
  AddImageInput,
  PictureImage,
} from "./DiaryStyles";
import GoalBox from "./GoalBox";

const Diary = ({
  checkedGoals,
  categoryColors,
  content,
  setContent,
  image,
  setImage,
}) => {
  const Image = process.env.PUBLIC_URL + "/image/Image.png";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <DiaryContainer>
        <DiaryTitle> 오늘의 일기</DiaryTitle>
        <DiaryBlock />
        <DiaryContent
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="오늘의 일기를 작성하세요..."
        />
        {image && (
          <ImageContainer>
            <img
              src={image}
              alt="Diary entry"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </ImageContainer>
        )}
        <AddImageButton>
          <PictureImage src={Image} alt="Picture Image" />
          <AddImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </AddImageButton>
      </DiaryContainer>
      <GoalBox goals={checkedGoals} categoryColors={categoryColors} />
    </>
  );
};

export default Diary;
