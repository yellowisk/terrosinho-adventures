import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { questions1, questions2 } from "../types/quiz";
import Question from "../components/Quiz/Question";
import { PaperclipIcon } from "lucide-react";

const Quiz: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(0);
  return (
    <div className="p-16">
      <BackButton />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
        Quizes
      </h1>
      {selectedQuiz == 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">
            Select a Quiz to start!
          </h3>
          <div className="flex justify-center gap-10">
            <div
              className="bg-slate-100 bg-opacity-20 hover:bg-opacity-35 w-1/2 p-4 rounded cursor-pointer"
              onClick={() => setSelectedQuiz(1)}
            >
              <h1 className="text-2xl text-center">QUIZ 1</h1>
            </div>
            <div
              className="bg-slate-100 bg-opacity-20 hover:bg-opacity-35 w-1/2 p-4 rounded cursor-pointer"
              onClick={() => setSelectedQuiz(2)}
            >
              <h1 className="text-2xl text-center">QUIZ 2</h1>
            </div>
          </div>
        </>
      )}
      {selectedQuiz == 1 && <Question quiz={questions1} />}
      {selectedQuiz == 2 && <Question quiz={questions2} />}
    </div>
  );
};

export default Quiz;
