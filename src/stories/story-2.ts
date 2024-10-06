import { Story } from "../types/story";

export const story2: Story = {
  title: "Late Devonian ~360mya",
  globeImg: "./second_extinction.png",
  cover:
    "https://www.infoescola.com/wp-content/uploads/2010/04/periodo-devoniano-550x493.jpg",
  frames: [
    {
      terrosoImg: "assets/terroso_imgs/terroso_caveman.png",
      frameCenter: {
        description: "Welcome to the Late Devonian. At this point in time, insects and some of the first seed-bearing plants have spread across land, and the continents are starting to drift toward forming a supercontinent called Pangaea. Millions of years have passed since our last stop on this time tour, and yet the continents look very different to back then. Do you remember the name of the movement of the continents we discussed back in our last stop of this walk through time?",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_explain.png",
      frameCenter: {
        description: "The end of the Devonian period was marked by the second of the Big Five mass extinctions. This event wiped out more than 75% of all species, especially those living in the oceans, but scientists struggle to pinpoint the exact causes.",
      },
      frameLeft: {
        image: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/ammonite-explainer/ammonite-collection-nhm-full-width.jpg.thumb.1160.1160.jpg",
        title: "Ammonites",
      },
      frameRight: {
        image: "https://th.bing.com/th/id/R.ee440e091416a2c367779efcd0c7ca91?rik=yJ%2fzDQ4F97im0g&riu=http%3a%2f%2fwww.messagetoeagle.com%2fwp-content%2fuploads%2f2016%2f11%2fplacodermi.jpg&ehk=NpgLTxwYMOwP3yS56foUwtPTArfChbzoutp9SKhO5hU%3d&risl=&pid=ImgRaw&r=0",
        title: "Armored-Fish",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_scientist.png",
      frameCenter: {
        description: "Scientists think a combination of different factors could have contributed to this extinction. One theory is that as large land plants spread, they changed the environment by increasing soil erosion and nutrient runoff into the oceans. This may have triggered huge algae growth in the water, which then used up most of the oxygen, leaving too little for other organisms. Other possible causes include sudden climate changes (both warmer and colder temperatures), volcanic eruptions, and even impacts from asteroids.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_scientist_wrong.png",
      frameLeft: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Diorama_of_a_Devonian_seafloor_-_corals%2C_coiled_cephalopod%2C_gastropod%2C_crinoids_%2844933262614%29.jpg/220px-Diorama_of_a_Devonian_seafloor_-_corals%2C_coiled_cephalopod%2C_gastropod%2C_crinoids_%2844933262614%29.jpg",
        title: "Coral Reefs & Stone Sponge",
      },
      frameCenter: {
        description: "Whatever the causes, the results were devastating for many species, especially for those that built reefs in the shallow seas. The loss of these reef-building organisms paved the way for new species to evolve and fill the empty ecological spaces in the future.",
      },
    }
  ],
};
