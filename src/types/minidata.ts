import { SolutionType, MinigameInterface, solutionsData } from './minigame';
import floods1 from '../assets/minigames_imgs/floods1.png';
import floods2 from '../assets/minigames_imgs/floods2.png';
import landslides1 from '../assets/minigames_imgs/landslide1.jpg';
import landslides2 from '../assets/minigames_imgs/landslide2.jpg';
import hurricanes1 from '../assets/minigames_imgs/hurricane1.png';
import hurricanes2 from '../assets/minigames_imgs/hurricane2.png';
import wildfires1 from '../assets/minigames_imgs/wildfire1.png';
import wildfires2 from '../assets/minigames_imgs/wildfire2.png';
import lasVegas1 from '../assets/minigames_imgs/las_vegas1.png';
import lasVegas2 from '../assets/minigames_imgs/las_vegas2.png';

const minigame1: MinigameInterface = {
    title: 'Hurricanes have a profound impact on our planet, affecting countless people each time they occur. While their effects can be mitigated, they often are not.',
    type: SolutionType.wildfire,
    imageBefore: floods1,
    imageAfter: floods2,
    question: 'What steps can we take now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame2: MinigameInterface = {
    title: 'In densely populated cities, individuals often build homes in high-risk areas, such as hills and slopes, which can unfortunately lead to landslides.',
    type: SolutionType.landslide,
    imageBefore: landslides1,
    imageAfter: landslides2,
    question: 'What should we have done differently?',
    options: solutionsData,
    finalScore: 0,
};

const minigame3: MinigameInterface = {
    title: 'Unfortunately, many areas have already been impacted by landslides.',
    type: SolutionType.flood,
    imageBefore: landslides1,
    imageAfter: landslides2,
    question: 'What steps can we take now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame4: MinigameInterface = {
    title: 'Even with measures in place to mitigate their effects, hurricanes can still cause significant harm.',
    type: SolutionType.hurricane,
    imageBefore: hurricanes1,
    imageAfter: hurricanes2,
    question: 'What actions can we take now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame5: MinigameInterface = {
    title: 'In an increasingly warmer world, we are unfortunately witnessing a steady rise in wildfires, which are often not managed effectively.',
    type: SolutionType.badAirQuality,
    imageBefore: wildfires1,
    imageAfter: wildfires2,
    question: 'What could we have done differently?',
    options: solutionsData,
    finalScore: 0,
};

const minigame6: MinigameInterface = {
    title: 'Unfortunately, many wildfires have already occurred, and others may still be active.',
    type: SolutionType.wildfire,
    imageBefore: wildfires1,
    imageAfter: wildfires2,
    question: 'How can we respond effectively right now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame7: MinigameInterface = {
    title: 'Urban expansion and asphalt paving, which impermeabilize the soil, combined with inadequate urban planning, lead to severe consequences like flooding.',
    type: SolutionType.flood,
    imageBefore: floods1,
    imageAfter: floods2,
    question: 'What can we do now?',
    options: solutionsData,
    finalScore: 0
};

const minigame8: MinigameInterface = {
    title: 'In a world of expanding cities, burgeoning industries, and shrinking green spaces, we are facing unprecedented declines in air quality',
    type: SolutionType.badAirQuality,
    imageBefore: lasVegas1,
    imageAfter: lasVegas2,
    question: 'What could we have done differently?',
    options: solutionsData,
    finalScore: 0
};

const minigame9: MinigameInterface = {
    title: 'unfortunately, the air quality is in the worst state it has ever been, what can we do now?',
    type: SolutionType.badAirQuality,
    imageBefore: lasVegas1,
    imageAfter: lasVegas2,
    question: 'What can we do now?',
    options: solutionsData,
    finalScore: 0
};

const minigames = [
    minigame1, minigame2, minigame3,
    minigame4, minigame5, minigame6,
    minigame7, minigame8, minigame9
];

export default minigames;