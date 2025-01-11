"use client";
import { DataTable } from "@/app/_components/ui/datatable";
import { Input } from "@/app/_components/ui/input";
import { useState } from "react";
import { AddDepartmentButton } from "./_components/add-department-button";
import { departmentColumns } from "./_components/department-columns";

const mockDepartments = [
  { id: 1, name: "TI", employeeCount: 5 },
  { id: 2, name: "RH", employeeCount: 3 },
  { id: 3, name: "Financeiro", employeeCount: 4 },
];

const Departments = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Buscar departamentos..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddDepartmentButton />
      </div>
      <DataTable columns={departmentColumns} data={mockDepartments} />
    </div>
  );
};

export default Departments;
