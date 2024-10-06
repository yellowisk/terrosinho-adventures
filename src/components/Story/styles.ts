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
  z-index: 1;
  padding: 16px;
  height: -webkit-fill-available;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  /* flex-direction: column; */
  /* align-content: flex-end; */
  ${animationFadeIn}
`;
export const StoryCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  align-items: center;
  justify-content: center;
  padding: 18px;
  aspect-ratio: 1 / 1;
  max-width: fit-content;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  border-radius: 10px;
  &:hover {
    border-color: #ffffff90;
  }
  cursor: pointer;
  span {
    font-size: 1.24dvw;
    color: white;
    text-overflow: ellipsis;
  }
`;

export const ImageCover = styled.img`
  border-radius: 10px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  width: 200lvw;
  margin: 16px;
  cursor: pointer;
  object-fit: cover;
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

export const LegendContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  margin: 0 16px;
  overflow: hidden;
  background-color: #4a556887;
  border-radius: 10px;
  padding: 16px;
  ${animationFadeIn}
`;

export const LegendTitle = styled.h1`
  font-size: 24px;
  color: white;
`;

export const LegendDescription = styled.p`
  font-size: 16px;
  color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

export const ChevronContainer = styled.div<{ disabled: boolean }>`
  height: 100%;
  width: 70px;
  border-radius: 5px;
  min-height: 70px;
  max-width: 60px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff47;
  transition: opacity 0.3s ease;
  ${(props) =>
    props.disabled
      ? `opacity: 0.1;`
      : `  
    opacity: 1;
      &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
  `}
  svg {
    height: 48px;
    width: 48px;
  }
`;
export const BackIcon = styled.div`
  svg {
    height: 42px;
    width: 42px;
  }
  margin: 8px;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Terroso = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 30vh;
  margin: 60px;
  z-index: 2;
  pointer-events: none;
  user-select: none;
`;
