import terrosoExplorer from "../../assets/terroso_imgs/terroso_explorer.png";
import terrosoSad from "../../assets/terroso_imgs/terroso_sad.png";
import React from "react";
import styled from "styled-components";
import Confetti from "react-confetti";

const FeedbackContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  text-align: center;
  animation: fadeOut 1s forwards;

  @keyframes fadeOut {
    0% {
      opacity: 1;
      background-color: transparent;
    }
    10% {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
    70% {
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 1;
    }
    100% {
      opacity: 0;
      background-color: transparent;
    }
  }
`;

const FeedbackImage = styled.img`
  /* Add any additional styles if needed */
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FeedbackTitle = styled.h1`
  /* Add any additional styles if needed */
`;

type AnswerFeedbackProps = {
  isCorrect: boolean | null;
};

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ isCorrect }) => {
  if (isCorrect == null) return null;
  return (
    <FeedbackContainer className="flex flex-col items-center text-center justify-center">
      {isCorrect ? (
        <div className="p-16 flex flex-col items-center text-center justify-center">
          <FeedbackImage src={terrosoExplorer} alt="Feedback Image" />
          <FeedbackTitle className="text-green-500 text-2xl font-bold">
            CORRECT ANSWER!
          </FeedbackTitle>
        </div>
      ) : (
        <div className="p-16 flex flex-col items-center text-center justify-center">
          <FeedbackImage src={terrosoSad} alt="Feedback Image" />
          <FeedbackTitle className="text-red-500 text-2xl font-bold">
            WRONG ANSWER!
          </FeedbackTitle>
        </div>
      )}
      {isCorrect && <Confetti />}
    </FeedbackContainer>
  );
};

export default AnswerFeedback;
