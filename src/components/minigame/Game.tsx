import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import ImageContent from "../image";
import terroso from "../../assets/terroso_imgs/terroso_thinking.png";
import Dialog from "../dialog";
import { MinigameInterface, SolutionOption } from "../../types/minigame";
import { Card } from "../minigame/Card";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import ExplanationPopUp from "./ExplanationPopUp";
import { ChevronContainer } from "../Story/styles";
import BackButton from "../BackButton";
import { AlignJustify } from "lucide-react";

interface GameProps extends MinigameInterface {
    onBack: () => void;  
    onReset: () => void; 
}

const Game: React.FC<GameProps> = ({ type, imageBefore, imageAfter, question, title, options, finalScore, onBack, onReset }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [sliderValue, setSliderValue] = useState(100);
    const [isDragging, setIsDragging] = useState(false);
    const [optionsSelected, setOptionsSelected] = useState<SolutionOption[]>([]);
    const [showExplanation, setShowExplanation] = useState(false);
    const [maxScorePossible, setMaxScorePossible] = useState(0);
    const [correctOptions, setCorrectOptions] = useState<SolutionOption[]>([]);
    const [incorrectOptions, setIncorrectOptions] = useState<SolutionOption[]>([]);

    useEffect(() => {
        const scoreCount = options.reduce((count, option) => {
            return count + (option.type.includes(type) ? 1 : 0);
        }, 0);
        setMaxScorePossible(scoreCount);
        setSliderValue(50);
    }, [options, type]);

    useEffect(() => {
        const newCorrectOptions = optionsSelected.filter(option => option.type.includes(type));
        const newIncorrectOptions = optionsSelected.filter(option => !option.type.includes(type));
        
        setCorrectOptions(newCorrectOptions);
        setIncorrectOptions(newIncorrectOptions);
        
        console.log("Correct Options:", newCorrectOptions);
        console.log("Incorrect Options:", newIncorrectOptions);
    }, [optionsSelected, type]);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
    };

    const computePoints = (sol: SolutionOption) => {
        if (optionsSelected.includes(sol)) {
            setOptionsSelected(optionsSelected.filter((option) => option !== sol));
        } else {
            setOptionsSelected([...optionsSelected, sol]);
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
        setShowExplanation(true);
    };

    const closeExplanationPopUp = () => {
        setShowExplanation(false);
    };

    return (
        <div className="h-screen grid lg:grid-rows-[15%_60%_20%] grid-rows-[20%_55%_25%]">
            <div className="flex flex-row w-full items-center p-2">
                <div className="mt-8">
                    <BackButton onClick={onBack} />
                </div>
                <div className="flex flex-row justify-center grow">
                    <div className="p-3 sm:text-2xl sm:px-2  mx-3 sm:font-bold sm:rounded-3xl text-white text-lg rounded-xl font-medium :">
                        {title}
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div
                    className="relative w-full overflow-hidden select-none"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <img src={imageBefore} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
                    <div
                        className="absolute top-0 left-0 h-full overflow-hidden w-full"
                        style={{ clipPath: `rect(0 ${sliderValue}% 100% 0)` }}
                    >
                        <img src={imageAfter} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute flex-col justify-center items-start bg-gray-400">
                            <div className="text-white text-2xl font-bold p-2">Before</div>
                        </div>
                    </div>
                    <div
                        className="absolute top-0 right-20 h-full bg-gray-400"
                        style={{ left: `${sliderValue}%`, width: "5px", cursor: "ew-resize" }}
                        onMouseDown={handleMouseDown}
                    >
                        <AlignJustify width='16px' className="mt-[28vh] transform -translate-x-1/3 text-center items-center mb-6 bg-gray-400 rounded-full" />
                    </div>
                    <div className="absolute right-0 flex flex-col items-end h-full me-4 pb-6">
                        <div className="flex flex-col h-1/2 justify-end lg:-translate-y-0 -translate-y-3 py-5 items-center">
                            <Dialog text={`${question} There are ${maxScorePossible} correct answers!`} />
                        </div>
                        <div className="flex flex-col h-1/2 w-full justify-center items-center lg:translate-y-3 -translate-y-0">
                            <ImageContent src={terroso} alt="terroso" />
                        </div>
                        { correctOptions.length == maxScorePossible ? (
                            <div className="flex flex-row w-full mb-1 justify-center">
                                <Button text="Submit" onClick={openExplanationPopUp} variant='primary' />
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center overflow-hidden">
                <div className="flex flex-row justify-center">
                    <span>
                        <span className={correctOptions.length > 0 ? "text-green-500" : "text-white"}>
                            {correctOptions.length}
                        </span> 
                        {" "} out of {maxScorePossible} correct solutions found.
                    </span>
                </div>
                <div className="flex items-center overflow-hidden">
                    <ChevronContainer disabled={false} className="ms-2">
                        <button onClick={scrollLeft} className="text-white">
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                    </ChevronContainer>
                    <div className="overflow-hidden flex flex-row" ref={scrollRef}>
                        <div className="flex flex-row space-x-4 p-2">
                            {options.map((option, index) => (
                                <Card
                                    key={index}
                                    text={option.text}
                                    icon={option.Icon as LucideIcon}
                                    selected={isOptionSelected(option)}
                                    onClick={() => computePoints(option)}
                                />
                            ))}
                        </div>
                    </div>
                    <ChevronContainer disabled={false} className="me-2">
                        <button onClick={scrollRight} className="text-white">
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </ChevronContainer>
                </div>
            </div>

            <div className="flex flex-row justify-center mx-20">
                {showExplanation && (
                    <ExplanationPopUp
                        type={type}
                        options={optionsSelected}
                        onReset={closeExplanationPopUp}
                        onBack={onBack}
                        maxScorePossible={maxScorePossible}
                    />
                )}
            </div>
        </div>
    );
};

export default Game;
