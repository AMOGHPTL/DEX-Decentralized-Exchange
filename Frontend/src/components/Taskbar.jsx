import Taskcard from "./Taskcard";
import swap from "../assets/swap.svg";
import pool from "../assets/pool.svg";
import liquidity from "../assets/liquidity.svg";

const Taskbar = () => {
  return (
    <div className="flex justify-around">
      <Taskcard
        img={swap}
        taskTitle="Swap"
        taskDescription="swap tokens with ease with low fees"
      />
      <Taskcard
        img={pool}
        taskTitle="Create Pool"
        taskDescription="Create a Pool for a Pair of tokens"
      />
      <Taskcard
        img={liquidity}
        taskTitle="Liquidity"
        taskDescription="Add liquidity to liquidity pools and earn intrest"
      />
    </div>
  );
};

export default Taskbar;
