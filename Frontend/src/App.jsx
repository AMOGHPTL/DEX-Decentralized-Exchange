import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import CreatePoolPage from "./pages/CreatePoolPage";
import { Routes, Route } from "react-router-dom";
import ExplorePoolsPage from "./pages/ExplorePoolsPage";
import SwapPage from "./pages/SwapPage";
import PoolPage from "./pages/PoolPage";

function App() {
  return (
    <div className="min">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/CreatePool" element={<CreatePoolPage />} />
          <Route path="/ExplorePools" element={<ExplorePoolsPage />} />
          <Route path="/Swap/:address" element={<SwapPage />} />
          <Route path="/Pool/:address" element={<PoolPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
