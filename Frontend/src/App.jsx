import { useState } from "react";
import "./App.css";
import PoolList from "./components/PoolList";
import CreatePool from "./components/CreatePool";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min">
      <Navbar />
      <main>
        {/* <Header heading="Decentralized Exchanges made Simple" subheading="create pools, add liquidity and swap tokens all at one place"/>
        <CreatePool />
        <PoolList /> */}
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
