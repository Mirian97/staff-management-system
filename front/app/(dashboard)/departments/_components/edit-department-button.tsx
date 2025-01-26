"use client";
import { Button } from "@/app/_components/ui/button";
import { TDepartmentSchema } from "@/app/_schemas/department-schema";
import { EntityId } from "@/app/_types/with-id-type";
import { Edit2 } from "lucide-react";
import { FC, useState } from "react";
import { DepartmentForm } from "./department-form";

export interface EditDepartmentButtonProps extends EntityId {
  department: TDepartmentSchema;
}

export const EditDepartmentButton: FC<EditDepartmentButtonProps> = ({
  id,
  department,
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
      <DepartmentForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        departmentID={id}
        department={department}
      />
    </>
  );
};
