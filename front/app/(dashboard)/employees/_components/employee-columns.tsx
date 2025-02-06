"use client";
import { TEmployee } from "@/app/_service/employee-service";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteEmployeeButton } from "./delete-employee-button";
import { EditEmployeeButton } from "./edit-employee-button";

export const employeeColumns: ColumnDef<TEmployee>[] = [
  {
    accessorKey: "full_name",
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
    cell: ({ row }) => (
      <div className="line-clamp-1">{row.original.department.name}</div>
    ),
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: ({
      row: {
        original: { department, full_name, ...employee },
      },
    }) => (
      <div className="text-center">
        <EditEmployeeButton
          employee={{
            ...employee,
            department_name: department.name,
            department_id: department.id.toString(),
            confirm_password: "",
            password: "",
          }}
          id={employee.id}
        />
        <DeleteEmployeeButton />
      </div>
    ),
  },
];
