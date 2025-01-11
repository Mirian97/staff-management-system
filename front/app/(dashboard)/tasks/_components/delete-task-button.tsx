import { DeleteDialog } from "@/app/_components/DeleteDialog";

export const DeleteTaskButton = () => {
  return (
    <DeleteDialog description="Esta ação irá excluir a tarefa ''.Deseja excluir?" />
  );
};
