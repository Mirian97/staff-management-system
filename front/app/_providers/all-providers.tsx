"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { queryClient } from "../_config/query-client";

const AllProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Toaster richColors position="top-center" />
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default AllProviders;
