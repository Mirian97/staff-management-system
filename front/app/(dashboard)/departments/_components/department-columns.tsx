"use client";

import { TDepartment } from "@/app/_service/department-service";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteDepartmentButton } from "./delete-department-button";
import { EditDepartmentButton } from "./edit-department-button";

export const departmentColumns: ColumnDef<TDepartment>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "employees_count",
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
