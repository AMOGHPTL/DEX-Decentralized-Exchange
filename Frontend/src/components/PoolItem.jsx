import { isAddress } from "viem";
import { useChainId } from "wagmi";
import { useGetPoolInfoWithPoolAddress } from "../hooks/poolFactory";
import PoolFactoryAddresses from "../abi/LiquidityPoolFactoryAddresses.json";
import TokenName from "../abi/tokenAddressToName.json";
import { useNavigate } from "react-router-dom";
import { getReverseTokens } from "../utils/utils";

const PoolItem = ({ address }) => {
  const chainId = useChainId();

  const navigate = useNavigate();

  // const Tokens = Object.fromEntries(
  //   Object.entries(TokenName).map(([name, addr]) => [addr, name]),
  // );

  const Tokens = getReverseTokens(TokenName);

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
    <div
      onClick={() => navigate(`/Pool/${address}`)}
      className="bg-gray-600 w-[600px] px-[20px] py-[10px] cursor-pointer rounded-[10px]"
    >
      <strong>Pool address : {address}</strong>
      <ul>
        <li>{Tokens[data.token0]}</li>
        <li>{Tokens[data.token1]}</li>
        <li>fees : {data.fee}</li>
      </ul>
    </div>
  );
};

export default PoolItem;
