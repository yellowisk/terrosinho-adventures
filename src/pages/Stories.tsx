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
  z-index: 20;
  justify-content: space-between;
  gap: 16px;

  > div {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      scale: calc(1.2);
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      scale: calc(1);
      transform: translateY(0);
    }
  }
`;

const Stories: React.FC<StoryProps> = ({
  isOpen,
  onClose,
  onSelectStory,
  stories,
}) => {
  return (
    <>
      {isOpen && (
        <div className="overflow-y-hidden absolute bottom-3 p-16 bg-black/70 z-20 h-full overflow-hidden pointer-events-none">
          <BackButton onClick={onClose} />
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
            Timeline
          </h1>
          <StoriesContainer className="z-20 flex flex-row">
            {stories.map((story, index) => (
              <div>
                <StoryCover
                  key={index}
                  story={story}
                  onSelected={onSelectStory}
                  className="pointer-events-auto"
                />
                <div className="flex items-center mt-4 justify-center">
                  <span className="z-0 px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 bg-opacity-40 rounded-full">
                    {story.title.includes('Late') ? story.title.split(' ')[2] :story.title.split(' ')[1]}
                  </span>
                </div>
              </div>
            ))}
          </StoriesContainer>
        </div>
      )}
    </>
  );
};
export default Stories;
