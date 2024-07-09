"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppToaster from "../components/Toaster";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
  session: any;
}

export default function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider
      refetchInterval={144 * 60}
      refetchOnWindowFocus={false}
      session={session}
    >
      <QueryClientProvider client={queryClient}>
        <AppToaster />
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
}
