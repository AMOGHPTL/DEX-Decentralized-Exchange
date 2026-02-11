import { useState } from "react";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import PoolList from "./components/PoolList";
import CreatePool from "./components/CreatePool";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Simple Decentralized Exchange</h1>
      <ConnectButton />
      <CreatePool/>
      <PoolList/>
    </div>
  );
}

export default App;
