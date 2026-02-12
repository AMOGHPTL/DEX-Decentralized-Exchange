import { useCreatePool } from "../hooks/poolFactory";
import PoolFactoryAddress from "../abi/LiquidityPoolFactoryAddresses.json";
import { useChainId } from "wagmi";
import { useState } from "react";
import Tokens from "../abi/tokenAddressToName.json";

const CreatePool = () => {
  const cardano = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  const matic = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
  // const solana;
  // const usdc;
  const fee = 10000;
  const chainId = useChainId();
  const factoryAddress = PoolFactoryAddress[chainId];

  const { createPool } = useCreatePool(factoryAddress);

  const [token0, setToken0] = useState("cardano");
  const [token1, setToken1] = useState("matic");

  return (
    <div>
      {/* <button
        className="bg-white text-black cursor-pointer"
        onClick={() => createPool(cardano, matic, fee)}
      >
        Create Pool: cardano matic 1e15
      </button> */}
      <div>
        <p>Create pool</p>
      </div>
      <div>
        <p>Select Tokens</p>
        <div>
          <div>
            <div>
              <img
                src={`../public/tokens/${token0}.svg`}
                alt=""
                className="w-[20px]"
              />
              <p>{token0}</p>
            </div>
            <div>
              <img src={`../public/tokens/${token1}.svg`} alt="" className="w-[20px]"/>
              <p>{token1}</p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePool;
