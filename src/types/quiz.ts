export type Options = {
  text: string;
  correct?: boolean;
};

export type Question = {
  question: string;
  options: Options[];
};

