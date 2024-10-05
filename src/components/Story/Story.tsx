import React, { useState } from "react";
import { Story } from "../../types/story";
import * as S from "./styles";

import StoryCarousel from "./StoryCarroussel";
type StoryCoverProps = {
  story: Story;
};

const StoryCover: React.FC<StoryCoverProps> = ({ story }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <S.StoryCard onClick={handleClick}>
        <S.ImageCover alt={story.title} src={story.cover} />
        <span>{story.title}</span>
      </S.StoryCard>
      {isOpen && <StoryCarousel storyFrames={story.frames} onClose={handleClose} />}
    </>
  );
};

export default StoryCover;
