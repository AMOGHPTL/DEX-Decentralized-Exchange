import { useChainId } from "wagmi";
import { useGetPools } from "../hooks/poolFactory";
import poolFactoryAddresses from "../abi/LiquidityPoolFactoryAddresses.json";
import PoolItem from "../components/PoolItem";

const ExplorePoolsPage = () => {
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
    <div className="flex flex-col gap-[30px] p-[80px]">
      <h1 className="text-5xl">Pools</h1>

      <div className="flex flex-col gap-[20px]">
        {pools.map((address) => (
          <PoolItem key={address} address={address} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePoolsPage;
