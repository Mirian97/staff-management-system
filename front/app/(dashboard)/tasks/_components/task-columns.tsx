"use client";

import { TTask } from "@/app/_service/task-service";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteTaskButton } from "./delete-task-button";
import { EditTaskButton } from "./edit-task-button";

export const taskColumns: ColumnDef<TTask>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "description",
    header: "Descrição",
    cell: ({ row }) => (
      <div className="!text-center line-clamp-1">
        {row.original.description}
      </div>
    ),
  },
  {
    accessorKey: "assignee",
    header: "Responsável",
  },
  {
    accessorKey: "dueDate",
    header: () => <div className="text-center">Data Limite</div>,
    cell: ({ row }) => (
      <div className="!text-center">{row.original.due_date}</div>
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
        <EditTaskButton id={id} task={task} />
        <DeleteTaskButton id={id} name={task.title} />
      </div>
    ),
  },
];
