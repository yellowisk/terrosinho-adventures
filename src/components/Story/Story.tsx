import React from "react";
import { Story } from "../../types";
// import StoryCarousel from "./StoryCarroussel";

type StoryCoverProps = {
  story: Story;
};

const StoryCover: React.FC<StoryCoverProps> = ({ story }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // setIsOpen(true);
  };

  return (
    <>
      <div onClick={handleClick}>
        <img alt="" src={story.cover} />
        <span>{story.title}</span>
      </div>
      {/* <StoryCarousel isOpen={isOpen} storyFrames={story.frames} /> */}
    </>
  );
};

export default StoryCover;
