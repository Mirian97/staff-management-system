import { DeleteDialog } from "@/app/_components/delete-dialog";
import { Button } from "@/app/_components/ui/button";
import { useEmployee } from "@/app/_hooks/useEmployee";
import { DeleteDialogButtonProps } from "@/app/_types/delete-dialog-button";
import { Trash2 } from "lucide-react";
import { FC, useState } from "react";

export const DeleteEmployeeButton: FC<DeleteDialogButtonProps> = ({
  id,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteEmployee } = useEmployee({
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
        deleteAction={() => deleteEmployee(id)}
        description={`Esta ação irá excluir o funcionário '${name}'.Deseja excluir?`}
      />
    </>
  );
};
