import LiquidityPool from "../abi/LiquidityPool.json";
import {useReadContract} from "wagmi";

export function useGetPoolLiquidity(poolAddress, watch=true) {
    const result = useReadContract({
        address: poolAddress,
        abi: LiquidityPool,
        functionName: useGetPoolLiquidity,
        args: [],
        query: {
          enabled: !!poolAddress,   // don't run if address missing
          refetchInterval: watch ? 3000 : false, // auto refresh every 3s (optional)
        },
    }) 

    const liquidity = result.data?result.data:null;

    return {
        liquidity,
        isLoading: result.isLoading,
        error: result.error,
        refetch: result.refetch
    }
}
