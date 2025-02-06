"use client";
import { Button } from "@/app/_components/ui/button";
import { TEmployeeSchema } from "@/app/_schemas/employee-schema";
import { EntityId } from "@/app/_types/with-id-type";
import { Edit2 } from "lucide-react";
import { FC, useState } from "react";
import { EmployeeForm } from "./employee-form";

interface EditEmployeeButtonProps extends EntityId {
  employee: TEmployeeSchema;
}

export const EditEmployeeButton: FC<EditEmployeeButtonProps> = ({
  employee,
  id,
}) => {
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
      <EmployeeForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        employeeID={id}
        employee={employee}
      />
    </>
  );
};
