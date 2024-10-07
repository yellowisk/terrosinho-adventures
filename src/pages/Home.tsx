import React, { useCallback, lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Button = lazy(() => import("../components/Button"));

import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    scale: calc(2.5);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    scale: calc(1);
    filter: blur(0px);
  }
`;

const StyledTitle = styled.h1`
  animation: ${fadeInAnimation} 0.5s ease-in;
  text-align: center;
  word-wrap: break-word;
  font-size: 6lvw;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleQuizClick = useCallback(() => {
    console.log("Quiz button clicked");
    navigate("/quiz");
  }, [navigate]);

  const handleSimulatorClick = useCallback(() => {
    console.log("Simulator button clicked");
    navigate("/simulator");
  }, [navigate]);

  const handleGamesClick = useCallback(() => {
    console.log("Games button clicked");
    navigate("/minigame");
  }, [navigate]);

  return (
    <div className="relative overflow-hidden flex  min-h-screen  flex-col justify-center items-center m:py-12">
      <StyledTitle className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
        WELCOME TO <br />
        THE ANTHROPOCENE
      </StyledTitle>
      <div className="flex flex-col w-[20%] justify-center items-center mt-10 gap-10">
        <Button
          className="text-5xl"
          onClick={handleSimulatorClick}
          text="Simulator"
          variant="primary"
        />

        <Button
          className="text-3xl "
          onClick={handleGamesClick}
          text="Minigame"
          variant="secondary"
        />
        <Button
          className="text-3xl "
          onClick={handleQuizClick}
          text="Quiz"
          variant="tertiary"
        />
      </div>
    </div>
  );
};
export default Home;
