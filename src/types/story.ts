export type StoryFrame = {
  terrosoImg: string,
  frameLeft?:{
    image?: string,
    title?: string,
    description?: string,
  },
  frameRight?:{
    image?: string,
    title?: string,
    description?: string,
  },
  frameCenter?:{
    title?: string,
    description?: string,
  }
};

export type Story = {
  title: string,
  cover: string;
  backgroundImg?: string,
  globeImg?: string,
  location?: {
    latitude: number,
    longitude: number,
  },
  frames: StoryFrame[],
};
