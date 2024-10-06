import { Story } from "../types/story";

export const story1: Story = {
  title: "Ordovician ~440mya",
  globeImg: "./first_extinction.png",
  cover: "https://3.bp.blogspot.com/-veQqPsOyOqU/U-e0BjCtY7I/AAAAAAAACW8/QSS0ASlalCU/s1600/Cincinnatian%2BSeas.jpg", // replace with an actual cover image URL from Unsplash
  location: {
    latitude: 0,
    longitude: 0, 
  },
  frames: [
    {
      terrosoImg: "assets/terroso_imgs/terroso_explain.png",
      frameCenter: {
        title: "Ordovician Period",
        description: `This is my Ordovician period. Not much time has passed since the Cambrian Explosion. The Cambrian Explosion was an event where life diversified very quickly, and all the major animal phyla appeared. All the organisms were aquatic.`,
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_explorer.png",
      frameLeft: {
        image: "https://formlabs-media.formlabs.com/filer_public_thumbnails/filer_public/d1/4d/d14d313d-b7b2-4a56-86f3-cf630c4433bf/trilobite1.png__1354x0_subsampling-2.png", // Image of trilobites from Unsplash
        title: "Trilobites",
        description: "Trilobites were among the most diverse and abundant marine creatures during the Ordovician period.",
      },
      frameRight: {
        image: "https://media.istockphoto.com/id/467325394/photo/chambered-nautilus-jetting.webp?a=1&b=1&s=612x612&w=0&k=20&c=zJ24-tSUTf_89SD6ISPJiRQoMbTHguIIt39b5hkEaIo=", // Image of cephalopods from Unsplash
        title: "Cephalopods",
        description: "Early cephalopods like nautiloids dominated the seas with their spiral shells and predatory behavior.",
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_thinking.png",
      frameCenter: {
        title: "Continental Drift",
        description: `The continents look very different, don’t you think? This is due to Continental Drift, the slow movement of continents, comparable to the speed at which your fingernails grow. Over millions of years, this movement changed the global landscape and redistributed resources, but it also led to swings in sea levels, which affected oxygen levels and nutrients, disrupting marine ecosystems.`,
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_normal.png",
      frameCenter: {
        title: "Climate Change in Ordovician",
        description: `Life also had to deal with changes in the climate, like you currently do, but they had to endure sudden global cooling. This could’ve been because of the increased amount of plant life consuming enough CO2 that the atmosphere could no longer retain as much heat from the sun. As with sudden global warming, life wasn’t ready for rapid cooling around it.`,
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_flabbergasted.png",
      frameCenter: {
        title: "Formation of Gondwana",
        description: `This climate shift could have been further impacted by the formation of the supercontinent Gondwana near the South Pole, which created glacial conditions and caused massive changes in ocean currents and habitats. Take a look at how the South Pole used to look like.`,
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_sad.png",
      frameCenter: {
        title: "First Mass Extinction",
        description: `These changes in the climate and the ecosystems were too much sudden pressure for life in the Ordovician. It wasn’t overnight, but these processes built up over millions of years, causing many species to be unable to adapt in time. This was the first mass extinction of the Big Five extinctions in the geologic record. It is estimated that more than 80% of marine life went extinct after this, including many of these creatures.`,
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_caveman.png",
      frameLeft: {
        image: "https://media.istockphoto.com/id/478272718/photo/fossil-trilobite-imprinted-in-the-sediment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zP5gXL2jZs6zyFP7X7PsDVNWdbjUfqBTQtwDopxK0nI=", // Image of extinct trilobites from Unsplash
        title: "Extinct Trilobites",
        description: "Many trilobite species did not survive the Ordovician extinction.",
      },
      frameRight: {
        image: "https://www.bgs.ac.uk/wp-content/uploads/2020/05/P549553_1332x690-960x497.jpg", // Image of extinct graptolites from Unsplash
        title: "Extinct Graptolites",
        description: "Graptolites, colonial organisms, were also greatly impacted by the extinction.",
      }
    }
  ],
};
