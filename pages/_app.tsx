import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import "../app/globals.css";
import {
  AppHeader,
  AppMain,
  AppFooter,
  BackToDemos,
} from "@/components/layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
        <AppHeader />
        <AppMain>
          <Component {...pageProps} />
          <BackToDemos />
        </AppMain>
        <AppFooter />
      </div>
    </ClerkProvider>
  );
}
export default MyApp;
