"use client";
import { DebouncedInput } from "@/app/_components/debounced-input";
import { DataTable } from "@/app/_components/ui/datatable";
import { useEmployee } from "@/app/_hooks/useEmployee";
import { AddEmployeeButton } from "./_components/add-employee-button";
import { employeeColumns } from "./_components/employee-columns";

const Employees = () => {
  const { employees, lastPage, handlePartialFilter, search } = useEmployee();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <DebouncedInput
          placeholder="Buscar funcionários..."
          className="max-w-sm"
          value={search}
          onChange={(newValue) => handlePartialFilter({ search: newValue })}
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
