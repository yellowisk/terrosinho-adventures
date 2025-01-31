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
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 30;
  pointer-events: none;
  padding: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  ${animationFadeIn}
`;

export const FramesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: inherit;
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin: 16px 0;
`;

export const Frame = css`
  div {
    padding: 8px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    padding: 16px;
    height: min-content;
  }
  ${animationFadeIn}
`;

export const CenterFrame = styled.div`
  ${Frame}
  grid-column: 1 / span 7;
  grid-row: 1 / span 1;
  display: flex;
`;

export const LeftFrame = styled.div`
  ${Frame}
  grid-column: 1 / span 2;
  grid-row: 2 / span 5;
`;

export const RightFrame = styled.div`
  ${Frame}
  grid-column: 6/ span 2;
  grid-row: 2 / span 5;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: white;
`;

export const Description = styled.p`
  font-size: 18px;
  color: white;
  text-align: justify;
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

const Chevron = css`
  /* height: 100%;
  width: 70px; */
  /* border-radius: 12px; */
  /* min-height: 70px;
  max-width: 60px; */
  height: 112px;
  width: calc(10vw - 64px);
  /* margin: 16px; */
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff47;
  transition: opacity 0.3s ease;
  position: fixed;
  svg {
    height: 94px;
    width: 94px;
  }
`;

export const LeftChevronContainer = styled.div<{ disabled: boolean }>`
  grid-column: 1 / span 1;
  grid-row: 7 / span 1;
  bottom: 0;
  left: 0;
  border-top-right-radius: 12px;
  ${Chevron}
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
`; 

export const RightChevronContainer = styled.div<{ disabled: boolean }>`
  grid-column: 7 / span 1;
  grid-row: 7 / span 1;
  justify-self: end;
  bottom: 0;
  right: 0;
  border-top-left-radius: 12px;
  ${Chevron}
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
`;

export const BackIcon = styled.div`
  background-color: #ffffff47;
  border-bottom-left-radius: 12px;
  padding: 8px;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  svg {
    height: 52px;
    width: 52px;
  }
`;

export const Terroso = styled.img`
  pointer-events: none;
  user-select: none;
  aspect-ratio: 1/1;
  object-fit: cover;
  float: left;
  width: 164px;
  margin: 16px;
`;
