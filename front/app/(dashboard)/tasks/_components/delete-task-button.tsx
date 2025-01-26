import { DeleteDialog } from "@/app/_components/delete-dialog";

export const DeleteTaskButton = () => {
  return (
    <DeleteDialog description="Esta ação irá excluir a tarefa ''.Deseja excluir?" />
  );
};
