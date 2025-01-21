import { Story } from "../types/story";
import co2 from "../assets/imgs_st6/Co2.gif"
import aral from "../assets/imgs_st6/aral.gif";
import amazonia from "../assets/imgs_st6/amazonia_fogo.gif";
import seaLevelPng from "../assets/imgs_st6/SeaLevel.png";
import seaLvelGif from "../assets/imgs_st6/sea_level.gif";
import iceMelting from "../assets/imgs_st6/ice_melting.gif";
import landIceAntarctica from "../assets/imgs_st6/LandIceAntarctica.png";

const elNino = "https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151743/ssta_mur_2023233.jpg";
const congo1 = "https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79276/congo_tm5_2008245_lrg.jpg";
const congo2 = "https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79276/congo_tm5_1999044.jpg"
const miami = "https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148494/projected_gslm_2300.png";
const maldives1 = "https://eoimages.gsfc.nasa.gov/images/imagerecords/148000/148158/maldives_oli_202056.jpg";
const greece = "https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151628/rhodesislandfire_oli_2023200.jpg";
const rioG1 = "https://climate.nasa.gov/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjMlZqZUhGb1lUSmpjM0Y1ZERVMmIyNW1aV00wWm1KM09XOXJid1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpYjJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW1KeVlYcHBiR1pzYjI5a2FXNW5YM1J0YjE4eU1ESXpNVFl3WDJ4eVp5NXFjR2NpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjJKeVlYcHBiR1pzYjI5a2FXNW5YM1J0YjE4eU1ESXpNVFl3WDJ4eVp5NXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--1203a8108460e1723713a15f2bdbe2c0ecd14401/brazilflooding_tmo_2023160_lrg.jpg";
const rioG2 = "https://climate.nasa.gov/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhiR1k1WlRsamVqWmxOMjh3ZGpka04ySmlaRGRyT1RSNWJIRndaZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpYjJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW1KeVlYcHBiR1pzYjI5a2FXNW5YM1J0YjE4eU1ESXpNVGN3WDJ4eVp5NXFjR2NpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjJKeVlYcHBiR1pzYjI5a2FXNW5YM1J0YjE4eU1ESXpNVGN3WDJ4eVp5NXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--9aefae30d523e5909ded6c18bb5dbdc194627891/brazilflooding_tmo_2023170_lrg.jpg";
const india1 = "https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145242/chennai_oli_2019170_lrg.jpg";
const india2 = "https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145242/chennai_oli_2018151_lrg.jpg";
const campinas = "https://eoimages.gsfc.nasa.gov/images/imagerecords/153000/153295/safires_epc_20240903.jpg"

