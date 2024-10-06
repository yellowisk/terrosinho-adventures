import styled from "styled-components";

// Define your styled components here
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;
export const Slide = styled.div<{ step: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;

  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  ${({ step }) =>
    step < 11
      ? `  justify-content: space-between; `
      : `
    justify-content: center; background-color: black;
  `}

  ${({ step }) =>
    step > 3 && step < 9
      ? `  background-color: black;`
      : `
  `}

  animation: ${({ step }) => (step === 1 ? "fadeInBG 6s ease-in-out" : "none")};
  @keyframes fadeInBG {
    0% {
      background-color: black;
    }
    100% {
      background-color: transparent;
    }
  }
`;

export const Legend = styled.h1<{ align: "center" | "top" | "bottom" }>`
  font-weight: bold;
  font-size: 2lvw;
  text-align: center;
  margin: 8px 10lvw;
  justify-self: ${({ align }) =>
    align === "center"
      ? "center"
      : align === "top"
      ? "flex-start"
      : "flex-end"};
  /* Apply the fade-in animation */

  animation: fadeInEffect 1s ease-in-out forwards;

  @keyframes fadeInEffect {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Gif = styled.img`
  border-radius: 50%;
  width: 30lvw;
  aspect-ratio: 1 / 1;
  align-self: center;
  object-fit: cover;
  animation: fadeInEffect 1s ease-in-out forwards;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  @keyframes fadeInEffect {
    0% {
      opacity: 0;
      scale: calc(0.8);
    }
    100% {
      opacity: 1;
      scale: calc(1);
    }
  }
`;
