import React, { createContext, useContext } from "react";

interface AudioContextValue {
  play: () => void;
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

export const useAudioContext = (): AudioContextValue => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error(
      "useAudioContext must be used within an AudioContextProvider"
    );
  }
  return context;
};

interface AudioContextProviderProps {
  children: React.ReactNode;
}

export const AudioContextProvider: React.FC<AudioContextProviderProps> = ({
  children,
}) => {
  const audio = new Audio("./assets/songs/bg-song.mp3");
  audio.loop = true;

  // return () => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };

  const play = () => {
    audio.play();
  };

  const value: AudioContextValue = {
    play,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
