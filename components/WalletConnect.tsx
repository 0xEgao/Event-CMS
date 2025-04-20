"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider,WalletDisconnectButton,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
export default function WalletConnect() {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                <div className="flex">
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                </div> 
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
  }