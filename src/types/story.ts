export type StoryFrame = {
  terrosoImg: string,
  description: string,
};

export type Story = {
  title: string,
  cover: string;
  backgroundImg: string,
  location?: {
    latitude: number,
    longitude: number,
  },
  frames: StoryFrame[],
};
