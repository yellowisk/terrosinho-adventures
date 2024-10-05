import React, { useState } from "react";
import { StoryFrame } from "../../types/story";
import * as S from "./styles";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type StoryCarouselProps = {
  storyFrames: StoryFrame[];
  onClose: () => void;
};

const StoryCarousel: React.FC<StoryCarouselProps> = ({
  storyFrames,
  onClose,
}) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const currentFrame = storyFrames[currentFrameIndex];

  const handleNext = (currentFrame: number) => {
    if (currentFrame < storyFrames.length - 1) {
      setCurrentFrameIndex(currentFrame + 1);
    }
  };

  const handlePrev = (currentFrame: number) => {
    if (currentFrame > 0) {
      setCurrentFrameIndex(currentFrame - 1);
    }
  };

  const handleExit = () => {
    onClose();
  };

  return (
    <S.Container>
      <S.BackIcon onClick={handleExit}>
        <X />
      </S.BackIcon>
      {currentFrame.frameLeft && (
        <S.FramesContainer align="left">
          <S.Frame>
            <S.FrameTitle>{currentFrame.frameLeft.title}</S.FrameTitle>
            {currentFrame.frameLeft.image && (
              <S.FrameImage src={currentFrame.frameLeft.image} />
            )}
            <S.FrameDescription>
              {currentFrame.frameLeft.description}
            </S.FrameDescription>
          </S.Frame>
        </S.FramesContainer>
      )}
      {currentFrame.frameRight && (
        <S.FramesContainer align="right">
          <S.Frame>
            <S.FrameTitle>{currentFrame.frameRight.title}</S.FrameTitle>
            {currentFrame.frameRight.image && (
              <S.FrameImage src={currentFrame.frameRight.image} />
            )}
            <S.FrameDescription>
              {currentFrame.frameRight.description}
            </S.FrameDescription>
          </S.Frame>
        </S.FramesContainer>
      )}
      <S.Footer>
        <S.ChevronContainer
          disabled={currentFrameIndex == 0}
          onClick={() => handlePrev(currentFrameIndex)}
        >
          <ChevronLeft />
        </S.ChevronContainer>
        {currentFrame.frameCenter && (
          <S.LegendContainer>
            <S.LegendTitle>{currentFrame.frameCenter.title}</S.LegendTitle>
            <S.LegendDescription>
              {currentFrame.frameCenter.description}
            </S.LegendDescription>
          </S.LegendContainer>
        )}
        <S.ChevronContainer
          disabled={currentFrameIndex == storyFrames.length - 1}
          onClick={() => handleNext(currentFrameIndex)}
        >
          <ChevronRight />
        </S.ChevronContainer>
        <S.Terroso src={currentFrame.terrosoImg} />
      </S.Footer>
    </S.Container>
  );
};

export default StoryCarousel;
