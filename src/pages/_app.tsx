import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { WalletProvider } from "@/context/WalletProvider";

type NextPageWithLayout = NextPage & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
  /** render component without all layouts */
  pure?: true;
  /** is mini program */
  mp?: boolean;
  /**
   * Meta component for page, hacky solution for static build page to avoid `PersistGate` which blocks the page from rendering
   */
  Meta?: React.FC<React.PropsWithChildren<unknown>>;
};

export const SEO: DefaultSeoProps = {
  titleTemplate: "Launchpad Aptos",
  defaultTitle: "Launchpad Aptos",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum quis, explicabo incidunt, facilis consequatur illum repellat, aperiam consequuntur totam magni enim minus excepturi voluptatibus quia voluptatem eius ipsa.", // TODO: Update later
  twitter: {
    cardType: "summary_large_image",
    handle: "@launchpad",
    site: "@launchpad",
  },
  openGraph: {
    title: "Launchpad Aptos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum quis, explicabo incidunt, facilis consequatur illum repellat, aperiam consequuntur totam magni enim minus excepturi voluptatibus quia voluptatem eius ipsa.", // TODO: Update later
    images: [{ url: "/public/svg/duge-banner.svg" }],
  },
};

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import LayoutDefault from "@/components/layout/main-template/main";
import Topbar from "@/components/top-bar/topbar";
import Header from "@/components/layout/header/header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
        <title>Launchpad</title>
        <link rel="shortcut icon" href="/logo.svg" />
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
        <meta name="twitter:image" content="/public/svg/duge-banner.svg" />
        <meta name="twitter:image:src" content="/public/svg/duge-banner.svg" />
      </Head>
      <DefaultSeo {...SEO} />

      <WalletProvider>
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
      </WalletProvider>
    </>
  );
}
