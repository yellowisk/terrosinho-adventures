import React from "react";
import Globe from "react-globe.gl";

import TimePoint from "../components/TimePoint";

interface EarthSimulationProps {
  imageUrl: string;
}


const EarthSimulation: React.FC<EarthSimulationProps> = ({ imageUrl }) => {
    return (
        <Globe 
        globeImageUrl={imageUrl}
        backgroundImageUrl={"./background.jpg"}
        animateIn={true}
        />
    );
}

const Simulation: React.FC = () => {
    const [currentEvent, setCurrentEvent] = React.useState<string>("");


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
                <EarthSimulation imageUrl={"./first_extinction.png"}/>
            </div>
        </>
    );
}

export default Simulation;