// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {LiquidityPoolFactory} from "../src/LiquidityPoolFactory.sol";
import {HelperConfig} from "./HelperConfig.sol";
import {ERC20Mock} from "@openzeppelin/contracts/mocks/token/ERC20Mock.sol";

contract DeployLPFactory is Script {
    address[] public tokenAddresses;

    function run() public returns (LiquidityPoolFactory, HelperConfig, ERC20Mock, ERC20Mock, ERC20Mock, ERC20Mock) {
        HelperConfig config = new HelperConfig();
        (address cardano, address matic, address solana, address usdc) = config.activeNetworkConfig();

        tokenAddresses = [cardano, matic, solana, usdc];
        vm.startBroadcast();
        ERC20Mock cardanoMock = new ERC20Mock();
        ERC20Mock maticMock = new ERC20Mock();
        ERC20Mock solanaMock = new ERC20Mock();
        ERC20Mock usdcMock = new ERC20Mock();
        LiquidityPoolFactory poolFactory = new LiquidityPoolFactory();
        vm.stopBroadcast();

        return (poolFactory, config, cardanoMock, maticMock, solanaMock, usdcMock);
    }
}
