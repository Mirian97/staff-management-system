"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { queryClient } from "../_config/query-client";

const AllProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      {children}
    </QueryClientProvider>
  );
};

export default AllProviders;
