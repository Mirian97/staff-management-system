"use client";

import { Button } from "@/app/_components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash2 } from "lucide-react";

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
      header: "Nome"
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Telefone"
    },
    {
      accessorKey: "department",
      header: "Departamento"
    },
    {
      accessorKey: "actions",
      header: () => <div className="text-center">Ações</div>,
      cell: () => (
        <div className="text-center">
          <Button variant="ghost" size="xs">
            <Edit2 />
          </Button>
          <Button variant="ghost" size="xs">
            <Trash2 />
          </Button>
        </div>
      )
    }
  ];