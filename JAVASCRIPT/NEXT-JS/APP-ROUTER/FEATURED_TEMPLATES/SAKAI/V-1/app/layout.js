'use client';

import { Inter } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import { PersistGate } from 'redux-persist/integration/react';

import { LayoutProvider } from '@/layout/context/layoutcontext';
import { persistor } from '@/redux/store';
import { Providers } from "@/redux/provider";

/**
 * Import global CSS for entire application
*/
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./globals.css";
import '@/styles/layout/layout.scss';
import '@/styles/components/components.scss';
import '@/styles/pages/pages.scss';

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Posuru",
  description: "Generated by BE Messenger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/layout/images/Group 316.png" />
        <link id="theme-css" href={`/themes/default/theme.css`} rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <PrimeReactProvider>
          <Providers>
            <PersistGate loading={null} persistor={persistor}>
              <LayoutProvider>
                {children}
              </LayoutProvider>
            </PersistGate>
          </Providers>
        </PrimeReactProvider>
      </body>
    </html>
  );
}