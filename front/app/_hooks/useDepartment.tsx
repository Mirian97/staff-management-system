import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { TDepartmentSchema } from "../_schemas/department-schema";
import { departmentService } from "../_service/department-service";

export const DEPARTMENTS_QUERY_KEY = "departments";

interface DepartmentsHookProps {
  closeDialog?: () => void;
}

export function useDepartment({ closeDialog }: DepartmentsHookProps = {}) {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const currentPage = searchParams?.get("page") ?? "1";

  const { data } = useQuery({
    queryKey: [DEPARTMENTS_QUERY_KEY, currentPage],
    queryFn: () => departmentService.getAll(Number(currentPage)),
    select: (data) => ({
      lastPage: data.last_page,
      departments: data.data,
    }),
  });

  const refetchData = () => {
    queryClient.invalidateQueries({ queryKey: [DEPARTMENTS_QUERY_KEY] });
    closeDialog?.();
  };

  const { mutate: createDepartment } = useMutation({
    mutationFn: (payload: TDepartmentSchema) =>
      departmentService.create(payload),
    onSuccess: () => {
      toast.success("Departamento criado!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao criar departamento:", error),
  });

  const { mutate: updateDepartment } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TDepartmentSchema }) =>
      departmentService.update(id, payload),
    onSuccess: () => {
      toast.success("Departamento atualizado!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao atualizar departamento:", error),
  });

  const { mutate: deleteDepartment } = useMutation({
    mutationFn: (id: number) => departmentService.delete(id),
    onSuccess: () => {
      toast.success("Departamento deletado!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao excluir departamento:", error),
  });

  return {
    departments: data?.departments,
    lastPage: data?.lastPage,
    createDepartment,
    updateDepartment,
    deleteDepartment,
  };
}
