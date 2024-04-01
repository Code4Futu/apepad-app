import React, { useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  useWallet,
  WalletReadyState,
  Wallet,
} from "@manahippo/aptos-wallet-adapter";

function WalletConnectBtn() {
  const { wallets, select } = useWallet();

  const [detectedWallets, notDetectedWallets] = useMemo(() => {
    const detectedWallets2: Wallet[] = [];
    const notDetectedWallets2: Wallet[] = [];
    wallets.forEach((w) => {
      if (
        w.readyState === WalletReadyState.Installed ||
        w.readyState === WalletReadyState.Loadable
      ) {
        detectedWallets2.push(w);
      } else {
        notDetectedWallets2.push(w);
      }
    });
    return [detectedWallets2, notDetectedWallets2];
  }, [wallets]);

  const [isMoreWalletsUnfolded, setIsMoreWalletsUnfolded] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const toogleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onSelectWallet = useCallback(
    (w: Wallet) => {
      select(w.adapter.name);
      // onConnected();
    },
    [select]
  );

  console.log(detectedWallets, notDetectedWallets);

  return (
    <>
      <button
        type="button"
        className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
        onClick={toogleDialog}
      >
        <span className="text-xs md:text-sm">Connecting</span>
      </button>
    </>
  );
  // const { connected, wallets, isLoading, account } = useWallet();
  // const address = account?.address;
  // const truncatedAddress =
  //   address && `${address.slice(0, 6)}...${address.slice(-4)}`;

  // if (connected) {
  //   return (
  //     <button
  //       type="button"
  //       className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
  //     >
  //       <span className="text-xs md:text-sm">{truncatedAddress}</span>
  //     </button>
  //   );
  // }

  // if (isLoading || !wallets?.[0]) {
  //   return (
  //     <button
  //       type="button"
  //       className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
  //     >
  //       <span className="text-xs md:text-sm">Connecting</span>
  //     </button>
  //   );
  // }

  // return <WalletView wallet={wallets[0]} />;
}

// const WalletView = ({ wallet }: { wallet: Wallet }) => {
//   const { connect } = useWallet();
//   const isWalletReady =
//     wallet.readyState === WalletReadyState.Installed ||
//     wallet.readyState === WalletReadyState.Loadable;
//   const mobileSupport = wallet.deeplinkProvider;

//   const onWalletConnectRequest = async (walletName: WalletName) => {
//     try {
//       await connect(walletName);
//     } catch (error) {
//       console.warn(error);
//       window.alert("Failed to connect wallet");
//     }
//   };

//   /**
//    * If we are on a mobile browser, adapter checks whether a wallet has a `deeplinkProvider` property
//    * a. If it does, on connect it should redirect the user to the app by using the wallet's deeplink url
//    * b. If it does not, up to the dapp to choose on the UI, but can simply disable the button
//    * c. If we are already in a in-app browser, we don't want to redirect anywhere, so connect should work as expected in the mobile app.
//    *
//    * !isWalletReady - ignore installed/sdk wallets that don't rely on window injection
//    * isRedirectable() - are we on mobile AND not in an in-app browser
//    * mobileSupport - does wallet have deeplinkProvider property? i.e does it support a mobile app
//    */
//   if (!isWalletReady && isRedirectable()) {
//     // Wallet has mobile app
//     if (mobileSupport) {
//       return (
//         <button
//           type="button"
//           className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
//           key={wallet.name}
//           onClick={() => onWalletConnectRequest(wallet.name)}
//         >
//           <span className="text-xs md:text-sm">Connect wallet</span>
//         </button>
//       );
//     }
//     // Wallet does not have mobile app
//     return (
//       <button
//         type="button"
//         key={wallet.name}
//         className="btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl"
//       >
//         <span className="text-xs md:text-sm">
//           Connect wallet - Desktop Only
//         </span>
//       </button>
//     );
//   } else {
//     // Desktop
//     return (
//       <button
//         type="button"
//         className={twMerge(
//           "btn btn-md px-3 border-[#90E788] bg-[#90E788] hover:border-[#90E788] hover:bg-[#90E788] text-[#111315] text-xs md:text-sm rounded-xl",
//           !isWalletReady && "opacity-50 cursor-not-allowed"
//         )}
//         disabled={!isWalletReady}
//         key={wallet.name}
//         onClick={() => onWalletConnectRequest(wallet.name)}
//       >
//         <span className="text-xs md:text-sm">Connect wallet</span>
//       </button>
//     );
//   }
// };

export default WalletConnectBtn;
