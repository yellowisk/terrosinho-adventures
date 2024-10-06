import { Flame, Icon as LucideIcon } from 'lucide-react';
import { Droplet, Mountain, Wind } from 'lucide-react';
import lasVegasBefore from "../assets/minigame_imgs/las_vegas_before.png";
import lasVegasAfter from "../assets/minigame_imgs/las_vegas_after.png";

type SolutionOption = {
    Icon: typeof LucideIcon | string;
    text: string;
    color?: string;
    type: SolutionType;
}

enum SolutionType {
  wildfire = 'wildfire',
  flood = 'flood',
  earthquake = 'earthquake',
  hurricane = 'hurricane',
  landslide = 'landslide',
}

interface MinigameInterface {
  title: string;
  type: SolutionType;
  imageBefore: string;
  imageAfter: string;
  question: string;
  options: Array<{
      SolutionOptions: SolutionOption;
  }>;
  finalScore: number;
}

const solutionsData = [
  { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
  { Icon: Droplet, text: 'Flood Solutions', color: 'green', type: SolutionType.flood },
  { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
  { Icon: Flame, text: 'Wildfire Solutions', color: 'red', type: SolutionType.wildfire },

];

const minigameExample: MinigameInterface = {
  title: 'Hurricanes have a profound impact on our planet, affecting countless people each time they occur. While their effects can be mitigated, they often are not.',
  type: SolutionType.wildfire,
  imageBefore: lasVegasBefore,
  imageAfter: lasVegasAfter,
  question: 'What could we have done differently?',
  options: [
      { SolutionOptions: solutionsData[0] },
      { SolutionOptions: solutionsData[1] },
      { SolutionOptions: solutionsData[2] },
      { SolutionOptions: solutionsData[3] },
  ],
  finalScore: 0,
};

const minigameExample2: MinigameInterface = {
  title: 'In densely populated cities, individuals often build homes in high-risk areas, such as hills and slopes, which can unfortunately lead to landslides.',
  type: SolutionType.flood,
  imageBefore: lasVegasBefore,
  imageAfter: lasVegasAfter,
  question: 'What could we have done differently?',
  options: [
      { SolutionOptions: solutionsData[0] },
      { SolutionOptions: solutionsData[1] },
      { SolutionOptions: solutionsData[2] },
      { SolutionOptions: solutionsData[3] },
  ],
  finalScore: 0,
};

const minigameExample3: MinigameInterface = {
  title: 'However, even with measures in place to mitigate their effects, hurricanes can still cause significant harm.',
  type: SolutionType.earthquake,
  imageBefore: lasVegasBefore,
  imageAfter: lasVegasAfter,
  question: 'What actions can we take now?',
  options: [
      { SolutionOptions: solutionsData[0] },
      { SolutionOptions: solutionsData[1] },
      { SolutionOptions: solutionsData[2] },
      { SolutionOptions: solutionsData[3] },
  ],
  finalScore: 0,
};

const minigameExample4: MinigameInterface = {
  title: 'Hurricane',
  type: SolutionType.hurricane,
  imageBefore: lasVegasBefore,
  imageAfter: lasVegasAfter,
  question: 'What is the best response to a hurricane?',
  options: [
      { SolutionOptions: solutionsData[0] },
      { SolutionOptions: solutionsData[1] },
      { SolutionOptions: solutionsData[2] },
      { SolutionOptions: solutionsData[3] },
  ],
  finalScore: 0,
};

const minigameExample5: MinigameInterface = {
  title: 'Landslide',
  type: SolutionType.landslide,
  imageBefore: lasVegasBefore,
  imageAfter: lasVegasAfter,
  question: 'What is the best response to a landslide?',
  options: [
      { SolutionOptions: solutionsData[0] },
      { SolutionOptions: solutionsData[1] },
      { SolutionOptions: solutionsData[2] },
      { SolutionOptions: solutionsData[3] },
  ],
  finalScore: 0,
};

const minigameExample6: MinigameInterface = {
  title: 'Tornado',
  type: SolutionType.hurricane,
  imageBefore: lasVegasBefore,
  imageAfter: lasVegasAfter,
  question: 'What is the best response to a tornado?',
  options: [
      { SolutionOptions: solutionsData[0] },
      { SolutionOptions: solutionsData[1] },
      { SolutionOptions: solutionsData[2] },
      { SolutionOptions: solutionsData[3] },
  ],
  finalScore: 0,
};

export type { MinigameInterface, SolutionOption };
export { SolutionType };
export default solutionsData;
export { minigameExample, minigameExample2, minigameExample3, minigameExample4, minigameExample5, minigameExample6 };
