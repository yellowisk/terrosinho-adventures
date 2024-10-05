import React from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

import TimePoint from "../components/TimePoint";

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
    const [currentEvent, setCurrentEvent] = React.useState<string>("");

    const [backgroundUrl, setBackgroundUrl] = React.useState<string>("");

    const globeRef = React.useRef<GlobeMethods | undefined>();
    const rotate = async (globeRef: React.MutableRefObject<GlobeMethods | undefined>) => {
        if (globeRef.current) {
            console.log("Globe ref", globeRef.current);
            const controls = globeRef.current.controls();
            controls.autoRotate = true;
            globeRef.current.pointOfView({ lat: 0, lng: 0 });
            for (let i = 500; i > 0; i -= 1) {
                controls.autoRotateSpeed = i;
                await new Promise((resolve) => setTimeout(resolve, 0.5));
            }
            controls.autoRotate = false;
        }
    }

    React.useEffect(() => {
        rotate(globeRef).then(() => {
            setBackgroundUrl("./background.jpg");
        });
    }, []);

    const Timeline: React.FC = () => {
        return (
            <div className="absolute grid grid-cols-12 z-10 rounded-full bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-500 w-5/6 h-[2vh]">
                <TimePoint title={"First Extinction"} onClick={() => {setCurrentEvent("First Extinction")}} selected={currentEvent === "First Extinction"}/>
                <TimePoint title={"Second Extinction"} onClick={() => {setCurrentEvent("Second Extinction")}} selected={currentEvent === "Second Extinction"}/>
            </div>
        );
    }

    return (
        <>
            <div id="simulation">
                {/* <h1 className="absolute z-10 transform translate-x-1/2 bottom-20 text-4xl text-white text-center">{currentEvent}</h1> */}
                <Timeline />
                <EarthSimulation imageUrl={"./first_extinction.png"} globeRef={globeRef} backgroundUrl={backgroundUrl}/>
            </div>
        </>
    );
}

export default Simulation;