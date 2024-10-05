import React from "react";
import { story1 } from "../stories/story-1";
import StoryCover from "../components/Story/Story";
import { story2 } from "../stories/story-2";

import styled from "styled-components";

const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Stories: React.FC = () => {
  const stories = [story1, story2];
  return (
      <StoriesContainer>
        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
        {stories.map((story) => (
          <StoryCover story={story} />
        ))}
      </StoriesContainer>
  );
};
export default Stories;
