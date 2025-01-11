"use client";
import { Button } from "@/app/_components/ui/button";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { DepartmentForm } from "./department-form";

export const EditDepartmentButton = () => {
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
      <DepartmentForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        departmentID={100}
      />
    </>
  );
};
