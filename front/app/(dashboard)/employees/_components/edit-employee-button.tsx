"use client";
import { Button } from "@/app/_components/ui/button";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { EmployeeForm } from "./employee-form";

export const EditEmployeeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="xs"
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="hover:text-green-600"
      >
        <Edit2 />
      </Button>
      <EmployeeForm isOpen={isOpen} setIsOpen={setIsOpen} employeeID={100} />
    </>
  );
};
