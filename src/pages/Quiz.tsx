import React from "react";
import { useForm } from "react-hook-form";
import BackButton from "../components/BackButton";
import { questions } from "../types/quiz";
import Question from "../components/Quiz/Question";

const Quiz: React.FC = () => {
  return (
    <div className="p-16">
      <BackButton />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
        Quizes
      </h1>
      <Question quiz={questions} />
    </div>
  );
};

export default Quiz;
