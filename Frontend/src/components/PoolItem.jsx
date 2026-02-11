import { isAddress } from "viem";
import { useChainId } from "wagmi";
import { useGetPoolInfoWithPoolAddress } from "../hooks/poolFactory";
import PoolFactoryAddresses from "../abi/LiquidityPoolFactoryAddresses.json";
import TokenName from "../abi/tokenAddressToName.json";

const PoolItem = ({ address }) => {
  const chainId = useChainId();

  const factoryAddress = PoolFactoryAddresses[chainId];

  const enabled = Boolean(factoryAddress && address && isAddress(address));

  const { data, isLoading, isError } = useGetPoolInfoWithPoolAddress(
    factoryAddress,
    address,
    enabled,
  );

  if (!enabled) return null;
  if (isLoading) return <div>Loading {address}...</div>;
  if (isError) return <div>Error loading {address}</div>;

  return (
    <div style={{ padding: "8px 0" }}>
      <strong>Pool address : {address}</strong>
      <ul>
        <li>{TokenName[data.token0]}</li>
        <li>{TokenName[data.token1]}</li>
        <li>fees : {data.fee}</li>
      </ul>
    </div>
  );
  
};

export default PoolItem;
