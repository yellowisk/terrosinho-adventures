import React from "react";
import Globe from "react-globe.gl";

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
    return (
        <>
            <div id="simulation">
                <div className="absolute z-10 rounded bg-slate-500 ms-5 mt-5 opacity-50 w-1/3 h-1/4">
                    <h1 className="text-black">AAAAA</h1>
                </div>
                <EarthSimulation imageUrl={"./first_extinction.png"}/>
            </div>
        </>
    );
}

export default Simulation;