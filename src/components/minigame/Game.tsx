import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import ImageContent from "../image";
import terroso from "../../assets/terroso_imgs/terroso_thinking.png";
import Dialog from "../dialog";
import { MinigameInterface, SolutionOption } from "../../types/minigame";
import { Card } from "../minigame/Card";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import ExplanationPopUp from "./ExplanationPopUp";


interface GameProps extends MinigameInterface {
    onBack: () => void;  
    onReset: () => void; 
}

const Game: React.FC<GameProps> = ({ type, imageBefore, imageAfter, question, options, finalScore, onBack, onReset }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [sliderValue, setSliderValue] = useState(100);
    const [isDragging, setIsDragging] = useState(false);
    const [optionsSelected, setOptionsSelected] = useState<SolutionOption[]>([]); // Store selected options
    const [showExplanation, setShowExplanation] = useState(false); // Control popup visibility
    
    useEffect(() => {
        setSliderValue(50);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const computePoints = (sol: SolutionOption) => {
        if (optionsSelected.includes(sol)) {
          setOptionsSelected(prevSelected => prevSelected.filter(option => option !== sol));
      } else {
          setOptionsSelected(prevSelected => [...prevSelected, sol]);
      }
    };

    const isOptionSelected = (sol: SolutionOption) => {
      return optionsSelected.includes(sol);
  };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            const container = e.currentTarget.getBoundingClientRect();
            const newSliderValue = ((e.clientX - container.left) / container.width) * 100;
            setSliderValue(Math.max(0, Math.min(newSliderValue, 100)));
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const openExplanationPopUp = () => {
        setShowExplanation(true); // Show the Explanation popup when "Submit" is clicked
    };

    return (
        <div className="h-screen grid grid-rows-[10%_65%_25%]">
            <div className="flex flex-row w-full items-center">
                <div className="flex flex-row justify-start">
                    <ArrowLeft className="text-red-600 cursor-pointer" onClick={onBack} />
                </div>
                <div className="flex flex-row justify-center grow">
                    <div className="text-2xl px-2 mx-3 font-bold rounded-3xl bg-gradient-to-tr from-fuchsia-500 to-fuchsia-800 text-white">
                        {question}
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div
                    className="relative w-full bg-red-500 overflow-hidden select-none"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <img src={imageBefore} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
                    <div
                        className="absolute top-0 left-0 h-full overflow-hidden"
                        style={{ width: `${sliderValue}%` }}
                    >
                        <img src={imageAfter} alt="After" className="w-full h-full object-cover" />
                    </div>
                    <div
                        className="absolute top-0 right-20 h-full bg-fuchsia-500"
                        style={{ left: `${sliderValue}%`, width: "5px", cursor: "ew-resize" }}
                        onMouseDown={handleMouseDown}
                    />
                    <div className="absolute right-0 flex flex-col items-end h-full">
                        <div className="flex flex-col h-1/2 justify-end py-5 items-center">
                            <Dialog text="What can we do to help?" />
                        </div>
                        <div className="flex flex-col h-1/2 w-full justify-center items-center">
                            <ImageContent src={terroso} alt="terroso" />
                        </div>
                        <div className="flex flex-row w-full justify-center">
                          <Button text="Submit" onClick={openExplanationPopUp} variant='secondary'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center overflow-hidden">
                <button onClick={scrollLeft} className="text-red-600 p-2">
                    <ArrowLeft className="h-6 w-6" />
                </button>
                <div className="overflow-hidden flex flex-row" ref={scrollRef}>
                    <div className="flex flex-row space-x-4 p-2">
                        {options.map((option, index) => (
                            <Card
                                key={index}
                                text={option.SolutionOptions.text}
                                icon={option.SolutionOptions.Icon as LucideIcon}
                                selected={isOptionSelected(option.SolutionOptions)} // Pass selected status
                                onClick={() => computePoints(option.SolutionOptions)}
                            />
                        ))}
                    </div>
                </div>
                <button onClick={scrollRight} className="text-red-600 p-2">
                    <ArrowRight className="h-6 w-6" />
                </button>
            </div>

            {/* Show the ExplanationPopUp if the user clicks "Submit" */}
            <div className="flex flex-row justify-center mx-20">
              {showExplanation && <ExplanationPopUp type={type} options={optionsSelected} 
              onReset={onReset} onBack={onBack} />}
            </div>
        </div>
    );
};

export default Game;
