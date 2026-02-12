import { useCreatePool } from "../hooks/poolFactory";
import PoolFactoryAddress from "../abi/LiquidityPoolFactoryAddresses.json";
import { useChainId } from "wagmi";

const CreatePool = () => {
  const token0 = "0x2b961E3959b79326A8e7F64Ef0d2d825707669b5";
  const token1 = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
  const fee = 10000;
  const chainId = useChainId();
  const factoryAddress = PoolFactoryAddress[chainId];

  const { createPool } = useCreatePool(factoryAddress);

  return (
    <div>
      <button
        className="bg-white text-black cursor-pointer"
        onClick={() => createPool(token0, token1, fee)}
      >
        Create Pool: cardano matic 1e15
      </button>
    </div>
  );
};

export default CreatePool;
