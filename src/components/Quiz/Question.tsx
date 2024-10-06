import React, { useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { Question as QuestionType } from "../../types/quiz";
import Input from "./Input";
import AnswerFeedback from "./AnswerFeedback";
import FinishFeedback from "./FinishFeedback";

type QuestionProps = {
  quiz: QuestionType[];
};
type Data = {
  option: string;
};

const Question: React.FC<QuestionProps> = ({ quiz }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [selected, setSelected] = useState<{
    optionKey: string;
    value: string;
  }>({ optionKey: "", value: "" });
  let score = 0;

  const onSubmit = (data: Data) => {
    const selectedOption = data.option;
    if (selectedOption === "correct") {
      console.log("Correct answer!");
      score++;
      if (currentQuestion === quiz.length - 1) {
        console.log("Quiz completed!");
        setIsFinished(true);
        return;
      }
      setIsCorrect(true);
    } else {
      console.log("Incorrect answer!");
      setIsCorrect(false);
    }

    if (currentQuestion === quiz.length - 1) {
      console.log("Quiz completed!");
      setIsFinished(true);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    setSelected({ optionKey: "", value: "" });
    setTimeout(() => {
      setIsCorrect(null);
    }, 3000);
  };

  const onSelect = (value: "correct" | "incorrect", optionKey: string) => {
    setSelected({ optionKey, value });
    setValue("option", value); // Manually set the form field value
  };

  return (
    <>
      {isFinished ? (
        <FinishFeedback score={score} total={quiz.length} />
      ) : (
        <>
          <div className="p-8 ">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-slate-100 drop-shadow-lg mb-8">
              {quiz[currentQuestion].question}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {quiz[currentQuestion].options.map((option, index) => (
                <Input
                  key={index}
                  optionKey={`option-${index}`}
                  text={option.text}
                  value={option.correct ? "correct" : "incorrect"}
                  register={register}
                  type="radio"
                  checked={selected?.optionKey === `option-${index}`}
                  onClick={onSelect}
                />
              ))}
              <div className="flex justify-between">
                {selected.value ? (
                  <button
                    className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" // Modified button size
                    type="submit"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-10 bg-gray-500 text-white opacity-30 font-bold py-2 px-8 rounded" // Modified button size
                  >
                    Submit
                  </button>
                )}
                <span>
                  {currentQuestion + 1}/{quiz.length}
                </span>
              </div>
            </form>
          </div>
          <AnswerFeedback isCorrect={isCorrect} />
        </>
      )}
    </>
  );
};

export default Question;
