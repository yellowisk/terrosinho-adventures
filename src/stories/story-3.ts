import { Story } from "../types/story";

export const story3: Story = {
  title: "Permian ~250mya",
  globeImg: "./third_extinction.png",
  cover:
    "assets/stories_imgs/lycosuchus.png",
  frames: [
    {
      terrosoImg: "assets/terroso_imgs/terroso_caveman.png",
      frameLeft: {
        image: "assets/stories_imgs/lycosuchus.png",
        title: "Lysosuchus",
      },
      frameRight: {
        image: "https://images.ctfassets.net/cnu0m8re1exe/4LgP6Etb8PORM6SICuxcAy/25128a42c940fa82a74f61431ddc9fac/permain1.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
        title: "Ancient Ferns",
      },
      frameCenter: {
        description: "Welcome to the end of the Permian period. Pangaea is finally formed, creating harsh and dry interior environments but also allowing for unique adaptations among plants and animals. On land, there were early reptiles and a variety of pine trees and ferns, while in the oceans, coral reefs and various marine species flourished.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_flabbergasted.png",
      frameCenter: {
        description: "However, by the end of the Permian period, nearly all of this life would be gone in the most catastrophic mass extinction event in Earth's history, also known as the Great Dying. Around 90% of all species were wiped out, both in the oceans and on land. Again, this extinction event happened over a long period of time, maybe millions of years.iuhfs",
      }
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_explain.png",
      frameCenter: {
        description: "Scientists believe this event was triggered by a series of massive volcanic eruptions in a region that is now Siberia. These eruptions released enormous amounts of greenhouse gases like carbon dioxide and methane, leading to a rapid rise in global temperatures. The intense heat caused ocean temperatures to rise as well, resulting in a lack of oxygen in the water. Many marine creatures suffocated, while warmer waters also led to the release of toxic gases like hydrogen sulfide, further harming marine life.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_scientist.png",
      frameCenter: {
        description: "On land, the extreme heat caused widespread desertification and a collapse of ecosystems. Forests disappeared, and the changing climate caused many plant and insect species to go extinct. It was a chain reaction of devastation, making it incredibly difficult for most forms of life to survive, including trilobites, our old friends, who didn’t make it past this extinction event. With so many species gone, it took millions of years for ecosystems to recover and for new life forms to emerge.",
      },
    },
    {
      terrosoImg: "assets/terroso_imgs/terroso_scientist_wrong.png",
      frameCenter: {
        description: "The end of the Permian set the stage for the rise of the dinosaurs in the next era, but it also serves as a reminder of how dramatically Earth’s environment can change.",
      },
    }
  ],
};
