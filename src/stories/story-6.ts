import { Story } from "../types/story";
import terroso from "../assets/terroso_imgs/terroso_caveman.png";
import co2 from "../assets/imgs_st6/Co2.gif"
import aral from "../assets/imgs_st6/aral.gif";
import amazonia from "../assets/imgs_st6/amazonia_fogo.gif";
import seaLevelPng from "../assets/imgs_st6/seaLevel.png";
import seaLvelGif from "../assets/imgs_st6/sea_level.gif";
import landIceGreenland from "../assets/imgs_st6/LandIceGreenland.png";
import iceMelting from "../assets/imgs_st6/ice_melting.gif";
import gt from "../assets/imgs_st6/gt_certo.gif";
import globalTemp from "../assets/imgs_st6/GlobalTemp.png";
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

export const story6: Story = {
  title: "Anthropocene ~now",
  backgroundImg:
    "",
  cover:
    "https://assets.newatlas.com/dims4/default/b1e0c2f/2147483647/strip/true/crop/911x607+85+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fanthropocene-1.jpeg",
  frames: [
    {
      terrosoImg: "src/assets/terroso_imgs/terroso_caveman.png",
      frameLeft: {
        image: terroso,
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
          label: "Amazon Forest",
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
        label: "Amazon Forest",
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
      ],
      connections: [
        //make all possible connections
        
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
