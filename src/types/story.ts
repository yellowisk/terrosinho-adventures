import { Pin } from './pins';

import { Connection } from './connection';

export type StoryFrame = {
  terrosoImg?: string,
  frameLeft?:{
    image?: string,
    title?: string,
    description?: string,
    imgs?: string[],
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
  connections?: Connection[],
};

export type Story = {
  title: string,
  cover: string;
  backgroundImg?: string,
  isLastStory?: boolean,
  globeImg: string,
  location?: {
    latitude: number,
    longitude: number,
  },
  frames: StoryFrame[],
};