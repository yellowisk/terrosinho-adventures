import { Cross, Flame, Home, Icon as LucideIcon, Sprout, Tornado } from 'lucide-react';
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
  { Icon: Home, text: 'Plan ahead for better housing for everyone', color: 'amber', type: [ SolutionType.flood, SolutionType.landslide ] },
  { Icon: Mountain, text: 'More green areas with deep-rooted plants to stabilize the soil', color: 'green', type: [ SolutionType.landslide ] },
  { Icon: Droplet, text: 'Increased research to identify areas at high risk for landslides', color: 'cyan', type: [ SolutionType.landslide ] },
  { Icon: Cross, text: 'Better training and investments for emergency services', color: 'red', type: [ SolutionType.flood, SolutionType.landslide, SolutionType.hurricane, SolutionType.wildfire ] },
  { Icon: Cross, text: 'Emergency evacuation protocol', color: 'red', type: [ SolutionType.flood, SolutionType.landslide, SolutionType.hurricane ] },
  { Icon: Cross, text: 'Better satellite coverage and surveillance', color: 'red', type: [ SolutionType.hurricane, SolutionType.wildfire ] },
  { Icon: Flame, text: 'Create firebreaks to disrupt the path of advancing flames', color: 'orange', type: [ SolutionType.wildfire ] },
  { Icon: Droplet, text: 'prioritize effective stormwater management to prevent water overflow', color: 'cyan', type: [ SolutionType.flood ] },
  { Icon: Sprout, text: 'maintain green areas', color: 'green', type: [ SolutionType.flood, SolutionType.badAirQuality ] },
  { Icon: Cross, text: 'Advocate for CO2 emission policy changes and implementation', color: 'red', type: [ SolutionType.badAirQuality ] },
  { Icon: Tornado, text: 'Invest in wind-resistant infrastructure', color: 'gray', type: [ SolutionType.hurricane ] },
  { Icon: Tornado, text: 'Create a hurricane response plan', color: 'gray', type: [ SolutionType.hurricane ] },
  { Icon: Wind, text: 'Invest in air quality monitoring systems', color: 'red', type: [ SolutionType.badAirQuality ] },
];


export type { MinigameInterface, SolutionOption };
export { SolutionType, solutionsData };