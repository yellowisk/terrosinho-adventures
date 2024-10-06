import { Pin } from './pins';

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
  },
  pins?: Pin[],
};

export type Story = {
  title: string,
  cover: string;
  backgroundImg?: string,
  globeImg: string,
  location?: {
    latitude: number,
    longitude: number,
  },
  frames: StoryFrame[],
};
