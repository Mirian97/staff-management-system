"use client"
import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/datatable";
import { Input } from "@/app/_components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { employeeColumns } from "./_components/employee-columns";
import NewEmployeeModal from "./_components/new-employee-modal";

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
        <Button onClick={() => setIsNewDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Novo Funcionário
        </Button>
      </div>
      <DataTable data={mockEmployees} columns={employeeColumns} />
      <NewEmployeeModal
        open={isNewDialogOpen}
        onOpenChange={setIsNewDialogOpen}
      />
    </div>
  );
};

export default Employees;