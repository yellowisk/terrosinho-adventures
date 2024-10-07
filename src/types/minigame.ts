import { Cross, Home, Icon as LucideIcon, Sprout, Tornado } from 'lucide-react';
import { Droplet, Mountain, Wind } from 'lucide-react';

type SolutionOption = {
    Icon: typeof LucideIcon | string;
    text: string;
    color: string;
    type: SolutionType[];
}

enum SolutionType {
  wildfire = 'wildfire',
  flood = 'flood',
  hurricane = 'hurricane',
  landslide = 'landslide',
  badAirQuality = 'badAirQuality',
}

interface MinigameInterface {
  title: string;
  type: SolutionType;
  imageBefore?: string;
  imageAfter?: string;
  question: string;
  options: SolutionOption[];
  finalScore: number;
}

const solutionsData = [
  { Icon: Home, text: 'Provide better housing for everyone', color: 'amber', type: [ SolutionType.flood, SolutionType.landslide ] },
  { Icon: Mountain, text: 'More green areas to stabilize the soil', color: 'green', type: [ SolutionType.landslide ] },
  { Icon: Cross, text: 'Emergency evacuation protocols', color: 'red', type: [ SolutionType.flood, SolutionType.landslide, SolutionType.hurricane ] },
  { Icon: Cross, text: 'Better satellite coverage and surveillance', color: 'red', type: [ SolutionType.hurricane, SolutionType.wildfire ] },
  { Icon: Droplet, text: 'Invest in water management systems', color: 'blue', type: [ SolutionType.flood ] },
  { Icon: Sprout, text: 'Maintain green areas', color: 'green', type: [ SolutionType.flood, SolutionType.badAirQuality ] },
  { Icon: Tornado, text: 'Invest in wind-resistant infrastructure', color: 'gray', type: [ SolutionType.hurricane ] },
  { Icon: Wind, text: 'Invest in air quality monitoring systems', color: 'gray', type: [ SolutionType.badAirQuality ] },
];


export type { MinigameInterface, SolutionOption };
export { SolutionType, solutionsData };