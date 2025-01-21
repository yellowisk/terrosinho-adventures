import React, { useState } from "react";
import { Story } from "../../types/story";
import * as S from "./styles";

import StoryCarousel from "./Carroussel/Carroussel";
import { useStory } from "../../context/StoryContext";
type StoryCoverProps = {
  storyId: number;
  story: Story;
  className?: string;
  onSelected: (story: Story) => void;
};

const StoryCover: React.FC<StoryCoverProps> = ({
  storyId,
  story,
  className,
  onSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { storyNumber, setStoryNumber } = useStory();
  const isEnabled = storyId <= storyNumber;

  const handleClick = (id: number) => {
    if (!isEnabled) return;
    onSelected(story);
    setIsOpen(true);
    // leu a ultima historia
    if (id === storyNumber) setStoryNumber(++id);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.StoryCard
        isCurrent={storyId === storyNumber}
        isEnabled={isEnabled}
        hasRedBorder={storyId === 5}
        onClick={() => handleClick(storyId)}
        className={className}
      >
        <S.ImageCover
          loading="lazy"
          isEnabled={isEnabled}
          alt={story.title}
          src={story.cover}
        />
        <span>
          {story.title.includes("Late")
            ? `${story.title.split(" ")[0]} ${story.title.split(" ")[1]}`
            : story.title.split(" ")[0]}
        </span>
      </S.StoryCard>
      {isOpen && (
        <StoryCarousel storyFrames={story.frames} onClose={handleClose} />
      )}
    </>
  );
};

export default StoryCover;
