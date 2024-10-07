import styled, { css } from "styled-components";

const FadeInAnimation = css`
  animation: glow 2s 5;
`;

export const StyledContainer = styled.div`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  pointer-events: all;
  width: calc(80vw);
  margin-left: 10%;
  bottom: 0;
  display: flex;
  justify-content: center;
  justify-content: space-between;

  .glow {
    animation: glow 2s infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px 5px rgba(236,72,153, 0.5);
      background-color: rgba(236,72,153);
    }
    50% {
      box-shadow: 0 0 20px 10px rgba(236,72,153, 0.8);
      background-color: rgba(255,255,255);
    }
    100% {
      box-shadow: 0 0 5px 5px rgba(236,72,153, 0.5);
      background-color: rgba(236,72,153);
    }
  }
`;
export const StyledLine = styled.div`
  background-color: rgb(255 255 255 / 50%);
  margin-top: 67px;
  position: fixed;
  z-index: -1;
  height: 3px;
  width: calc(80vw - 70px);
  margin-left: 30px;
  /* ${FadeInAnimation} */
`;

export const StyledTimePoint = styled.div`
  max-width: 11.6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const StyledPoint = styled.div<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(255 255 255);
  margin: 10px;
  background-color: ${({ selected }) => (selected ? "red" : "white")};
`;

export const StyledPointTitle = styled.div<{ selected: boolean }>`
  height: 48px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  span {
    line-height: 24px;
    text-align: center;
    font-weight: ${({ selected }) => (selected ? "900" : "500")};

  }
`;

export const StyledPointTime = styled.div<{ selected: boolean }>`
  height: 30px;
  span {
    line-height: 24px;
    text-align: center;
    font-weight: ${({ selected }) => (selected ? "900" : "500")};
  }
`;
