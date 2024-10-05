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
    const [imageUrl, setImageUrl] = React.useState<string>("");

    const globeRef = React.useRef<GlobeMethods | undefined>();
    const rotate = async (globeRef: React.MutableRefObject<GlobeMethods | undefined>) => {
        setBackgroundUrl("");
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.enableRotate = false;
            controls.autoRotate = true;
            globeRef.current.pointOfView({ lat: 0, lng: 0 });
            for (let i = 500; i > 0; i -= 1) {
                controls.autoRotateSpeed = i;
                await new Promise((resolve) => setTimeout(resolve, 0.5));
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
        if (currentEvent === "First Extinction") setImageUrl("./first_extinction.png");
        else if (currentEvent === "Second Extinction") setImageUrl("./second_extinction.png");
        rotate(globeRef);
    }, [currentEvent]);

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
                <EarthSimulation imageUrl={imageUrl ? imageUrl:"./nowadays.png"} globeRef={globeRef} backgroundUrl={backgroundUrl}/>
            </div>
        </>
    );
}

export default Simulation;