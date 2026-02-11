// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {LiquidityPool} from "./LiquidityPool.sol";

contract LiquidityPoolFactory {
    ////////////////////////errors///////////////////////////

    error LiquidityPoolFactory__PoolExists();

    ///////////////////////State variables///////////////////

    address[] public sPoolsList;
    mapping(address => PoolStruct) public sPoolToPoolInfo;
    mapping(address => mapping(address => PoolStruct)) public sGetPool;

    // tokens in pools
    struct PoolStruct {
        address poolAddress;
        address token0;
        address token1;
        uint256 fee;
    }

    ////////////////////Functions///////////////////

    //////////// Modifier /////////////////////////

    modifier poolExists(address token0, address token1, uint256 fee) {
        for (uint256 i; i < sPoolsList.length; i++) {
            if (sPoolToPoolInfo[sPoolsList[i]].token0 == token0) {
                if (sPoolToPoolInfo[sPoolsList[i]].token1 == token1) {
                    if (sPoolToPoolInfo[sPoolsList[i]].fee == fee) {
                        revert LiquidityPoolFactory__PoolExists();
                    }
                }
            }
        }
        _;
    }

    /////////////////External/////////////////////////////////////

    function createPool(address token0, address token1, uint256 fee) public poolExists(token0, token1, fee) {
        LiquidityPool liquidityPool = new LiquidityPool(token0, token1, fee);
        address poolAddress = address(liquidityPool);
        sPoolsList.push(poolAddress);
        sPoolToPoolInfo[poolAddress] = PoolStruct(poolAddress, token0, token1, fee);
        sGetPool[token0][token1] = PoolStruct(poolAddress, token0, token1, fee);
    }

    ///////////////External view/////////////////////////////////

    function getPool(address token0, address token1, uint256 fee) public view returns (address) {
        if (sGetPool[token0][token1].fee == fee) {
            return sGetPool[token0][token1].poolAddress;
        } else if (sGetPool[token1][token0].fee == fee) {
            return sGetPool[token1][token0].poolAddress;
        } else {
            return address(0);
        }
    }

    function getAllPools() public view returns (address[] memory) {
        return sPoolsList;
    }

    function getPoolWithAddress(address poolAddress) public view returns (address, address, address, uint256) {
        PoolStruct memory pool = sPoolToPoolInfo[poolAddress];
        return (pool.poolAddress, pool.token0, pool.token1, pool.fee);
    }

    function getPoolInfo(address token0, address token1) public view returns (PoolStruct memory) {
        return sGetPool[token0][token1];
    }
}
