"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteEmployeeButton } from "./delete-employee-button";
import { EditEmployeeButton } from "./edit-employee-button";

export const employeeColumns: ColumnDef<{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
}>[] = [
  {
    accessorKey: "firstName",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
  },
  {
    accessorKey: "department",
    header: "Departamento",
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: () => (
      <div className="text-center">
        <EditEmployeeButton />
        <DeleteEmployeeButton />
      </div>
    ),
  },
];
