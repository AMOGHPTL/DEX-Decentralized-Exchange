// SPDX-License-Identofier: MIT

pragma solidity ^0.8.18;

import {ERC20Mock} from "@openzeppelin/contracts/mocks/token/ERC20Mock.sol";
import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        address cardano;
        address matic;
        address solana;
        address usdc;
    }

    uint256 public constant DEFAULT_ANVIL_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    NetworkConfig public activeNetworkConfig;

    constructor() {
        activeNetworkConfig = getOrCreateNetworkConfig();
    }

    function getOrCreateNetworkConfig() public returns (NetworkConfig memory) {
        vm.startBroadcast();
        ERC20Mock cardanoMock = new ERC20Mock();
        ERC20Mock maticMock = new ERC20Mock();
        ERC20Mock solanaMock = new ERC20Mock();
        ERC20Mock usdcMock = new ERC20Mock();
        vm.stopBroadcast();

        return NetworkConfig({
            cardano: address(cardanoMock),
            matic: address(maticMock),
            solana: address(solanaMock),
            usdc: address(usdcMock)
        });
    }
}
