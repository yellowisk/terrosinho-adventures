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

    const formatTypes = (types: SolutionType[]) => {
        if (types.length === 1) {
            return types[0];
        } else if (types.length === 2) {
            return `${types[0]} and ${types[1]}`;
        } else {
            const allButLast = types.slice(0, -1).join(", ");
            const last = types[types.length - 1];
            return `${allButLast}, and ${last}`;
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-700/80 rounded-lg p-6 max-w-lg w-full">
                <div className="text-2xl font-bold text-white text-center">
                    {incorrectOptions.length > 0 ? "Explanation" : "Congratulations!"}
                </div>

                {incorrectOptions.length > 0 ? (
                    <div className="flex flex-row justify-center gap-2 mt-4">
                        <div className="flex flex-col justify-center max-h-60 overflow-y-auto">  {/* Scrollable Container */}
                            {incorrectOptions.map((option, index) => (
                                <div key={index} className="flex flex-col items-center mb-4">
                                    <div className="flex flex-row justify-between gap-2">
                                        <option.Icon className="w-8 h-8 text-white" />
                                        <div className="text-xl text-white font-bold">
                                            {option.text} would fit better in a {formatTypes(option.type)}.
                                        </div>
                                    </div>
                                </div>
                            ))}
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
