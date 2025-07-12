"use client";
import { Building2, ListTodo, Users } from "lucide-react";
import DescriptiveAmountCard from "../_components/descriptive-amount-card";
import useStatistic from "../_hooks/useStatistic";

export const GeneralStatistic = () => {
  const { counts } = useStatistic();

  return (
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
  );
};