const interactPin = [
  {
    label: "Paris",
    lat: 48.923328440672506, 
    lng: 2.151983740844543,
    frame: {
      frameLeft: {
        description: "Greenhouse gases like carbon dioxide and methane are trapping more heat, causing global temperatures to rise and resulting in more frequent and severe heat waves in Europe. This trend is increasing health risks and worsening droughts and wildfires, making once-rare events almost annual occurrences.",
      imgs: [
        co2,
      ]
      }
    }
  },
  {
    label: "Congo Forest",
    lat: -5.917064441767374, 
    lng: 12.548699829119872,
    frame: {
      frameLeft: {
        description: "Tropical forests are facing extensive deforestation from logging, mining, and agriculture, disrupting ecosystems and threatening biodiversity. Cutting down trees releases the carbon they stored, reducing the forest’s ability to absorb CO₂ and accelerating global warming, while also impacting millions who rely on these forests for their livelihoods.",
        imgs: [
          congo1,
          congo2
        ]
      }
    }
  },
  {
    label: "Pacific Ocean",
    lat: 2.805167,
    lng: -96.505232,
    frame: {
      frameLeft: {
        description: "The oceans are absorbing more CO₂ from the atmosphere, causing them to become more acidic. This acidification is harming marine life, especially shellfish and corals, which struggle to build their shells and skeletons. The loss of these species can disrupt entire marine ecosystems and the livelihoods of those who depend on them.",
        imgs: [
          elNino
        ]
      }
    }
  },
  {
    label: "Amazon Rainforest",
    lat: 2.869417,
    lng: -64.269050,
    frame: {
      frameLeft: {
        description: "Tropical forests are facing extensive deforestation from logging, mining, and agriculture, disrupting ecosystems and threatening biodiversity. Cutting down trees releases the carbon they stored, reducing the forest’s ability to absorb CO₂ and accelerating global warming, while also impacting millions who rely on these forests for their livelihoods.",
        imgs: [
          "https://eoimages.gsfc.nasa.gov/images/imagerecords/152000/152511/brazilfires_tmo_20240222.jpg"
        ]
      }
    }
  },
  {
    label: "Miami, USA",
    lat: 25.792061,
    lng: -80.276767,
    frame: {
      frameLeft: {
        description: "The oceans are absorbing more CO₂ from the atmosphere, causing them to become more acidic. This acidification is harming marine life, especially shellfish and corals, which struggle to build their shells and skeletons. The loss of these species can disrupt entire marine ecosystems and the livelihoods of those who depend on them.",
        imgs: [
          miami,
          seaLvelGif
        ]
      }
    }
  },
  {
    label: "Maldives",
    lat: 2.889774,
    lng: 73.118920,
    frame: {
      frameLeft: {
        description: "The Maldives, a nation just a meter above sea level, faces an existential threat from rising sea levels. As sea levels rise due to global warming, the country’s very existence becomes endangered, so much so that they are building protection against sea threats, like in the image below.",
        imgs: [
          seaLevelPng,
          maldives1
        ]
      }
    }
  },
  {
    label: "Artic Sea",
    lat: 84.907230,
    lng: -141.140456,
    frame: {
      frameLeft: {
        description: "The Arctic Sea and Antarctica are witnessing rapid ice melting due to rising global temperatures, threatening species like polar bears and seals, and accelerating global warming by reducing the amount of sunlight reflected into space. As a result, the Arctic is warming at nearly twice the rate of the rest of the world, causing faster rise of sea levels and intensifying the climate crisis.",
        imgs: [
          iceMelting,
        ]
      }
  }
},
{
  label: "Antarctica",
  lat: -79.588951,
  lng: -9.691869,
  frame: {
    frameLeft: {
      description: "The Arctic Sea and Antarctica are witnessing rapid ice melting due to rising global temperatures, threatening species like polar bears and seals, and accelerating global warming by reducing the amount of sunlight reflected into space. As a result, the Arctic is warming at nearly twice the rate of the rest of the world, causing faster rise of sea levels and intensifying the climate crisis.",
      imgs: [
        landIceAntarctica,
      ]
    }
  }
},
{
  label: "Amazon Rainforest",
  lat: -5.671357,
  lng: -68.662827,
  frame: {
    frameLeft: {
      description: "The Amazon rainforest has been increasingly affected by wildfires often started by human activities such as clearing land for agriculture. As a result, large amounts of carbon dioxide and other greenhouse gases enter the atmosphere, contributing to global warming. Wildfires harm biodiversity, disrupt local communities, and impact global weather patterns.",
      imgs: [
        amazonia
      ]
    }
  }
},
{
  label: "Greece",
  lat: 39.221642,
  lng: 22.401024,
  frame: {
    frameLeft: {
      description: "Countries in the Mediterranean Sea have experienced a surge in wildfires in recent years because of rising temperatures, extreme heat waves, and prolonged droughts. These fires devastate landscapes, threaten human lives, and destroy properties, and the smoke and pollutants released into the air degrade their quality, posing health risks to people even far away from the affected areas.",
      imgs: [
        greece
      ]
    }
  }
},
{
  label: "Porto Alegre, Brazil",
  lat: -30.110424,
  lng: -51.218848,
  frame: {
    frameLeft: {
      description: "The state of Rio Grande do Sul in Brazil was hit by severe floods in 2024 due to a combination of heavy rains and rising river levels, resulting in significant economic losses from the loss of homes, communities and agricultural goods. As climate change intensifies rain, extreme floods like this become more common and more destructive.",
      imgs: [
        rioG1,
        rioG2
      ]
    }
  }
},
{
  label: "Campinas, Brazil",
  lat: -22.929001,
  lng: -47.161628,
  frame: {
    frameLeft: {
      description: "Air quality in Southeast South America, especially Brazil, has worsened due to smoke from forest fires and agricultural practices, especially in the Amazon. These pollutants pose health risks, and release greenhouse gases, contributing to global warming, while also disrupting weather and reducing visibility.",
      imgs: [
        campinas
      ]
    }
  }
},
{
  label: "India",
  lat: 20.886771,
  lng: 79.330889,
  frame: {
    frameLeft: {
      description: "India faces more common and severe droughts as climate change disrupts monsoon patterns, crucial for the country's water supply. Water shortages are impacting millions and threatening agriculture, with reservoirs drying up and groundwater levels dropping. Extreme events related to water, such as floods and droughts, are made worse by rapid climate change everywhere.",
      imgs: [
        india1,
        india2
      ]
    }
  }
},
{
  label: "Aral Sea, Central Asia",
  lat: 45.548217,
  lng: 59.908235,
  frame: {
    frameLeft: {
      description: "The drying of the Aral Sea, once one of the largest lakes, occurred due to river diversion for agriculture and is one of the worst environmental disasters of the 20th century. This has turned much of what used to be sea into desert, causing soil degradation, devastating local agriculture and communities. What happened to the Aral Sea is a sad story of the consequences of poor water management.",
      imgs: [
        aral
      ]
    }
  }
}
];

