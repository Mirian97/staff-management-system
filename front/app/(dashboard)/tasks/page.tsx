"use client";
import { DataTable } from "@/app/_components/ui/datatable";
import { Input } from "@/app/_components/ui/input";
import { useTask } from "@/app/_hooks/useTask";
import { useState } from "react";
import { AddTaskButton } from "./_components/add-task-button";
import { taskColumns } from "./_components/task-columns";

const Tasks = () => {
  const { tasks, lastPage } = useTask();
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Buscar tarefas..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddTaskButton />
      </div>
      <DataTable
        columns={taskColumns}
        data={tasks || []}
        pageCount={lastPage}
      />
    </div>
  );
};

export default Tasks;
