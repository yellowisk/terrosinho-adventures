import React from "react";
import Globe from "react-globe.gl";

const EarthSimulation: React.FC<undefined> = () => {
    return (
        <>
            <Globe 
                backgroundImageUrl={"https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/background.png"}
            />
        </>
    );
}

export default EarthSimulation;