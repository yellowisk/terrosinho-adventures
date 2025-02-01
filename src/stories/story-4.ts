import { Story } from "../types/story";

export const story4: Story = {
  title: "Triassic-Jussaric ~201.5mya",
  globeImg: "./fourth_extinction.png",
  cover:
    "https://th.bing.com/th/id/R.48723269838305f04a7adfdb12359bfe?rik=lOzESyn2ARD%2bcg&pid=ImgRaw&r=0",
  frames: [
    {
      terrosoImg: "assets/terroso_imgs/terroso_caveman.png",
      frameLeft: {
        image: "assets/stories_imgs/shrew.avif",
        title: "Shrew",
      },
      frameRight: {
        image: "https://images.dinosaurpictures.org/eoraptor-beingthepredator-tuomaskoivurinne-2009_9a56.jpg",
        title: "Ancient Dinosaur",
      },
      frameCenter: {
        title: "Triassic-Jurassic",
        description: "We are now in the Triassic. There are still some remnants of Pangaea, but a significant portion of the land is still concentrated in a massive continent. Some dinosaurs roamed the land, alongside other reptiles, amphibians, and the first mammals, which were small and shrew-like. In the oceans, a variety of marine life, including ammonites, mollusks, and marine reptiles, flourished.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_sad.png",
      frameCenter: {
        title: "Fourth Mass Extinction",
        description: "The Triassic ended and the famous Jurassic started with the fourth mass extinction of the Big Five that we’ve been going through so far. The causes of the Triassic-Jurassic extinction remain a topic of scientific debate. One hypothesis suggests a significant increase in volcanic activity. This activity was primarily caused by underwater volcanic eruptions in the Central Atlantic Magmatic Province (CAMP), which led to substantial biochemical changes in both the atmosphere and the oceans.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_flabbergasted.png",
      frameCenter: {
        title: "Meteor Impacts and Greenhouse Effect",
        description: "Another possibility is meteor or meteorite impacts. Evidence supporting this theory includes the presence of craters that may have been formed by such impacts. Another possible factor is the release of large quantities of CO2 into the atmosphere caused by the fragmentation of Pangaea, resulting in a high greenhouse effect, which led to a rise in global temperatures. Does this sound familiar to you?",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_normal.png",
      frameCenter: {
        title: "Impact on Marine Life",
        description: "With the extinction of a vast number of species, many ecological niches — essentially the roles that species play in an ecosystem — were left vacant. allowing surviving species to expand their populations. Over geologic time, these species gave rise to new species through evolutionary processes. In this context, the surviving dinosaurs began establishing terrestrial and marine ecosystems.",
      },
    }
  ],
};
