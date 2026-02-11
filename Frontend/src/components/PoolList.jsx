import { useChainId } from "wagmi";
import { useGetPools } from "../hooks/poolFactory";
import poolFactoryAddresses from "../abi/LiquidityPoolFactoryAddresses.json";
import PoolItem from "./PoolItem";

const PoolList = () => {
  const chainId = useChainId();
  console.log("chainId:", chainId);

  const poolFactoryAddress = poolFactoryAddresses[chainId];

  const { pools, isLoading, isError } = useGetPools(poolFactoryAddress);

  if (!poolFactoryAddress)
    return <div>Factory not deployed on this network</div>;

  if (isLoading) return <div>Loading pools...</div>;

  if (isError) return <div>Error fetching pools</div>;

  if (!pools?.length) return <div>No pools found</div>;

  return (
    <>
      <h1>This is the pool list</h1>

      {pools.map((address) => (
        <PoolItem key={address} address={address} />
      ))}
    </>
  );
};

export default PoolList;
