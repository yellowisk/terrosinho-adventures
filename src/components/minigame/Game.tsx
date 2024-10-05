import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import ImageContent from "../image";
import terroso from "../../assets/terroso_imgs/terroso_thinking.png";
import Dialog from "../dialog";
import { MinigameInterface } from "../../types/minigame";
import Card from "./Card";
import { useRef } from "react";

const Game: React.FC<MinigameInterface> = ({ type, question, options, finalScore }) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the value to control scroll distance
        }
      };
    
      // Function to scroll right
      const scrollRight = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the value to control scroll distance
        }
      };

  return (
    <div className="h-screen grid grid-rows-[5%_10%_60%_25%]">
      <div className="flex flex-row justify-start">
        <ArrowLeft className="text-red-600" />
      </div>
      <div className="flex flex-row bg-green-500 justify-center items-center">
        <div className="text-2xl px-2 mx-3 font-bold rounded-3xl bg-fuchsia-500">{question}</div>
      </div>
      <div className="flex flex-row">
        <div className="w-2/3 bg-red-500"></div>
        <div className="w-1/3 bg-orange-400">
          <div className="flex flex-col h-1/2 justify-end py-5 items-center">
            <Dialog text="What can we do to help?" />
          </div>
          <div className="flex flex-col h-1/2 justify-end items-center">
            <ImageContent src={terroso} alt="terroso" />
          </div>
        </div>
      </div>
      <div className="bg-cyan-400 flex items-center overflow-hidden">
        <button onClick={scrollLeft} className="text-red-600 p-2">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="overflow-hidden flex flex-row" ref={scrollRef}>
          <div className="flex flex-row space-x-4 p-2">
            {options.map((option, index) => (
              <Card key={index} text={option.SolutionOptions.text} icon={option.SolutionOptions.Icon as LucideIcon} />
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="text-red-600 p-2">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Game;
