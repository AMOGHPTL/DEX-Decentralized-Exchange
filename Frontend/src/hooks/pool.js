import LiquidityPool from "../abi/LiquidityPool.json";
import { useReadContract } from "wagmi";

export function useGetPoolLiquidity(poolAddress, watch = true) {
  const result = useReadContract({
    address: poolAddress,
    abi: LiquidityPool,
    functionName: "getPoolLiquidity",
    query: {
      enabled: !!poolAddress,
      refetchInterval: watch ? 3000 : false,
    },
  });

  return {
    liquidity: result.data ?? null,
    isLoadingLiquidity: result.isLoading,
    error: result.error,
    refetch: result.refetch,
  };
}

export function useGetTokenReserve(poolAddress, tokenAddress, watch = true) {
    const result = useReadContract({
        address: poolAddress,
        abi: LiquidityPool,
        functionName: "getReserveOfToken",
        args: [tokenAddress],
           query: {
      enabled: !!poolAddress,
      refetchInterval: watch ? 3000 : false,
    },
    })

    return {
            reserve: result.data ?? null,
    isLoading: result.isLoading,
    error: result.error,
    refetch: result.refetch,
    }
}
