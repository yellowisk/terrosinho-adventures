import { MinigameInterface } from "../types/minigame";
import { SolutionType } from "../types/minigame";
import Game from "../components/minigame/Game";
import { Droplet, Flame, Mountain, Wind } from "lucide-react";
import lasVegasBefore from "../assets/minigame_imgs/las_vegas_before.png";
import lasVegasAfter from "../assets/minigame_imgs/las_vegas_after.png";

const solutionsData = [
    { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
    { Icon: Droplet, text: 'Flood Solutions', color: 'green', type: SolutionType.flood },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Flame, text: 'Wildfire Solutions', color: 'red', type: SolutionType.wildfire },
]

const minigameExample: MinigameInterface = {
    type: SolutionType.wildfire,
    imageBefore: lasVegasBefore,
    imageAfter: lasVegasAfter,
    question: 'What is the best response to a wildfire?',
    options: [
        { SolutionOptions: solutionsData[0] },
        { SolutionOptions: solutionsData[1] },
        { SolutionOptions: solutionsData[2] },
        { SolutionOptions: solutionsData[3] },
    ],
    finalScore: 0,
  };
  

const Minigame: React.FC = () => {
  return (
    <Game {...minigameExample} />
  );
};
export default Minigame;
