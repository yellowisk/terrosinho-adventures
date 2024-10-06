import React, { useState } from "react";
import { Story } from "../../types/story";
import * as S from "./styles";

import StoryCarousel from "./StoryCarroussel";
type StoryCoverProps = {
  story: Story;
  className?: string;
  onSelected: (story: Story) => void;
};

const StoryCover: React.FC<StoryCoverProps> = ({ story, className, onSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onSelected(story);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <S.StoryCard onClick={handleClick} className={className}>
        <S.ImageCover alt={story.title} src={story.cover} />
        <span>{story.title.split(' ')[0]}</span>
      </S.StoryCard>
      {isOpen && <StoryCarousel storyFrames={story.frames} onClose={handleClose} />}
    </>
  );
};

export default StoryCover;
