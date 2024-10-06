import { SolutionOption, SolutionType } from "../../types/minigame";
import terrosoExplain from "../../assets/terroso_imgs/terroso_explain.png";
import terrosoExplorer from "../../assets/terroso_imgs/terroso_explorer.png";

interface ExplanationProps {
    type: SolutionType;
    options: SolutionOption[];
    onReset: () => void;
    onBack: () => void;
}

const ExplanationPopUp: React.FC<ExplanationProps> = ({ type, options, onReset, onBack }) => {
    const incorrectOptions = options.filter(option => option.type !== type);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gradient-to-br from-teal-200 via-teal-300 to-teal-500 rounded-lg p-6 max-w-lg w-full">
                <div className="text-2xl font-bold text-black text-center">
                    {incorrectOptions.length > 0 ? "Explanation" : "Congratulations!"}
                </div>

                {incorrectOptions.length > 0 ? (
                    <div className="flex flex-row justify-center gap-2 mt-4">
                        <div className="flex flex-col justify-center">
                            {incorrectOptions.map((option, index) => (
                                <div key={index} className="flex flex-col items-center mb-4">
                                    <div className="flex flex-row justify-between gap-2">
                                        {/* Display the icon of the incorrect option */}
                                        <option.Icon className="w-8 h-8 text-black" />
                                        <div className="text-xl text-black font-bold">
                                            {option.text} would fit better in a {option.type} situation
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center w-full">
                            <img src={terrosoExplain} alt="terroso" className="w-48 h-48 scale-x-[-1]" />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <img src={terrosoExplorer} alt="terroso" className="w-44 h-52" />
                    </div>
                )}

                <div className="flex flex-row justify-center">
                    {incorrectOptions.length > 0 ? (
                        <button
                            className="mt-6 px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-800"
                            onClick={onReset}  // Reset game if they play again
                        >
                            Play Again
                        </button>
                    ) : (
                        <button
                            className="mt-6 px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-800"
                            onClick={onBack}  // Go back to the menu if they continue
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExplanationPopUp;
