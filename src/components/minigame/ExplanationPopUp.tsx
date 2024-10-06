import { SolutionOption, SolutionType } from "../../types/minigame";
import terrosoExplain from "../../assets/terroso_imgs/terroso_explain.png";
import terrosoExplorer from "../../assets/terroso_imgs/terroso_explorer.png";

import Button from "../Button";

interface ExplanationProps {
    type: SolutionType;
    options: SolutionOption[];
    onReset: () => void;
    onBack: () => void;
}

const ExplanationPopUp: React.FC<ExplanationProps> = ({ type, options, onReset, onBack }) => {
    const incorrectOptions: SolutionOption[] = [];
    console.log(options);

    options.forEach((option) => {
        const isCorrectOption = option.type.includes(type);
        if (!isCorrectOption) {
            console.log("Incorrect option: ", option);
            incorrectOptions.push(option);
        }
    });

    const formatTypes = (types: SolutionType[]) => {
        if (types.length === 1) {
            return types[0]; // Single type, no need for "and"
        } else if (types.length === 2) {
            return `${types[0]} and ${types[1]}`; // Two types, use "and" without commas
        } else {
            const allButLast = types.slice(0, -1).join(", "); // Join all but last with commas
            const last = types[types.length - 1]; // Last type
            return `${allButLast}, and ${last}`; // Use Oxford comma and "and"
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
                    </div>
                )}

                <div className="flex flex-row justify-center">
                    {incorrectOptions.length > 0 ? (
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
