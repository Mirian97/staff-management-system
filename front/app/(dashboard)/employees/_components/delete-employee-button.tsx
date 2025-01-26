import { DeleteDialog } from "@/app/_components/delete-dialog";

export const DeleteEmployeeButton = () => {
  return (
    <DeleteDialog description="Esta ação irá excluir o funcionário ''.Deseja excluir?" />
  );
};
