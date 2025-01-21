import React from "react";

import { Story } from "../../types/story";

import StoryCover from "../../components/Story/Story";
import BackButton from "../../components/BackButton";
import { StoriesContainer, StyledHeader } from "./styles";
import { extinctionStories } from "../../stories";

interface StoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory: (story: Story) => void;
}

const Stories: React.FC<StoryProps> = ({
  isOpen,
  onClose,
  onSelectStory,
}) => {
  return (
    <>
      {isOpen && (
        <div className="overflow-y-hidden absolute bottom-3 p-16 bg-black/90 z-20 h-full overflow-hidden pointer-events-none">
          <StyledHeader>
            <BackButton onClick={onClose} />
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
              Timeline
            </h1>
          </StyledHeader>
          <StoriesContainer>
            {extinctionStories.map((story, index) => (
              <div>
                <StoryCover
                  key={index}
                  storyId={index}
                  story={story}
                  onSelected={onSelectStory}
                  className="pointer-events-auto"
                />
                <div className="flex items-center mt-4 justify-center">
                  <span className="z-0 px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 bg-opacity-40 rounded-full">
                    {story.title.includes("Late")
                      ? story.title.split(" ")[2]
                      : story.title.split(" ")[1]}
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
