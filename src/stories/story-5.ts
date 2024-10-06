import { Story } from "../types/story";

export const story5: Story = {
  title: "Story 5",
  globeImg: "./fifth_extinction.png",
  cover:
    "https://images.ctfassets.net/cnu0m8re1exe/59qssnh6iHfxY2r3FrctNZ/195cca2a860caed3b434a2d3de1ea555/trex.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
  frames: [
    {
      terrosoImg: "assets/terroso_imgs/terroso_caveman.png",
      frameRight: {
        image: "https://images.ctfassets.net/cnu0m8re1exe/59qssnh6iHfxY2r3FrctNZ/195cca2a860caed3b434a2d3de1ea555/trex.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
        title: "T-Rex",
        description: "asdasdasdasdasdas",
      },
      frameLeft: {
        image: "https://today.cofc.edu/wp-content/uploads/sites/3/2022/09/Sea-Monster-800x533.jpg",
        title: "Plesiosaurus",
      },
      frameCenter: {
        description: "We are now at the end of the Cretaceous period, a time when the world was dominated by dinosaurs, along with many other species both on land and in the oceans. But the Cretaceous came to an abrupt end with the fifth and most recent mass extinction event, during which around 75% of all species, including all non-avian dinosaurs, were wiped out. Yes, there still are (avian) dinosaurs around today, but you usually call them ‘birds’",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_explain.png",
      frameCenter: {
        description: "The primary cause of this extinction is widely believed to be a massive asteroid impact near what is now the Yucatán Peninsula in Mexico. The impact created a crater over 180 kilometers wide and released a tremendous amount of energy, equivalent to billions of nuclear bombs. This event sent debris and gases high into the atmosphere, blocking out sunlight and causing a dramatic drop in global temperatures. Plants could no longer photosynthesize, disrupting the entire food chain.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_scientist.png",
      frameCenter: {
        description: "In addition to the asteroid, there was a period of intense volcanic activity in what is now India, called the Deccan Traps. These eruptions released large amounts of greenhouse gases, which might have worsened the climate shifts and stressed ecosystems already struggling to survive.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_flabbergasted.png",
      frameLeft: {
        image: "https://cdn.mos.cms.futurecdn.net/LYaCBz6UWwB4om83KHvtT7.gif",
        title: "Meteor",
      },
      frameCenter: {
        description: "After this extinction, only a fraction of life remained, but it set the stage for fruit-bearing plants, mammals, and eventually humans, to diversify and eventually dominate the planet in the following eras.",
      },
    }
  ],
};
