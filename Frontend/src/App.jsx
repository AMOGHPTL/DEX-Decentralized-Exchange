import { useState } from "react";
import "./App.css";
import PoolList from "./components/PoolList";
import CreatePool from "./components/CreatePool";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import CreatePoolPage from "./pages/CreatePoolPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/CreatePool" element={<CreatePoolPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
