'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "sonner";
const queryClient = new QueryClient()


const AllProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      {children}
    </QueryClientProvider>
  )
}

export default AllProviders
