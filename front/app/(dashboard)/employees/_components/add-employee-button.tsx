"use client";
import { Button } from "@/app/_components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EmployeeForm } from "./employee-form";

export const AddEmployeeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Plus className="mr-1 h-4 w-4" /> Novo Funcionário
      </Button>
      <EmployeeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
