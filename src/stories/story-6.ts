import { Story } from "../types/story";

export const story6: Story = {
  title: "Story 6",
  backgroundImg:
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  cover:
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  frames: [
    {
      terrosoImg: "src/assets/terroso_imgs/terroso_caveman.png",
      frameLeft: {
        image: "src/assets/terroso_imgs/terroso_caveman.png",
        title: "asdasdasdasdasdas",
        description: "asdasdasdasdasdas",
      },
      frameCenter: {
        description: "asdasdasdasdasdas",
      },
      pins: [
        {
          label: "Paris",
          lat: 48.923328440672506, 
          lng: 2.151983740844543,
        },
        {
          label: "London",
          lat: 51.50339650934399, 
          lng: -0.11126382669849086,
        },
        {
          label: "New York",
          lat: 40.712776,
          lng: -73.99925429056148
        },
        {
          label: "Tokyo",
          lat: 35.682839,
          lng: 139.759455,
        },
        {
          label: "Sydney",
          lat: -33.865143,
          lng: 151.209900,
        },
        {
          label: "Rio de Janeiro",
          lat: -22.913395,
          lng: -43.200710,
        }
      ],
      connections: [
        {
          src: "Paris",
          dst: "London",
        },
        {
          src: "New York",
          dst: "Paris",
        },
        {
          src: "London",
          dst: "Sydney",
        },
      ],
    },
    {
      terrosoImg: "src/assets/terroso_imgs/terroso_caveman.png",
      frameCenter: {
        description: "siudhsihfiuhfs",
      },
      frameRight: {
        image: "src/assets/terroso_imgs/terroso_caveman.png",
        title: "asdasdasdasdasdas",
      },
      pins: [
        {
          label: "Paris",
          lat: 48.923328440672506, 
          lng: 2.151983740844543,
        },
        {
          label: "London",
          lat: 51.50339650934399, 
          lng: -0.11126382669849086,
        },
        {
          label: "New York",
          lat: 40.712776,
          lng: -73.99925429056148
        },
        {
          label: "Tokyo",
          lat: 35.682839,
          lng: 139.759455,
        },
        {
          label: "Sydney",
          lat: -33.865143,
          lng: 151.209900,
        },
        {
          label: "Rio de Janeiro",
          lat: -22.913395,
          lng: -43.200710,
        }
      ],
      permanentConnections: [
        {
          src: "Paris",
          dst: "London",
        },
        {
          src: "New York",
          dst: "Paris",
        },
        {
          src: "London",
          dst: "Sydney",
        },
      ],
      newConnections: [
        {
          src: "Sydney",
          dst: "Rio de Janeiro",
        },
      ]
    },
    {
      terrosoImg: "./assets/terroso_imgs/terroso_caveman.png",
      frameCenter: {
        description: "siudhsihfiuhfs",
      },
    },
  ],
};
