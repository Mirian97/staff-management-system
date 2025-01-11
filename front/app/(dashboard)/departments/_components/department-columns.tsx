"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DeleteDepartmentButton } from "./delete-department-button";
import { EditDepartmentButton } from "./edit-department-button";

export const departmentColumns: ColumnDef<{
  id: number;
  name: string;
  employeeCount: number;
}>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "employeeCount",
    header: "Funcionários",
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: () => (
      <div className="text-center">
        <EditDepartmentButton />
        <DeleteDepartmentButton />
      </div>
    ),
  },
];
