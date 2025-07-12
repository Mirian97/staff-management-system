"use client";
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { LayoutDashboard, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { GeneralStatistic } from "../_components/general-statistic";
import { Button } from "../_components/ui/button";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-200">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Carregando...
          </h2>
        </div>
      </div>
    );
  }

  if (!session?.accessToken && status == "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between gap-4 text-slate-700">
        <div className="flex gap-2 items-center mb-8 ">
          <LayoutDashboard />
          <h1 className="text-3xl font-bold">Sistema de Gestão</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: "/login",
            })
          }
        >
          <LogOut className="!size-6" />
        </Button>
      </div>
      <GeneralStatistic />
      <Tabs defaultValue={pathname.split("/")[1]} className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">
            <Link href="employees">Funcionários</Link>
          </TabsTrigger>
          <TabsTrigger value="departments">
            <Link href="departments">Departamentos</Link>
          </TabsTrigger>
          <TabsTrigger value="tasks">
            <Link href="tasks">Tarefas</Link>
          </TabsTrigger>
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
};
export default DashboardLayout;
