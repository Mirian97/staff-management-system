"use client";
import { DataTable } from "@/app/_components/ui/datatable";
import { Input } from "@/app/_components/ui/input";
import { useDepartment } from "@/app/_hooks/useDepartment";
import { AddDepartmentButton } from "./_components/add-department-button";
import { departmentColumns } from "./_components/department-columns";

const Departments = () => {
  const { departments, lastPage, search, handlePartialFilter } =
    useDepartment();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Buscar departamentos..."
          className="max-w-sm"
          value={search}
          onChange={(e) => handlePartialFilter({ search: e.target.value })}
        />
        <AddDepartmentButton />
      </div>
      <DataTable
        columns={departmentColumns}
        data={departments || []}
        pageCount={lastPage}
      />
    </div>
  );
};

export default Departments;
