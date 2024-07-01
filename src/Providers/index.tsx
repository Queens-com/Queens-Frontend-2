"use client";

import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppToaster from "../components/Toaster";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppToaster />
      {children}
    </QueryClientProvider>
  );
}
