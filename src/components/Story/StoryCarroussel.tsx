import React, { useState } from "react";
import { StoryFrame } from "../../types/story";
import * as S from "./styles";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type StoryCarouselProps = {
  storyFrames: StoryFrame[];
  onClose: () => void;
  onSelectFrame?: (index: number) => void;
};

const StoryCarousel: React.FC<StoryCarouselProps> = ({
  storyFrames,
  onClose,
  onSelectFrame,
}) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const currentFrame = storyFrames[currentFrameIndex];

  React.useEffect(() => {
    if (onSelectFrame) {
      onSelectFrame(currentFrameIndex);
    }
  }, [currentFrameIndex, onSelectFrame]);

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
    <S.Container className="z-30 pointer-events-none">
      <S.BackIcon onClick={handleExit} className="pointer-events-auto z-40 ">
        <X />
      </S.BackIcon>
      <S.Footer className="mt-3">
        <S.ChevronContainer
          disabled={currentFrameIndex == 0}
          onClick={() => handlePrev(currentFrameIndex)}
          className="pointer-events-auto"
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
          className="pointer-events-auto"
        >
          <ChevronRight />
        </S.ChevronContainer>
        <S.Terroso src={currentFrame.terrosoImg} />
      </S.Footer>
      <S.FramesContainer>
        {currentFrame?.frameLeft && (
          <S.Frame>
            <S.FrameTitle>{currentFrame.frameLeft.title}</S.FrameTitle>
            {currentFrame.frameLeft.image && (
              <S.FrameImage src={currentFrame.frameLeft.image} />
            )}
            <S.FrameDescription>
              {currentFrame.frameLeft.description}
            </S.FrameDescription>
          </S.Frame>
        )}
        {currentFrame.frameRight && (
          <S.Frame>
            <S.FrameTitle>{currentFrame.frameRight.title}</S.FrameTitle>
            {currentFrame.frameRight.image && (
              <S.FrameImage src={currentFrame.frameRight.image} />
            )}
            <S.FrameDescription>
              {currentFrame.frameRight.description}
            </S.FrameDescription>
          </S.Frame>
        )}
      </S.FramesContainer>
    </S.Container>
  );
};

export default StoryCarousel;
