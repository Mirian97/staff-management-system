"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DeleteTaskButton } from "./delete-task-button";
import { EditTaskButton } from "./edit-task-button";

export const taskColumns: ColumnDef<{
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
}>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "assignee",
    header: "Responsável",
  },
  {
    accessorKey: "dueDate",
    header: () => <div className="text-center">Data Limite</div>,
    cell: ({ row }) => (
      <div className="!text-center">{row.original.dueDate}</div>
    ),
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: () => (
      <div className="text-center">
        <EditTaskButton />
        <DeleteTaskButton />
      </div>
    ),
  },
];
