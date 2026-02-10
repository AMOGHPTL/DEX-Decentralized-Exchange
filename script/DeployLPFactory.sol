// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {LiquidityPoolFactory} from "../src/LiquidityPoolFactory.sol";
import {HelperConfig} from "./HelperConfig.sol";

contract DeployLPFactory is Script {
    address[] public tokenAddresses;

    function run() public returns (LiquidityPoolFactory, HelperConfig) {
        HelperConfig config = new HelperConfig();
        (address cardano, address matic, address solana, address usdc) = config.activeNetworkConfig();

        tokenAddresses = [cardano, matic, solana, usdc];

        vm.startBroadcast();
        LiquidityPoolFactory poolFactory = new LiquidityPoolFactory();
        vm.stopBroadcast();

        return (poolFactory, config);
    }
}
