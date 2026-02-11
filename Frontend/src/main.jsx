import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { localhost } from "wagmi/chains";
import { http } from "viem";

const config = getDefaultConfig({
  appName: "Simple DEX",
  projectId: "8f3c7d2b4a1c9e6f123456789abcd123",

  chains: [localhost], // ⭐ ONLY local

  transports: {
    [localhost.id]: http("http://127.0.0.1:8545"), // ⭐ Anvil RPC
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>,
);
