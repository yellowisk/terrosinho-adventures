import styled, { css } from "styled-components";

export const animationFadeIn = css`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  z-index: 2;
  padding: 16px;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  ${animationFadeIn}
`;
export const StoryCard = styled.div<{
  isEnabled: boolean;
  isCurrent: boolean;
  hasRedBorder?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-width: fit-content;
  transition: 0.5s ease;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 1));
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      border: 2px solid white;
    `}
  ${({ hasRedBorder }) =>
    hasRedBorder &&
    css`
      animation: redBorder 2s infinite;
    `}
  &:hover {
    span {
      text-shadow: 0px 0px 10px white;
    }
    img {
      ${({ isEnabled }) =>
        isEnabled &&
        css`
          animation: objectPosition 10s infinite;
        `}
    }
  }
  span {
    text-align: center;
    font-size: 1.3dvw;
    color: white;
    margin-bottom: 16px;
    text-overflow: ellipsis;
    font-weight: 500;
    position: fixed;
  }
  @keyframes objectPosition {
    0% {
      object-position: 50%;
    }
    25% {
      object-position: 0%;
    }
    75% {
      object-position: 100%;
    }
    100% {
      object-position: 50%;
    }
  }
  @keyframes redBorder {
    0% {
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
    }
  }
`;

export const ImageCover = styled.img<{ isEnabled: boolean }>`
  z-index: -1;
  border-radius: 10px;
  aspect-ratio: 1/2;
  width: 200lvw;
  object-fit: cover;
  transition: 1s ease;
  ${({ isEnabled }) =>
    !isEnabled &&
    css`
      filter: grayscale(100%) contrast(40%);
    `}
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`;
export const FramesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: inherit;
`;

export const Frame = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: hidden;
  margin-top: 32px;
  padding: 16px;
  border-radius: 10px;
  /* box-shadow: 0 0 10px #4a556887; */
  overflow: hidden;
  text-align: justify;
  background-color: #4a556887;
  white-space: pre-wrap;
  ${animationFadeIn}
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FrameTitle = styled.h1`
  font-size: 24px;
  color: white;
  font-weight: 700;
`;

export const FrameDescription = styled.p`
  font-size: 16px;
  color: white;
`;
