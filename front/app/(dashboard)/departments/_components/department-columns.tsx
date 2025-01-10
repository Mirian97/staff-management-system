"use client";

import { Button } from "@/app/_components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash2 } from "lucide-react";

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
      header: "Nome"
    },
    {
      accessorKey: "employeeCount",
      header: "Funcionários"
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