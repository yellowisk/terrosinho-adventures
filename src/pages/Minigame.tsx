import { ArrowLeft, Icon } from "lucide-react";
import { MinigameInterface } from "../types/minigame";
import { SolutionType } from "../types/minigame";
import Game from "../components/minigame/Game";
import { Droplet, Mountain, Wind } from "lucide-react";

const solutionsData = [
    { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
    { Icon: Droplet, text: 'Flood Solutions', color: 'green', type: SolutionType.flood },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
    { Icon: Droplet, text: 'Water outage Solutions', color: 'green', type: SolutionType.flood },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
    { Icon: Droplet, text: 'Water outage Solutions', color: 'green', type: SolutionType.flood },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
    { Icon: Droplet, text: 'Water outage Solutions', color: 'green', type: SolutionType.flood },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
    { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
    { Icon: Droplet, text: 'Water outage Solutions', color: 'green', type: SolutionType.flood },
    { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
]

const minigameExample: MinigameInterface = {
    type: SolutionType.wildfire,
    question: 'What is the best response to a wildfire?',
    options: [
        { SolutionOptions: solutionsData[0], correct: true },
        { SolutionOptions: solutionsData[1], correct: false },
        { SolutionOptions: solutionsData[2], correct: false },
        { SolutionOptions: solutionsData[3], correct: false },
        { SolutionOptions: solutionsData[4], correct: false },
        { SolutionOptions: solutionsData[5], correct: false },
        { SolutionOptions: solutionsData[6], correct: false },
        { SolutionOptions: solutionsData[7], correct: false },
        { SolutionOptions: solutionsData[8], correct: false },
        { SolutionOptions: solutionsData[9], correct: false },
        { SolutionOptions: solutionsData[10], correct: false },
        { SolutionOptions: solutionsData[11], correct: false },
        { SolutionOptions: solutionsData[12], correct: false },
        { SolutionOptions: solutionsData[13], correct: false },
        { SolutionOptions: solutionsData[14], correct: false },
        { SolutionOptions: solutionsData[15], correct: false },
        { SolutionOptions: solutionsData[16], correct: false }
    ],
    finalScore: 20,
  };
  

const Minigame: React.FC = () => {
  return (
    <Game {...minigameExample} />
  );
};
export default Minigame;
