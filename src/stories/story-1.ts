import { Story } from "../types/story";

export const story1: Story = {
  title: "Ordovician ~440mya",
  cover: "https://3.bp.blogspot.com/-veQqPsOyOqU/U-e0BjCtY7I/AAAAAAAACW8/QSS0ASlalCU/s1600/Cincinnatian%2BSeas.jpg", // replace with an actual cover image URL from Unsplash
  backgroundImg: "", // replace with an actual background image URL from Unsplash
  globeImg: "./first_extinction.png",
  location: {
    latitude: 0,  // Replace with accurate latitude
    longitude: 0, // Replace with accurate longitude
  },
  frames: [
    {
      terrosoImg: "terroso_imgs/terroso_explain.png",
      frameCenter: {
        title: "Ordovician Period",
        description: `This is my Ordovician period. Not much time has passed since the Cambrian Explosion. The Cambrian Explosion was an event where life diversified very quickly, and all the major animal phyla appeared. All the organisms were aquatic.`,
      }
    },
    {
      terrosoImg: "terroso_imgs/terroso_explorer.png",
      frameLeft: {
        image: "https://unsplash.com/photos/abc", // Image of trilobites from Unsplash
        title: "Trilobites",
        description: "Trilobites were among the most diverse and abundant marine creatures during the Ordovician period.",
      },
      frameRight: {
        image: "https://unsplash.com/photos/def", // Image of cephalopods from Unsplash
        title: "Cephalopods",
        description: "Early cephalopods like nautiloids dominated the seas with their spiral shells and predatory behavior.",
      }
    },
    {
      terrosoImg: "terroso_imgs/terroso_thinking.png",
      frameCenter: {
        title: "Continental Drift",
        description: `The continents look very different, don’t you think? This is due to Continental Drift, the slow movement of continents, comparable to the speed at which your fingernails grow. Over millions of years, this movement changed the global landscape and redistributed resources, but it also led to swings in sea levels, which affected oxygen levels and nutrients, disrupting marine ecosystems.`,
      }
    },
    {
      terrosoImg: "terroso_imgs/terroso_normal.png",
      frameCenter: {
        title: "Climate Change in Ordovician",
        description: `Life also had to deal with changes in the climate, like you currently do, but they had to endure sudden global cooling. This could’ve been because of the increased amount of plant life consuming enough CO2 that the atmosphere could no longer retain as much heat from the sun. As with sudden global warming, life wasn’t ready for rapid cooling around it.`,
      }
    },
    {
      terrosoImg: "terroso_imgs/terroso_flabbergasted.png",
      frameCenter: {
        title: "Formation of Gondwana",
        description: `This climate shift could have been further impacted by the formation of the supercontinent Gondwana near the South Pole, which created glacial conditions and caused massive changes in ocean currents and habitats. Take a look at how the South Pole used to look like.`,
      }
    },
    {
      terrosoImg: "terroso_imgs/terroso_sad.png",
      frameCenter: {
        title: "First Mass Extinction",
        description: `These changes in the climate and the ecosystems were too much sudden pressure for life in the Ordovician. It wasn’t overnight, but these processes built up over millions of years, causing many species to be unable to adapt in time. This was the first mass extinction of the Big Five extinctions in the geologic record. It is estimated that more than 80% of marine life went extinct after this, including many of these creatures.`,
      }
    },
    {
      terrosoImg: "terroso_imgs/terroso_caveman.png",
      frameLeft: {
        image: "https://unsplash.com/photos/ghi", // Image of extinct trilobites from Unsplash
        title: "Extinct Trilobites",
        description: "Many trilobite species did not survive the Ordovician extinction.",
      },
      frameRight: {
        image: "https://unsplash.com/photos/jkl", // Image of extinct graptolites from Unsplash
        title: "Extinct Graptolites",
        description: "Graptolites, colonial organisms, were also greatly impacted by the extinction.",
      }
    }
  ],
};
