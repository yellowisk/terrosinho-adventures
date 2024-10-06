import React, { useState } from "react";
import { MinigameInterface } from "../types/minigame";
import minigames from "../types/minidata";
import { CardGame } from "../components/minigame/CardGame";
import Game from "../components/minigame/Game";
import BackButton from "../components/BackButton";

const MinigameMenu: React.FC = () => {
    const [selectedMinigame, setSelectedMinigame] = useState<MinigameInterface | null>(null);

    const handleMinigameSelect = (minigame: MinigameInterface) => {
        setSelectedMinigame(minigame);
    };

    const handleBackToMenu = () => {
        setSelectedMinigame(null);
    };

    const handleResetGame = () => {
        setSelectedMinigame(null);
    };

    return (
        selectedMinigame ? (
            <>
                <Game {...selectedMinigame} onBack={handleBackToMenu} onReset={handleResetGame} />
            </>
        ) : (
            <div className="flex flex-col pt-16">
                <BackButton />
                <h1 className="text-5xl pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
                    Minigames
                </h1>
                <div className="flex flex-row justify-center my-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {minigames.map((minigame, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                                <CardGame
                                    text={(index + 1).toString()}
                                    image={minigame.imageAfter}
                                    onClick={() => handleMinigameSelect(minigame)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default MinigameMenu;
