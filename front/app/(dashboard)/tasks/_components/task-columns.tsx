"use client";

import { TTask } from "@/app/_service/task-service";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteTaskButton } from "./delete-task-button";
import { EditTaskButton } from "./edit-task-button";

export const taskColumns: ColumnDef<TTask>[] = [
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => <div className="line-clamp-1">{row.original.title}</div>,
  },
  {
    accessorKey: "description",
    header: "Descrição",
    cell: ({ row }) => (
      <div className="line-clamp-1">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "employee",
    header: "Responsável",
    cell: ({ row }) => (
      <div className="line-clamp-1">{row.original.employee.full_name}</div>
    ),
  },
  {
    accessorKey: "dueDate",
    header: () => <div className="text-center w-28">Data Limite</div>,
    cell: ({ row }) => (
      <div className="!text-center">
        {new Date(row.original.due_date).toLocaleDateString("pt-BR", {
          dateStyle: "short",
        })}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: ({
      row: {
        original: { id, ...task },
      },
    }) => (
      <div className="text-center flex flex-nowrap">
        <EditTaskButton
          id={id}
          task={{ ...task, assignee_name: task.employee.full_name }}
        />
        <DeleteTaskButton id={id} name={task.title} />
      </div>
    ),
  },
];
