import { SolutionType, MinigameInterface, solutionsData } from './minigame';

const minigame1: MinigameInterface = {
    title: 'Hurricanes have a profound impact on our planet, affecting countless people each time they occur. While their effects can be mitigated, they often are not.',
    type: SolutionType.wildfire,
    imageBefore: 'https://images.unsplash.com/photo-1606780840483-4b3b3e3b3b3b',
    question: 'What steps can we take now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame2: MinigameInterface = {
    title: 'In densely populated cities, individuals often build homes in high-risk areas, such as hills and slopes, which can unfortunately lead to landslides.',
    type: SolutionType.landslide,
    question: 'What should we have done differently?',
    options: solutionsData,
    finalScore: 0,
};

const minigame3: MinigameInterface = {
    title: 'Unfortunately, many areas have already been impacted by landslides.',
    type: SolutionType.flood,
    question: 'What steps can we take now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame4: MinigameInterface = {
    title: 'Even with measures in place to mitigate their effects, hurricanes can still cause significant harm. What actions can we take now?',
    type: SolutionType.hurricane,
    question: 'What actions can we take now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame5: MinigameInterface = {
    title: 'In an increasingly warmer world, we are unfortunately witnessing a steady rise in wildfires, which are often not managed effectively.',
    type: SolutionType.badAirQuality,
    question: 'What could we have done differently?',
    options: solutionsData,
    finalScore: 0,
};

const minigame6: MinigameInterface = {
    title: 'Unfortunately, many wildfires have already occurred, and others may still be active.',
    type: SolutionType.wildfire,
    question: 'How can we respond effectively right now?',
    options: solutionsData,
    finalScore: 0,
};

const minigame7: MinigameInterface = {
    title: 'Urban expansion and asphalt paving, which impermeabilize the soil, combined with inadequate urban planning, lead to severe consequences like flooding.',
    type: SolutionType.flood,
    question: 'What can we do now?',
    options: solutionsData,
    finalScore: 0
};

const minigame8: MinigameInterface = {
    title: 'In a world of expanding cities, burgeoning industries, and shrinking green spaces, we are facing unprecedented declines in air quality',
    type: SolutionType.badAirQuality,
    question: 'What could we have done differently?',
    options: solutionsData,
    finalScore: 0
};

const minigame9: MinigameInterface = {
    title: 'unfortunately, the air quality is in the worst state it has ever been, what can we do now?',
    type: SolutionType.badAirQuality,
    question: 'What can we do now?',
    options: solutionsData,
    finalScore: 0
};

export { minigame1, minigame2, minigame3, minigame4, minigame5, minigame6, minigame7, minigame8, minigame9 };