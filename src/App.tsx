// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../src/pages/Home"));
const Stories = lazy(() => import("../src/pages/Stories"));
const Simulation = lazy(() => import("../src/pages/Simulation"));
const Minigame = lazy(() => import("../src/pages/Minigame"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="simulator" element={<Simulation />}/>
            <Route path="minigame" element={<Minigame />} />
            <Route path="minigamemenu" element={<Minigame />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
