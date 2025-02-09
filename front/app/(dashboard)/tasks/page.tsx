"use client";
import { DebouncedInput } from "@/app/_components/debounced-input";
import { DataTable } from "@/app/_components/ui/datatable";
import { useTask } from "@/app/_hooks/useTask";
import { AddTaskButton } from "./_components/add-task-button";
import { taskColumns } from "./_components/task-columns";

const Tasks = () => {
  const { tasks, lastPage, handlePartialFilter, search } = useTask();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <DebouncedInput
          placeholder="Buscar tarefas..."
          className="max-w-sm"
          value={search}
          onChange={(newValue) => handlePartialFilter({ search: newValue })}
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
