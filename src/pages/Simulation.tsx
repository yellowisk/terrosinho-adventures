import React from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { useNavigate } from "react-router-dom";

import BackButton from "../components/BackButton";
import TimePoint from "../components/TimePoint";
import * as S from "../components/Story/styles";

import { Pin } from "../types/pins";
import { Story } from "../types/story";

import Stories from "./Stories/Stories";

import StoryCarousel from "../components/Story/Carroussel/Carroussel";
import { Connection } from "../types/connection";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

import { StyledContainer, StyledLine } from "../components/TimeLIne.styles";
import { useStory, StoryProvider } from "../context/StoryContext";
import { extinctionStories } from "../stories";

interface EarthSimulationProps {
  imageUrl: string;
  globeRef: React.MutableRefObject<GlobeMethods | undefined>;
  backgroundUrl: string;
  connections: Connection[];
  pins: Pin[];
}

export const EarthSimulation: React.FC<EarthSimulationProps> = ({
  imageUrl,
  backgroundUrl,
  globeRef,
  pins,
  connections,
}) => {
  interface Arc {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
  }

  const ARC_REL_LEN = 0.4; // relative to whole arc
  const FLIGHT_TIME = 1000;

  const [arcsData, setArcsData] = React.useState<Arc[]>([]);

  React.useEffect(() => {
    setArcsData([]);
    if (connections.length > 0) {
      connections.forEach((connection) => {
        const startPin = pins.find((pin) => pin.label === connection.src);
        const endPin = pins.find((pin) => pin.label === connection.dst);
        if (startPin && endPin) {
          const arc = {
            startLat: startPin.lat,
            startLng: startPin.lng,
            endLat: endPin.lat,
            endLng: endPin.lng,
          };
          setArcsData((curArcsData) => [...curArcsData, arc]);
        }
      });
    }
  }, [connections, pins]);

  const formatPin = (pinObj: object) => {
    let pinOpen = false;

    const pin = pinObj as Pin;
    const p = document.createElement("div");
    const svg = document.createElement("svg");

    p.className = "flex flex-col flex-wrap items-center justify-center";

    const toolTip = document.createElement("div");
    toolTip.innerHTML = pin.label || "";
    toolTip.style.visibility = "hidden";
    toolTip.style.backgroundColor = "rgba(30, 41, 59, 0.6)";
    toolTip.style.padding = ".2rem";
    toolTip.style.color = "white";
    toolTip.style.borderRadius = "5px";
    toolTip.style.transform = "translate(0, -100%)";

    const fDiv = document.createElement("div");

    const frame = createRoot(fDiv);

    flushSync(() => {
      frame.render(
        <S.Frame>
          <S.FrameTitle>{pin.frame?.frameLeft!.title}</S.FrameTitle>
          {pin.frame?.frameLeft!.imgs!.map((img, index) => {
            return <S.FrameImage key={index} src={img} />;
          })}
          <S.FrameDescription>
            {pin.frame?.frameLeft!.description}
          </S.FrameDescription>
        </S.Frame>
      );
    });

    fDiv.className = "pointer-events-none invisible absolute";

    svg.setHTMLUnsafe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>'
    );

    // Lucide map-pin icon
    p.style.color = "red";

    svg.style.transform = "translate(0, -100%)";

    p.append(fDiv);
    p.appendChild(toolTip);
    p.appendChild(svg);
    p.style.pointerEvents = "auto";
    p.style.cursor = "pointer";
    p.onmouseenter = () => (toolTip.style.visibility = "visible");
    p.onmouseleave = () => (toolTip.style.visibility = "hidden");
    p.onclick = () => {
      if (!pin.frame) {
        return;
      }

      pinOpen = !pinOpen;
      if (pinOpen) {
        fDiv.className =
          "pointer-events-none visible absolute w-[65rem] transform translate-x-[10rem]";
        svg.style.color = "blue";
      } else {
        fDiv.className = "pointer-events-none invisible absolute";
        svg.style.color = "red";
      }
    };
    return p;
  };

  return (
    <Globe
      ref={globeRef}
      globeImageUrl={imageUrl}
      backgroundImageUrl={backgroundUrl}
      animateIn={true}
      arcsData={arcsData}
      arcColor={() => "white"}
      arcDashLength={ARC_REL_LEN}
      arcDashGap={2}
      arcDashInitialGap={1}
      arcDashAnimateTime={FLIGHT_TIME}
      arcsTransitionDuration={0}
      htmlElementsData={pins}
      htmlElement={(p) => formatPin(p)}
    />
  );
};

const WrapperSimulation = () => {
  return (
    <StoryProvider>
      <Simulation />
    </StoryProvider>
  );
};
const Simulation = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] =
    React.useState<boolean>(false);
  const [selectedStory, setSelectedStory] = React.useState<Story>();
  const [selectedFrameIndex, setSelectedFrameIndex] = React.useState<number>(0);
  const [backgroundUrl, setBackgroundUrl] = React.useState<string>("");
  const globeRef = React.useRef<GlobeMethods | undefined>();
  const navigate = useNavigate();
  const { storyNumber } = useStory();
  const isStart = storyNumber == 0;

  const handleSelectFrame = (index: number) => {
    if (index == selectedFrameIndex) {
      setIsStoryModalOpen(false);
    } else {
      setSelectedFrameIndex(index);
    }
  };

  const rotate = async (
    globeRef: React.MutableRefObject<GlobeMethods | undefined>
  ) => {
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
  };

  React.useEffect(() => {
    rotate(globeRef);
  }, []);

  React.useEffect(() => {
    setIsStoryModalOpen(false);
    rotate(globeRef);
  }, [selectedStory]);

  return (
    <>
      <div id="simulation" className="overflow-hidden overflow-y-hidden">
        {isStart && (
          <S.Frame className="w-full h-screen absolute z-10 ms-5 mt-80">
            <S.FrameTitle>Interact with the Timeline to Start</S.FrameTitle>
          </S.Frame>
        )}
        <StyledContainer
          onClick={() => {
            if (selectedStory) {
              return;
            }
            setIsStoryModalOpen(true);
          }}
        >
          {extinctionStories.map((story, index) => {
            return (
              <>
                <TimePoint
                  key={index}
                  title={story.title}
                  selected={selectedStory === story}
                  isStart={selectedStory}
                />
              </>
            );
          })}
          <StyledLine />
        </StyledContainer>
        {isStoryModalOpen == false && selectedStory == null && !isStart && (
          <div className="absolute top-0 left-0 z-10 m-16">
            <BackButton
              onClick={() => {
                navigate("/home");
              }}
            />
          </div>
        )}
        <Stories
          isOpen={isStoryModalOpen}
          onClose={() => setIsStoryModalOpen(false)}
          onSelectStory={(story) => setSelectedStory(story)}
        />
        {selectedStory && (
          <StoryCarousel
            storyFrames={selectedStory.frames}
            onSelectFrame={handleSelectFrame}
            onClose={() => setSelectedStory(undefined)}
          />
        )}
        <EarthSimulation
          imageUrl={selectedStory?.globeImg || "./nowadays.png"}
          pins={selectedStory?.frames[selectedFrameIndex]?.pins || []}
          globeRef={globeRef}
          backgroundUrl={backgroundUrl}
          connections={
            selectedStory?.frames[selectedFrameIndex]?.connections || []
          }
        />
      </div>
    </>
  );
};
export default WrapperSimulation;