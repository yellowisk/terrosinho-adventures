type Minigame = {
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

type SolutionOptions = {
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

export type { Minigame, SolutionOptions };
export { SolutionType };