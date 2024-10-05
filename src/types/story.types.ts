/* -------- MINIGAME -------- */

interface Minigame {
  type: SolutionType;
  regionInfo: {
      latitude: string;
      longitude: string;
      date: string;
  };
  regionContext: Array<{
      dialog: string;
  }>;
  happening: Array<{
      dialog: string;
  }>;
  panels: Array<{
      order: number;
      url: string;
      type: string;
      appearsAfter: {
          scenario: string; // regionContext or happening
          dialog: number;
      }
  }>;
  finalScore: number;
}

interface SolutionOptions {
  solutions: Array<{
      text: string;
      type: SolutionType;
  }>;
}

enum SolutionType {
  wildfire,
  flood,
  earthquake,
  hurricane,
  landslide
}

/* -------- QUIZ -------- */

interface Quiz {
  questions: Array<{
      question: string;
      options: Array<{
          text: string;
          correct: boolean;
      }>;
  }>;
  finalScore: number;
}

/* -------- STORY -------- */

interface Story {
  terrosoClothing: string;
  regionInfo: {
    latitude: string;
    longitude: string;
    date: string;
  };
  introduction: Array<{
      dialog: string;
  }>;
  disaster: Array<{
      dialog: string;
  }>;
  preventMitigate: Array<{
      dialog: string;
  }>;
  panels: Array<{
      url: string;
      type: string;
      appearsAfter: {
          scenario: string; // introduction, disaster or preventMitigate
          dialog: number;
      }
  }>;
}

export type { Minigame, SolutionOptions, Quiz, Story, SolutionType };