const noFramePin = [
  {
    label: "Paris",
    lat: 48.923328440672506, 
    lng: 2.151983740844543,
  },
  {
    label: "Congo Forest",
    lat: -5.917064441767374, 
    lng: 12.548699829119872,
  },
  {
    label: "Pacific Ocean",
    lat: 2.805167,
    lng: -96.505232,
  },
  {
    label: "Amazon Rainforest",
    lat: 2.869417,
    lng: -64.269050,
  },
  {
    label: "Miami, USA",
    lat: 25.792061,
    lng: -80.276767,
  },
  {
    label: "Maldives",
    lat: 2.889774,
    lng: 73.118920,
  },
  {
      label: "Artic Sea",
      lat: 84.907230,
      lng: -141.140456,
  },
  {
    label: "Antarctica",
    lat: -79.588951,
    lng: -9.691869,
  },
  {
    label: "Amazon Rainforest",
    lat: -5.671357,
    lng: -68.662827,
  },
  {
    label: "Greece",
    lat: 39.221642,
    lng: 22.401024,
  },
  {
    label: "Porto Alegre, Brazil",
    lat: -30.110424,
    lng: -51.218848,
  },
  {
    label: "Campinas, Brazil",
    lat: -22.929001,
    lng: -47.161628,
  },
  {
    label: "India",
    lat: 20.886771,
    lng: 79.330889,
  },
  {
    label: "Aral Sea, Central Asia",
    lat: 45.548217,
    lng: 59.908235,
  }
];

const connections = [
  {
    src: "Paris",
    dst: "Congo Forest",
  },
  {
    src: "Congo Forest",
    dst: "Pacific Ocean",
  },
  {
    src: "Pacific Ocean",
    dst: "Amazon Rainforest",
  },
  {
    src: "Amazon Rainforest",
    dst: "Miami, USA",
  },
  {
    src: "Miami, USA",
    dst: "Maldives",
  },
  {
    src: "Maldives",
    dst: "Artic Sea",
  },
  {
    src: "Artic Sea",
    dst: "Antarctica",
  },
  {
    src: "Antarctica",
    dst: "Amazon Rainforest",
  },
  {
    src: "Amazon Rainforest",
    dst: "Greece",
  },
  {
    src: "Greece",
    dst: "Porto Alegre, Brazil",
  },
  {
    src: "Porto Alegre, Brazil",
    dst: "Campinas, Brazil",
  },
  {
    src: "Campinas, Brazil",
    dst: "India",
  },
  {
    src: "India",
    dst: "Aral Sea, Central Asia",
  },        
];


