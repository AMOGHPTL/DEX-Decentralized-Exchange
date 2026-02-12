import { useState } from "react";
import "./App.css";
import PoolList from "./components/PoolList";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import CreatePoolPage from "./pages/CreatePoolPage";
import { Routes, Route } from "react-router-dom";
import ExplorePoolsPage from "./pages/ExplorePoolsPage";
import SwapPage from "./pages/SwapPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/CreatePool" element={<CreatePoolPage />} />
          <Route path="/ExplorePools" element={<ExplorePoolsPage />} />
          <Route path="/Swap" element={<SwapPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
