"use client";
import { DataTable } from "@/app/_components/ui/datatable";
import { Input } from "@/app/_components/ui/input";
import { useState } from "react";
import { AddEmployeeButton } from "./_components/add-employee-button";
import { employeeColumns } from "./_components/employee-columns";

const mockEmployees = [
  {
    id: 1,
    firstName: "João",
    lastName: "Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    department: "TI",
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Santos",
    email: "maria.santos@email.com",
    phone: "(11) 88888-8888",
    department: "RH",
  },
];

const Employees = () => {
  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredEmployees = mockEmployees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase())
  );

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
      <DataTable data={mockEmployees} columns={employeeColumns} />
    </div>
  );
};

export default Employees;
