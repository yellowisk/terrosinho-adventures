import React, { useCallback, lazy } from "react";
import { useNavigate } from "react-router-dom";
const Button = lazy(() => import("../components/Button"));

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStoriesClick = useCallback(() => {
    console.log("Stories button clicked");
    navigate("/stories");
  }, [navigate]);

  const handleSimulatorClick = useCallback(() => {
    console.log("Simulator button clicked");
    navigate("/simulator");
  }, [navigate]);

  const handleGamesClick = useCallback(() => {
    console.log("Games button clicked");
    navigate("/minigamemenu");
  }, [navigate]);

  return (
    <div className="relative flex  min-h-screen  flex-col justify-center items-center m:py-12">
       <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-8">
       TERROSO
      </h1>
      <div className="flex justify-center mt-10 gap-10">
        <Button
          onClick={handleSimulatorClick}
          text="Simulator"
          variant="secondary"
        />
        <Button onClick={handleGamesClick} text="Minigame" variant="tertiary" />
      </div>
    </div>
  );
};
export default Home;
