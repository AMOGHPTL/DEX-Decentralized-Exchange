import { useState } from "react";
import "./App.css";
import PoolList from "./components/PoolList";
import CreatePool from "./components/CreatePool";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <h1>Simple Decentralized Exchange</h1>

      <CreatePool/>
      <PoolList/>
    </div>
  );
}

export default App;
