"use client"
import { Button } from "@/app/_components/ui/button";
import { DataTable } from '@/app/_components/ui/datatable';
import { Input } from "@/app/_components/ui/input";
import { Plus } from "lucide-react";
import { useState } from 'react';
import { taskColumns } from './_components/task-columns';

export const mockTasks = [
  {
    id: 1,
    title: "Implementar novo sistema",
    description: "Desenvolver o novo sistema de gestão",
    assignee: "João Silva",
    dueDate: "2024-03-20",
  },
  {
    id: 2,
    title: "Reunião com cliente",
    description: "Apresentar proposta comercial",
    assignee: "Maria Santos",
    dueDate: "2024-03-15",
  },
];


const Tasks = () => {
  const [search, setSearch] = useState("");

  const filteredTasks = mockTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Buscar tarefas..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>
          <Plus className="mr-1 h-4 w-4" /> Nova Tarefa
        </Button>
      </div>
      <DataTable columns={taskColumns} data={mockTasks} />
    </div>
  )
}

export default Tasks
