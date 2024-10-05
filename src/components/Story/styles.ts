import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding: 16px;
  height: 100vh;
  width: 100vw;
  align-content: flex-end;
`;
export const StoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 16px;
  max-width: fit-content;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  border-radius: 10px;
  &:hover {
    border-color: white;
  }
  cursor: pointer;
  span {
    font-size: 24px;
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
  height: 200px;
  width: 200px;
  margin: 16px;
  cursor: pointer;
  object-fit: cover;
`;


export const Footer = styled.div`
  height: 12%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type alignProps = {
  align: "left" | "right";
};

export const FramesContainer = styled.div<alignProps>`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: start;
  ${(props) =>
    props.align === "left" &&
    `
    flex-direction: row-reverse;
    `}
`;

export const Frame = styled.div`
  width: 30%;
  margin-top: 16px;
  padding: 16px;
  border-radius: 10px;
  /* box-shadow: 0 0 10px #4a556887; */
  overflow: hidden;
  text-align: justify;
  background-color: #4a556887;
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FrameTitle = styled.h1`
  font-size: 24px;
  color: white;
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
