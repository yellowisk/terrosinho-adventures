import React from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

import TimePoint from "../components/TimePoint";

import Stories from "./Stories";
import { Story } from "../types/story";

import { story1 } from "../stories/story-1";
import { story2 } from "../stories/story-2";
import { story3 } from "../stories/story-3";
import { story4 } from "../stories/story-4";
import { story5 } from "../stories/story-5";
import { story6 } from "../stories/story-6";
import StoryCarousel from "../components/Story/StoryCarroussel";


interface EarthSimulationProps {
  imageUrl: string;
  globeRef: React.MutableRefObject<GlobeMethods | undefined>;
  backgroundUrl: string;
}

const EarthSimulation: React.FC<EarthSimulationProps> = ({ imageUrl, backgroundUrl, globeRef }) => {
    return (
        <Globe 
        ref={globeRef}
        globeImageUrl={imageUrl}
        backgroundImageUrl={backgroundUrl}
        animateIn={true}
        />
    );
}

const Simulation: React.FC = () => {
    const extinctionStories = [story1, story2, story3, story4, story5, story6];

    const [isStoryModalOpen, setIsStoryModalOpen] = React.useState<boolean>(false);

    const [selectedStory, setSelectedStory] = React.useState<Story>();

    const [backgroundUrl, setBackgroundUrl] = React.useState<string>("");
    const [imageUrl, setImageUrl] = React.useState<string | undefined>("");

    const globeRef = React.useRef<GlobeMethods | undefined>();
    const rotate = async (globeRef: React.MutableRefObject<GlobeMethods | undefined>) => {
        // setBackgroundUrl("");
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.enableRotate = false;
            controls.autoRotate = true;
            globeRef.current.pointOfView({ lat: 0, lng: 0 });
            for (let i = 130; i > 0; i -= 1) {
                controls.autoRotateSpeed = i;
                await new Promise((resolve) => setTimeout(resolve, 0.2));
            }
            controls.enableRotate = true;
            controls.autoRotate = false;
        }
        setTimeout(() => {
            setBackgroundUrl("./background.jpg");
        }, 300);
    }

    React.useEffect(() => {
        rotate(globeRef);
    }, []);

    React.useEffect(() => {
        setImageUrl(selectedStory?.globeImg)
        setIsStoryModalOpen(false);
        rotate(globeRef);
    }, [selectedStory]);

    const Timeline: React.FC = () => {
        return (
            // <div className="absolute grid grid-cols-6 md:gap-x-18 lg:gap-x-24 z-10 rounded-full top-3 left-1/2 transform -translate-x-1/2 bg-slate-500 w-4/6 lg:w-3/6 h-[2vh] text-transparent pointer-events-auto cursor-pointer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="absolute grid grid-cols-6 md:gap-x-18 lg:gap-x-24 z-10 rounded-full bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-500 w-4/6 lg:w-3/6 h-[2vh] text-transparent pointer-events-auto cursor-pointer" onClick={() => setIsStoryModalOpen(true)}>
                {extinctionStories.map((story) => {
                    return (
                    <>
                        <TimePoint title={story.title} selected={selectedStory === story}/>
                    </>);
                })}
            </div>
        );
    }
    

    return (
        <>
            <div id="simulation">
                <Stories isOpen={isStoryModalOpen} onClose={() => setIsStoryModalOpen(false)} stories={extinctionStories} onSelectStory={(story) => setSelectedStory(story)}/>
                {selectedStory && <StoryCarousel storyFrames={selectedStory.frames} onClose={() => setSelectedStory(undefined)} />}
                <Timeline />
                <EarthSimulation imageUrl={imageUrl ? imageUrl:"./nowadays.png"} globeRef={globeRef} backgroundUrl={backgroundUrl}/>
            </div>
        </>
    );
}

export default Simulation;