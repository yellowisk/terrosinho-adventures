// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import { AudioContextProvider } from "./context/AudioContext";

const Home = lazy(() => import("../src/pages/Home"));
const Introduction = lazy(() => import("./pages/Introduction/Introduction"));
const Simulation = lazy(() => import("../src/pages/Simulation"));
const MinigameMenu = lazy(() => import("../src/pages/MinigameMenu"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AudioContextProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Introduction />} />
              <Route path="home" element={<Home />} />
              <Route path="simulator" element={<Simulation />} />
              <Route path="minigame" element={<MinigameMenu />} />
              <Route path="quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </AudioContextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
