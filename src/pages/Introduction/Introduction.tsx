import React, { useRef, useState } from "react";
import { EarthSimulation } from "../Simulation";
import { useNavigate } from "react-router-dom";
import { GlobeMethods } from "react-globe.gl";

import * as S from "./Introduction.styles";
import { useAudioContext } from "../../context/AudioContext";
import Button from "../../components/Button";

const Introduction = () => {
  const { play } = useAudioContext();
  const [step, setStep] = useState<number>(-1);
  const navigate = useNavigate();
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const backgroundUrl = "";

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step step={1} />;
      case 11:
        return <Step11 step={step} />;
      case 12:
        return <Step12 step={step} />;
      default:
        return <Step step={step} />;
        return null;
    }
  };

  const handleClick = () => {
    if (step < 12) {
      setStep((prev) => prev + 1);
    } else {
      navigate("/Home");
    }
  };

  const NextStepButton: React.FC = () => {
    return (
      <button
        className="text-2xl bg-gray-500 hover:bg-gray-7000 text-white font-bold py-2 px-4 rounded m-5 align-bottom "
        onClick={handleClick}
      >
        NEXT
      </button>
    );
  };

  const handleInicialQuestionButtonClick = () => {
    setStep(1);
    play();
  };

  const InicialQuestion: React.FC = () => {
    return (
      <S.Container>
        <h1 className="text-6xl font-bold mb-16 text-white animate-pulse">
          ✨💻 CODING IN LUA 🌙✨
        </h1>
        <div className="border border-gray-500 rounded-lg p-8 mb-8">
          <div className="text-white text-center text-2xl">
            <p>
              This app was developed by 6 students from Brazil in a 48-hour
              hackathon!
            </p>
            <br />
            <p>
              Everything in the world is interconnected, so we wanted to design
              an accessible and interactive way to show how Earth is dynamic.
              “Welcome to the Anthropocene” is a visual and immersive
              multi-platform experience that provides a 3D journey through
              geological eras and explores the climate changes caused by humans.
              We also developed quizzes and a disaster management minigame to
              engage the user to reflect on today’s world situation and the
              future challenges of living on this dynamic planet.
            </p>
            <br />

            <p>
              Join us on this journey to raise awareness and make a positive
              impact!
            </p>
          </div>
        </div>
        <S.Legend align="center">Are you ready for the journey?</S.Legend>
        <Button
          className="text-5xl"
          onClick={handleInicialQuestionButtonClick}
          text="START"
          variant="primary"
        />
      </S.Container>
    );
  };

  const legends: { [key: number]: string } = {
    [1]: "Welcome to the Anthropocene.",
    [2]: "A lot has happened since you started gaining more power. Don't worry, though, I’ll be alright… this is a part of me. I will heal, as I always do.",
    [3]: "Speaking of which, have you noticed how I am just like you?",
    [4]: "I breathe",
    [5]: "I talk",
    [6]: "I evolve",
    [7]: "I get sick",
    [8]: "And I heal, as I always do",
    [9]: "The difference is that I am not alive, so I am more resilient. Life is more fragile, and thus may not heal with me",
    [10]: "You seem to be alive… just like the birds, the trees and the bacteria. This means that you are all vulnerable… to this",
    [11]: "But you are special. You seem to be able to understand what is going on, and its impacts on everything and everyone. You have power over some of these situations, and might be able to create an impact on them. For better… or for worse",
    [12]: "Let’s take a time tour through some of the toughest times life has gone through. We can learn some things together and try to understand the challenges life is currently facing. Walk with me…",
  };

  const images: { [key: number]: string } = {
    [4]: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVmenN0NXEyOWw0cTNvazFlYm16cjMzZzhtNXBmMXRpenpubHlqbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1bTEQnjArFBy8/giphy.webp",
    [5]: "https://media4.giphy.com/media/v1.[Y2lkPTc5MGI3NjExZGVyMjA5aDBpZnA1NWU0OHl3encwYjBrYTQ2MHhrOWwxNG13YmJucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WXgQucWm9SUHm/giphy.webp",
    [6]: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW9leXRibXc3MHNxb2txZnZpenJ1b3hzOHc2Y25uZjhlcHBqN3R4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fyh2GnAMYtK3HTlklo/giphy.webp",
    [7]: "https://sm.mashable.com/mashable_in/seo/4/43243/43243_jsgn.gif",
    [8]: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDAwYWZnbWl4NTZiazlzOGx1eDR2bDc2cjhnMXl2ODA5M3Jod3lsZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/txCo7WXCwZpmM/giphy.webp",
  };

  type StepProp = {
    step: number;
  };
  const Step: React.FC<StepProp> = ({ step }) => {
    return (
      <S.Slide step={step}>
        <S.Legend align="top">{legends[step]}</S.Legend>
        {step > 3 && step < 9 && <S.Gif src={images[step]} />}
        <NextStepButton />
      </S.Slide>
    );
  };

  const Step11: React.FC<StepProp> = ({ step }) => {
    return (
      <S.Slide step={step}>
        <S.Legend align="center">{legends[step]}</S.Legend>
        <div className="h-20"></div>
        <NextStepButton />
      </S.Slide>
    );
  };

  const Step12: React.FC<StepProp> = ({ step }) => {
    return (
      <S.Slide step={step}>
        <S.Legend align="center">{legends[step]}</S.Legend>
        <div className="h-20"></div>
        <NextStepButton />
      </S.Slide>
    );
  };

  return (
    <>
      {step === -1 ? (
        <InicialQuestion />
      ) : (
        <div>
          <div className="absolute z-10 overflow-y-hidden">{renderStep()}</div>
          <EarthSimulation
            imageUrl={"./nowadays.png"}
            globeRef={globeRef}
            backgroundUrl={backgroundUrl}
            pins={[]}
            connections={[]}
          />
        </div>
      )}
    </>
  );
};

export default Introduction;
