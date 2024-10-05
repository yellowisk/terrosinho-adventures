// import React, { useState } from "react";
// import { StoryFrame } from "../../types/story";

// interface StoryCarouselProps {
//   storyFrames: StoryFrame[];
//   isOpen: boolean;
// }

// const StoryCarousel: React.FC<StoryCarouselProps> = ({
//   storyFrames,
//   isOpen,
// }) => {
//   const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

//   // const handleNext = () => {
//   //   setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % images.length);
//   // };

//   // const handlePrev = () => {
//   //   setCurrentFrameIndex(
//   //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
//   //   );
//   };

//   if (!isOpen) return null;

//   return (
//     <></>
//     // <Carousel className="rounded-xl">
//     //   <img
//     //     src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//     //     alt="image 1"
//     //     className="h-full w-full object-cover"
//     //   />
//     //   <img
//     //     src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//     //     alt="image 2"
//     //     className="h-full w-full object-cover"
//     //   />
//     //   <img
//     //     src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//     //     alt="image 3"
//     //     className="h-full w-full object-cover"
//     //   />
//     // </Carousel>
//   );
// };
// export default StoryCarousel;