export const story6: Story = {
  title: "Anthropocene ~now",
  globeImg: './nowadays.png',
  backgroundImg:
    "",
  cover:
    "https://assets.newatlas.com/dims4/default/b1e0c2f/2147483647/strip/true/crop/911x607+85+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fanthropocene-1.jpeg",
  isLastStory: true,
  frames: [
    {
      terrosoImg: "./assets/terroso_imgs/terroso_normal.png",
      frameLeft: {
        title: "Back to the present",
        description: "Welcome back to the Anthropocene. You usually call it ‘now’. Its official name is actually Holocene, but some argue that humans have caused such a massive impact during it that they deserve to be a part of the name of this period, so they added anthro to the name, meaning ‘human’."
      }
    },
    {
      terrosoImg: "./assets/terroso_imgs/terroso_explain.png",
      frameCenter: {
        title: "There are many things happening now. Take a look."
      }
    },
    {
      terrosoImg: "",
      frameRight: {
        title: "Interact with the red pins,\nclick again to close!",
      },
      pins: interactPin
    },
    {
      terrosoImg: "./assets/terroso_imgs/terroso_sad.png",
      frameLeft: {
        title: "Have you noticed a pattern?",
        description: "It’s always the same story. Everywhere you look, it’s global warming, climate change, shrinking wildlife, rising sea levels, and extreme weather. And this story is also present in the Big Five extinction events we’ve discussed previously in the time tour…",
      },
      pins: noFramePin
    },
    {
      frameLeft: {
        description: "It’s a lot. The temperature is rising too quickly for life to keep up. Glaciers are melting fast and sea levels are climbing. The extra heat is drying up the land, fueling stronger wildfires that, in turn, make the droughts even worse."
      },
      frameRight: {
        description: "The warmer climate is giving way to more powerful floods and storms like hurricanes, all of which have their toll on the biosphere. And these changes are happening more frequently. All of this is stressing out ecosystems already struggling to survive, creating a terrible cycle where one problem just makes the others worse."
      },
      pins: noFramePin,
    },
    {
      frameCenter: {
        title: "It’s all connected:",
        description: "Each issue feeds into the next, making everything more intense. But this isn’t the first time Earth has faced something like this. We have the past extinction periods as proof that many of the same forces were at play previously."
      },
      pins: noFramePin,
      connections: connections
    },
    {
      frameLeft: {
        description: "Remember the Permian extinction, the worst one? The planet experienced rapid warming due to massive volcanic eruptions, which led to a surge in greenhouse gases. Similarly, today’s rise in greenhouse gases from human activities is pushing temperatures to levels many species cannot survive, pushing ecosystems to their limit."
      },
      frameRight: {
        description: "Carbon dioxide levels also climbed during the Triassic extinction, resulting in more acidic oceans and widespread coral reefs collapse, altering marine life for millions of years. Sea level rise, too, played a role in many mass extinctions, flooding habitats and cutting off coastal ecosystems. The similarities are very striking."
      },
      pins: noFramePin,
      connections: connections
    },
    {
      frameLeft: {
        title: "The sixth mass extinction",
        description: "This is what some scientists say we’re heading toward, this time driven by human activity. It’s alarming, but we’ve become almost numb to constant reports of record-breaking heatwaves, wildfires, and species disappearing forever."
      },
      pins: [
        {
          label: "Paris",
          lat: 48.923328440672506, 
          lng: 2.151983740844543,
        },
        {
          label: "Pacific Ocean",
          lat: 2.805167,
          lng: -96.505232,
        },
        {
          label: "Miami, USA",
          lat: 25.792061,
          lng: -80.276767,
        },
        {
          label: "Greece",
          lat: 39.221642,
          lng: 22.401024,
        },
        {
          label: "Porto Alegre, Brazil",
          lat: -30.110424,
          lng: -51.218848,
        },
        {
          label: "Campinas, Brazil",
          lat: -22.929001,
          lng: -47.161628,
        },
        {
          label: "India",
          lat: 20.886771,
          lng: 79.330889,
        },
        {
          label: "Aral Sea, Central Asia",
          lat: 45.548217,
          lng: 59.908235,
        }
      ],
      connections: connections
    },
    {
      frameLeft: {},
      frameRight: {
        description: "It’s easy to feel powerless in the face of such a huge problem and to lose hope that individual efforts can make a difference. But recognizing the problem is the first step toward building a collective solution."
      },
      pins: [
        {
          label: "Miami, USA",
          lat: 25.792061,
          lng: -80.276767,
        },
        {
          label: "Greece",
          lat: 39.221642,
          lng: 22.401024,
        },
        {
          label: "Porto Alegre, Brazil",
          lat: -30.110424,
          lng: -51.218848,
        },
        {
          label: "India",
          lat: 20.886771,
          lng: 79.330889,
        }
      ],
      connections: connections
    },
    {
      frameLeft: {
        title: "Awareness sparks change",
        description: "Being informed and staying engaged helps us understand what’s at stake and pushes us to hold those in power accountable. But we must also see ourselves as global citizens, connected to a larger community that shares this planet. \n\nIt’s not just about doing our part, it’s about standing together, across borders and cultures, to demand action that protects not just our future, but the future of all life on Earth. \n\nEverything is connected, which includes humans, so we need to be good citizens of the world systems."
      }
    },
    {
      terrosoImg: "./assets/terroso_imgs/terroso_normal.png",
      frameLeft: {
        description: "Hope this journey through time brings a new perspective for you to understand how the current environmental challenges have shaped the history of life and what your role is in the current biosphere. Stay curious!"
      },
      pins: noFramePin,
      connections: [
        // List all connections between each pair of locations
        { src: "Paris", dst: "Congo Forest" },
        { src: "Paris", dst: "Pacific Ocean" },
        { src: "Paris", dst: "Amazon Rainforest" },
        { src: "Paris", dst: "Miami, USA" },
        { src: "Paris", dst: "Maldives" },
        { src: "Paris", dst: "Artic Sea" },
        { src: "Paris", dst: "Antarctica" },
        { src: "Paris", dst: "Greece" },
        { src: "Paris", dst: "Porto Alegre, Brazil" },
        { src: "Paris", dst: "Campinas, Brazil" },
        { src: "Paris", dst: "India" },
        { src: "Paris", dst: "Aral Sea, Central Asia" },
      
        { src: "Congo Forest", dst: "Pacific Ocean" },
        { src: "Congo Forest", dst: "Amazon Rainforest" },
        { src: "Congo Forest", dst: "Miami, USA" },
        { src: "Congo Forest", dst: "Maldives" },
        { src: "Congo Forest", dst: "Artic Sea" },
        { src: "Congo Forest", dst: "Antarctica" },
        { src: "Congo Forest", dst: "Greece" },
        { src: "Congo Forest", dst: "Porto Alegre, Brazil" },
        { src: "Congo Forest", dst: "Campinas, Brazil" },
        { src: "Congo Forest", dst: "India" },
        { src: "Congo Forest", dst: "Aral Sea, Central Asia" },
      
        { src: "Pacific Ocean", dst: "Amazon Rainforest" },
        { src: "Pacific Ocean", dst: "Miami, USA" },
        { src: "Pacific Ocean", dst: "Maldives" },
        { src: "Pacific Ocean", dst: "Artic Sea" },
        { src: "Pacific Ocean", dst: "Antarctica" },
        { src: "Pacific Ocean", dst: "Greece" },
        { src: "Pacific Ocean", dst: "Porto Alegre, Brazil" },
        { src: "Pacific Ocean", dst: "Campinas, Brazil" },
        { src: "Pacific Ocean", dst: "India" },
        { src: "Pacific Ocean", dst: "Aral Sea, Central Asia" },
      
        { src: "Amazon Rainforest", dst: "Miami, USA" },
        { src: "Amazon Rainforest", dst: "Maldives" },
        { src: "Amazon Rainforest", dst: "Artic Sea" },
        { src: "Amazon Rainforest", dst: "Antarctica" },
        { src: "Amazon Rainforest", dst: "Greece" },
        { src: "Amazon Rainforest", dst: "Porto Alegre, Brazil" },
        { src: "Amazon Rainforest", dst: "Campinas, Brazil" },
        { src: "Amazon Rainforest", dst: "India" },
        { src: "Amazon Rainforest", dst: "Aral Sea, Central Asia" },
      
        { src: "Miami, USA", dst: "Maldives" },
        { src: "Miami, USA", dst: "Artic Sea" },
        { src: "Miami, USA", dst: "Antarctica" },
        { src: "Miami, USA", dst: "Greece" },
        { src: "Miami, USA", dst: "Porto Alegre, Brazil" },
        { src: "Miami, USA", dst: "Campinas, Brazil" },
        { src: "Miami, USA", dst: "India" },
        { src: "Miami, USA", dst: "Aral Sea, Central Asia" },
      
        { src: "Maldives", dst: "Artic Sea" },
        { src: "Maldives", dst: "Antarctica" },
        { src: "Maldives", dst: "Greece" },
        { src: "Maldives", dst: "Porto Alegre, Brazil" },
        { src: "Maldives", dst: "Campinas, Brazil" },
        { src: "Maldives", dst: "India" },
        { src: "Maldives", dst: "Aral Sea, Central Asia" },
      
        { src: "Artic Sea", dst: "Antarctica" },
        { src: "Artic Sea", dst: "Greece" },
        { src: "Artic Sea", dst: "Porto Alegre, Brazil" },
        { src: "Artic Sea", dst: "Campinas, Brazil" },
        { src: "Artic Sea", dst: "India" },
        { src: "Artic Sea", dst: "Aral Sea, Central Asia" },
      
        { src: "Antarctica", dst: "Greece" },
        { src: "Antarctica", dst: "Porto Alegre, Brazil" },
        { src: "Antarctica", dst: "Campinas, Brazil" },
        { src: "Antarctica", dst: "India" },
        { src: "Antarctica", dst: "Aral Sea, Central Asia" },
      
        { src: "Greece", dst: "Porto Alegre, Brazil" },
        { src: "Greece", dst: "Campinas, Brazil" },
        { src: "Greece", dst: "India" },
        { src: "Greece", dst: "Aral Sea, Central Asia" },
      
        { src: "Porto Alegre, Brazil", dst: "Campinas, Brazil" },
        { src: "Porto Alegre, Brazil", dst: "India" },
        { src: "Porto Alegre, Brazil", dst: "Aral Sea, Central Asia" },
      
        { src: "Campinas, Brazil", dst: "India" },
        { src: "Campinas, Brazil", dst: "Aral Sea, Central Asia" },
      
        { src: "India", dst: "Aral Sea, Central Asia" },
      ]
    }
  ],
};
