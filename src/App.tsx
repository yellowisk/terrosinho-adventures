// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";

const Home = lazy(() => import("../src/pages/Home"));
const Stories = lazy(() => import("../src/pages/Stories"));
const Simulation = lazy(() => import("../src/pages/Simulation"));
const MinigameMenu = lazy(() => import("../src/pages/MinigameMenu"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="simulator" element={<Simulation />}/>
            <Route path="minigame" element={<MinigameMenu />} />
            <Route path="quiz" element={<Quiz />}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
