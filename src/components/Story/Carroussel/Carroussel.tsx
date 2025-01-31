import React, { useState } from "react";
import { StoryFrame } from "../../../types/story";
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

  const handleNext = (crtFrame: number) => {
    if (crtFrame < storyFrames.length - 1) {
      setCurrentFrameIndex(crtFrame + 1);
    }
  };

  const handlePrev = (crtFrame: number) => {
    if (crtFrame > 0) {
      setCurrentFrameIndex(crtFrame - 1);
    }
  };

  const handleExit = () => {
    onClose();
  };

  return (
    <S.Container onLoad={handleLoad}>
      <S.BackIcon onClick={handleExit} className="pointer-events-auto z-40 ">
        <X />
      </S.BackIcon>
      {currentFrame.frameCenter && (
        <S.CenterFrame>
          <S.Terroso loading="lazy" src={currentFrame.terrosoImg} />
          <div>
            <S.Title>{currentFrame.frameCenter.title}</S.Title>
            <S.Description>
              {currentFrame.frameCenter.description}
            </S.Description>
          </div>
        </S.CenterFrame>
      )}
      {currentFrame.frameLeft && (
        <S.LeftFrame>
          <div>
            <S.Title>{currentFrame.frameLeft.title}</S.Title>
            {currentFrame.frameLeft.image && (
              <S.FrameImage loading="lazy" src={currentFrame.frameLeft.image} />
            )}
            <S.Description>{currentFrame.frameLeft.description}</S.Description>
          </div>
        </S.LeftFrame>
      )}
      {currentFrame.frameRight && (
        <S.RightFrame>
          <div>
            <S.Title>{currentFrame.frameRight.title}</S.Title>
            {currentFrame.frameRight.image && (
              <S.FrameImage
                loading="lazy"
                src={currentFrame.frameRight.image}
              />
            )}
            <S.Description>{currentFrame.frameRight.description}</S.Description>
          </div>
        </S.RightFrame>
      )}
      <S.LeftChevronContainer
        disabled={currentFrameIndex == 0}
        onClick={() => handlePrev(currentFrameIndex)}
        className="pointer-events-auto"
      >
        <ChevronLeft />
      </S.LeftChevronContainer>
      <S.RightChevronContainer
        disabled={currentFrameIndex == storyFrames.length - 1}
        onClick={() => handleNext(currentFrameIndex)}
        className="pointer-events-auto"
      >
        <ChevronRight />
      </S.RightChevronContainer>
    </S.Container>
  );
};

export default StoryCarousel;
