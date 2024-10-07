import Question from "../components/Quiz/Question";

export type Options = {
  text: string;
  correct?: boolean;
};

export type Question = {
  question: string;
  options: Options[];
};

export const questions1: Question[] = [
  {
    question: "What is the primary cause of the rapid increase in global temperatures in recent decades?",
    options: [
      { text: "Greenhouse gases from human activities", correct: true },
      { text: "Natural volcanic activity" },
      { text: "Changes in the Earth's orbit" },
      { text: "Solar radiation fluctuations" }
    ]
  },
  {
    question: "Which of the following is a major cause of wildfires becoming more frequent and severe?",
    options: [
      { text: "Increased rainfall" },
      { text: "Higher global temperatures and drier conditions", correct: true },
      { text: "Ocean currents" },
      { text: "Urban expansion" }
    ]
  },
  {
    question: "What is one of the major environmental impacts of deforestation in the Amazon rainforest?",
    options: [
      { text: "Increased biodiversity" },
      { text: "Decrease in carbon dioxide levels" },
      { text: "Loss of habitat for many species", correct: true },
      { text: "Expansion of urban areas" }
    ]
  },
  {
    question: "What is a significant consequence of rising sea levels due to climate change?",
    options: [
      { text: "More freshwater supply" },
      { text: "Increased coastal flooding", correct: true },
      { text: "Decreased global temperatures" },
      { text: "Expansion of polar ice" }
    ]
  },
  {
    question: "What effect does the melting of Arctic ice have on global ecosystems?",
    options: [
      { text: "It decreases sea levels" },
      { text: "It causes habitat loss for polar species", correct: true },
      { text: "It increases global fish populations" },
      { text: "It improves ocean circulation" }
    ]
  },

];

export const questions2: Question[] = [
  {
    question: "Which of the following is a direct result of climate change that increases the frequency of floods?",
    options: [
      { text: "Higher sea levels and more intense rainfall", correct: true },
      { text: "Rising land masses" },
      { text: "Increased tectonic activity" },
      { text: "Lower air pressure" }
    ]
  },
  {
    question: "What factor contributes most to the increasing frequency of droughts globally?",
    options: [
      { text: "Global cooling" },
      { text: "Higher evaporation rates due to rising temperatures", correct: true },
      { text: "More forest cover" },
      { text: "Decreased atmospheric carbon dioxide" }
    ]
  },
  {
    question: "What is one major consequence of poor air quality in urban areas?",
    options: [
      { text: "Increased oxygen levels" },
      { text: "Respiratory health issues in humans", correct: true },
      { text: "More plant growth" },
      { text: "Decrease in carbon emissions" }
    ]
  },
  {
    question: "How does agriculture expansion contribute to environmental issues?",
    options: [
      { text: "By improving biodiversity" },
      { text: "By causing deforestation and habitat loss", correct: true },
      { text: "By reducing carbon emissions" },
      { text: "By increasing soil moisture" }
    ]
  },
  {
    question: "What is a key driver of the current biodiversity crisis?",
    options: [
      { text: "Natural evolutionary processes" },
      { text: "Habitat destruction and climate change", correct: true },
      { text: "Increased wildlife population" },
      { text: "Expansion of protected areas" }
    ]
  }
]