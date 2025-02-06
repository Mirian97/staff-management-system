"use client";
import { DataTable } from "@/app/_components/ui/datatable";
import { Input } from "@/app/_components/ui/input";
import { useEmployee } from "@/app/_hooks/useEmployee";
import { useState } from "react";
import { AddEmployeeButton } from "./_components/add-employee-button";
import { employeeColumns } from "./_components/employee-columns";

const Employees = () => {
  const [search, setSearch] = useState("");
  const { employees, lastPage } = useEmployee();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Buscar funcionários..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddEmployeeButton />
      </div>
      <DataTable
        data={employees || []}
        columns={employeeColumns}
        pageCount={lastPage}
      />
    </div>
  );
};

export default Employees;
