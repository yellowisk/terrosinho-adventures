import { Icon as LucideIcon } from 'lucide-react';
import { Droplet, Mountain, Wind } from 'lucide-react';

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
  type: SolutionType;
  question: string;
  options: Array<{
      SolutionOptions: SolutionOption;
      correct: boolean;
  }>;
  finalScore: number;
}

const solutionsData = [
  { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
  { Icon: Droplet, text: 'Flood Solutions', color: 'green', type: SolutionType.flood },
  { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
  { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
  { Icon: Droplet, text: 'Flood Solutions', color: 'green', type: SolutionType.flood },
  { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
  { Icon: Wind, text: 'Hurricane Solutions', color: 'blue', type: SolutionType.hurricane },
  { Icon: Droplet, text: 'Flood Solutions', color: 'green', type: SolutionType.flood },
  { Icon: Mountain, text: 'Earthquake Solutions', color: 'orange', type: SolutionType.earthquake },
];

export type { MinigameInterface, SolutionOption };
export { SolutionType };
export default solutionsData;
