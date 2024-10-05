import React from 'react';
import { story1 } from '../stories/story-1';
import Story from '../components/Story/Story';

const Stories: React.FC = () => {
  const stories = [story1];
  return (
    <div>
      <h1>Stories</h1>
      <div className='flex flex-row flex-wrap justify-center'>
        {stories.map((story) => (
          <Story key={story.id} story={story}/>
        ))}
      </div>
    </div>
  );
};
export default Stories;