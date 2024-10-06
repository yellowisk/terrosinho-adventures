import React from "react";
import styled from "styled-components";
import { Story } from "../types/story";

import StoryCover from "../components/Story/Story";
import BackButton from "../components/BackButton";

interface StoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory: (story: Story) => void;
  stories: Story[];
}

const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 20;
`;

const Stories: React.FC<StoryProps> = ({ isOpen, onClose, onSelectStory, stories }) => {
  return (
    <>
      {
        isOpen &&
        <div className="absolute bottom-3 p-16 bg-black/70 z-20 h-full overflow-hidden pointer-events-none">
          <BackButton onClick={onClose}/>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
            Stories
          </h1>
          <StoriesContainer className="z-20 overflow-auto h-5/6">
            {stories.map((story) => (
              <StoryCover story={story} onSelected={onSelectStory} className="pointer-events-auto"/>
            ))}
          </StoriesContainer>
        </div>
      }
    </>
  );
};
export default Stories;
