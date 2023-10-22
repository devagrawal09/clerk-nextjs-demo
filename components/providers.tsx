"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const qc = new QueryClient();

export function Providers(props: PropsWithChildren) {
  return (
    <QueryClientProvider client={qc}>{props.children}</QueryClientProvider>
  );
}
