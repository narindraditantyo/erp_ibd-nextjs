import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {  
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>
  <style jsx global>{`
    html {
      font-family: ${fontSans.style.fontFamily};
    }
  `}</style>
  <main className={cn("font-sans", fontSans.className)}>
    {getLayout(<Component {...pageProps} />)}
  </main>
</>;
}

export default App