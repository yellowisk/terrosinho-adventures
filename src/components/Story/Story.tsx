import React, { useState } from "react";
import { Story } from "../../types/story";
import * as S from "./styles";

import StoryCarousel from "./StoryCarroussel";
type StoryCoverProps = {
  story: Story;
  className?: string;
  onSelected: (story: Story) => void;
  isStart: boolean;
  setIsStart: (b: boolean) => void;
};

const StoryCover: React.FC<StoryCoverProps> = ({
  story,
  className,
  onSelected,
  isStart,
  setIsStart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onSelected(story);
    setIsOpen(true);
    setIsStart(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  console.log(isStart);
  return (
    <>
      {isStart == true && !story.title.includes("Ordo") ? (
        <div>
          <S.StoryCard onClick={() => {}} className={className}>
            <S.ImageCover
              className="opacity-30 "
              alt={story.title}
              src={story.cover}
            />
            <span>
              {story.title.includes("Late")
                ? `${story.title.split(" ")[0]} ${story.title.split(" ")[1]}`
                : story.title.split(" ")[0]}
            </span>
          </S.StoryCard>
        </div>
      ) : (
        <>
          <S.StoryCard onClick={handleClick} className={className}>
            <S.ImageCover alt={story.title} src={story.cover} />
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
      )}
    </>
  );
};

export default StoryCover;
