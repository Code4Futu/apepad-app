import "@/styles/globals.css";
import { chains, wagmiClient } from "@/utils/wagmi/wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { NextPage } from "next";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  /** render component without all layouts */
  pure?: true;
  /** is mini program */
  mp?: boolean;
  /**
   * allow chain per page, empty array bypass chain block modal
   * @default [ChainId.BSC]
   * */
  /**
   * Meta component for page, hacky solution for static build page to avoid `PersistGate` which blocks the page from rendering
   */
  Meta?: React.FC<React.PropsWithChildren<unknown>>;
};

export const SEO: DefaultSeoProps = {
  titleTemplate: "LootBot Dashboard",
  defaultTitle: "LootBot Dashboard",
  description:
    "Earn ETH rewards by holding $LOOT. Burn $LOOT for xLOOT, unlocking higher rewards. Monitor looting status and more, all in one place.", // TODO: Update later
  twitter: {
    cardType: "summary_large_image",
    handle: "@loot",
    site: "@loot",
  },
  openGraph: {
    title: "LootBot Dashboard",
    description:
      "Earn ETH rewards by holding $LOOT. Burn $LOOT for xLOOT, unlocking higher rewards. Monitor looting status and more, all in one place.", // TODO: Update later
    images: [{ url: "/public/images/banner.png" }],
  },
};

import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import LayoutDefault from "@/components/layout/main-template/main";
import Topbar from "@/components/top-bar/topbar";
import Header from "@/components/layout/header/header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const wallets = [new PetraWallet()];

  useEffect(() => {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "/vendors/fontawesome-pro/css/all.min.css";
    linkElement.media = "print";
    linkElement.onload = () => {
      linkElement.media = "all";
    };

    document.head.appendChild(linkElement);

    return () => {
      linkElement.removeEventListener("load", () => {
        linkElement.media = "all";
      });
    };
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="description" content="" />
        <meta name="theme-color" content="#1FC7D4" />
        {(Component as NextPageWithLayout).mp && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            src="https://public.bnbstatic.com/static/js/mp-webview-sdk/webview-v1.0.0.min.js"
            id="mp-webview"
          />
        )}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          media="print"
          // onLoad="this.media='all'"
          key="google-fonts-preconnect"
        />
        <meta name="twitter:image" content="/public/images/banner.png" />
        <meta name="twitter:image:src" content="/public/images/banner.png" />
      </Head>
      <DefaultSeo {...SEO} />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <ToastContainer theme="dark" position="bottom-right" />
          {router.pathname.includes("concepts") ? (
            <Component {...pageProps} />
          ) : (
            <LayoutDefault>
              <div className="flex flex-col flex-1 min-h-full items-stretch">
                {/* Header */}
                <Header />
                {/* //Header */}
                <Topbar />
                {/* Main */}
                <div className="lg:h-full lg:flex-1">
                  <div className="flex flex-col justify-center items-center w-full">
                    <div className="container-lg !px-0">
                      <Component {...pageProps} />
                    </div>
                  </div>
                </div>
                {/* //Main */}
              </div>
            </LayoutDefault>
          )}
          </AptosWalletAdapterProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
