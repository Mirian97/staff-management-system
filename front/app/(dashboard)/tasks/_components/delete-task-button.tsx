import { DeleteDialog } from "@/app/_components/delete-dialog";
import { Button } from "@/app/_components/ui/button";
import { useTask } from "@/app/_hooks/useTask";
import { DeleteDialogButtonProps } from "@/app/_types/delete-dialog-button";
import { Trash2 } from "lucide-react";
import { FC, useState } from "react";

export const DeleteTaskButton: FC<DeleteDialogButtonProps> = ({ id, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteTask } = useTask({
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
        deleteAction={() => deleteTask(id)}
        description={`Esta ação irá excluir a tarefa '${name}'.Deseja excluir?`}
      />
    </>
  );
};
