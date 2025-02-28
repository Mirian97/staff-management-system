"use client";
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import {
  Building2,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Users,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import DescriptiveAmountCard from "../_components/descriptive-amount-card";
import { Button } from "../_components/ui/button";
import useStatistic from "../_hooks/useStatistic";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  const { counts } = useStatistic();
  const pathname = usePathname();

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <DescriptiveAmountCard
          name="Funcionários"
          amount={counts?.employee_count}
          icon={<Users className="size-5 text-muted-foreground" />}
        />
        <DescriptiveAmountCard
          name="Departamentos"
          amount={counts?.department_count}
          icon={<Building2 className="size-5 text-muted-foreground" />}
        />
        <DescriptiveAmountCard
          name="Tarefas"
          amount={counts?.task_count}
          icon={<ListTodo className="size-5 text-muted-foreground" />}
        />
      </div>
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
