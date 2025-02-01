import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StoryContextProps {
  storyNumber: number;
  setStoryNumber: React.Dispatch<React.SetStateAction<number>>;
}

const StoryContext = createContext<StoryContextProps | undefined>(undefined);

export const StoryProvider = ({ children }: { children: ReactNode }) => {
  const [storyNumber, setStoryNumber] = useState(0);

  return (
    <StoryContext.Provider value={{ storyNumber, setStoryNumber }}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = (): StoryContextProps => {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error('useStory must be used within a StoryProvider');
  }
  return context;
};