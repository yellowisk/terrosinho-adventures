import { SolutionOption, SolutionType } from "../../types/minigame";
import terrosoExplain from "../../assets/terroso_imgs/terroso_explain.png";
import terrosoExplorer from "../../assets/terroso_imgs/terroso_explorer.png";

import Button from "../Button";

interface ExplanationProps {
    type: SolutionType;
    options: SolutionOption[];
    onReset: () => void;
    onBack: () => void;
    maxScorePossible: number;
}

const ExplanationPopUp: React.FC<ExplanationProps> = ({ type, options, onReset, onBack, maxScorePossible }) => {
    const incorrectOptions: SolutionOption[] = [];
    const correctOptions: SolutionOption[] = [];

    options.forEach((option) => {
        const isCorrectOption = option.type.includes(type);
        if (!isCorrectOption) {
            incorrectOptions.push(option);
        } else {
            correctOptions.push(option);
        }
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-700/80 rounded-lg p-6 max-w-lg w-full">
                <div className="text-2xl font-bold text-white text-center">
                    {correctOptions.length < maxScorePossible ? "Try Again!" : "Congratulations!"}
                </div>

                {correctOptions.length < maxScorePossible ? (
                    <div className="flex flex-row justify-center gap-2 mt-4">
                        <div className="flex flex-col justify-center max-h-60 overflow-y-auto">
                            { incorrectOptions.length > 0 ? (
                                <div className="text-white text-lg mb-4">
                                    You have found {correctOptions.length} out of {maxScorePossible} solutions.
                                </div>
                            ) : (
                                <div className="text-white text-lg mb-4">
                                    You have found all {maxScorePossible} solutions. Great job!
                                </div>
                            )}
                            
                        </div>
                        <div className="flex flex-col justify-center w-full">
                            <img src={terrosoExplain} alt="terroso" className="w-auto h-48 scale-x-[-1]" />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <img src={terrosoExplorer} alt="terroso" className="w-44 h-52" />
                        { maxScorePossible > correctOptions.length ? (
                            <div className="text-white text-lg mt-4">
                                You have found {correctOptions.length} out of {maxScorePossible} solutions. Keep exploring!
                            </div>
                        ) : (
                            <div className="text-white text-lg mt-4">
                                You have found all {maxScorePossible} solutions. Great job!
                            </div>
                        )}
                    </div>
                )}

                <div className="flex flex-row justify-center">
                    {incorrectOptions.length > 0 || maxScorePossible > correctOptions.length ? (
                        <Button text="Play Again" onClick={onReset} variant='primary'/>
                    ) : (
                        <Button text="Continue" onClick={onBack} variant='primary'/>

                    )}
                </div>
            </div>
        </div>
    );
};

export default ExplanationPopUp;
