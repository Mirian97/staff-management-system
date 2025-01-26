import { DeleteDialog } from "@/app/_components/delete-dialog";
import { Button } from "@/app/_components/ui/button";
import { useDepartment } from "@/app/_hooks/useDepartment";
import { Trash2 } from "lucide-react";
import { FC, useState } from "react";
import { EditDepartmentButtonProps } from "./edit-department-button";

export const DeleteDepartmentButton: FC<EditDepartmentButtonProps> = ({
  id,
  department,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteDepartment } = useDepartment({
    closeDialog: () => setIsOpen(false),
  });

  return (
    <>
      <Button
        size="xs"
        variant="ghost"
        className="hover:text-red-700"
        onClick={() => setIsOpen(true)}
      >
        <Trash2 />
      </Button>
      <DeleteDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteAction={() => deleteDepartment(id)}
        description={`Esta ação irá excluir este departamento de '${department.name}'. Deseja excluir?`}
      />
    </>
  );
};
