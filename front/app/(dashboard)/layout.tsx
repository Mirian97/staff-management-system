"use client"
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Building2, LayoutDashboard, ListTodo, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import DescriptiveAmountCard from "../_components/DescriptiveAmountCard";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex gap-2 items-center mb-8 text-slate-700" >
        <LayoutDashboard />
        <h1 className="text-3xl font-bold">Sistema de Gestão</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <DescriptiveAmountCard name="Funcionários" amount={12} icon={<Users className="size-5 text-muted-foreground" />} />
        <DescriptiveAmountCard name="Departamentos" amount={12} icon={<Building2 className="size-5 text-muted-foreground" />} />
        <DescriptiveAmountCard name="Tarefas" amount={12} icon={<ListTodo className="size-5 text-muted-foreground" />} />
      </div>
      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees" onClick={() => router.push("/employees")}>Funcionários</TabsTrigger>
          <TabsTrigger value="departments" onClick={() => router.push("/departments")}>Departamentos</TabsTrigger>
          <TabsTrigger value="tasks" onClick={() => router.push("/tasks")}>Tarefas</TabsTrigger>
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
};
export default DashboardLayout