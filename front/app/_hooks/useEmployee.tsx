import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { TEmployeeSchema } from "../_schemas/employee-schema";
import { employeeService } from "../_service/employee-service";

export const EMPLOYEES_QUERY_KEY = "employees";

interface EmployeeHookProps {
  closeDialog?: () => void;
}

export function useEmployee({ closeDialog }: EmployeeHookProps = {}) {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const currentPage = searchParams?.get("page") ?? "1";

  const { data } = useQuery({
    queryKey: [EMPLOYEES_QUERY_KEY, currentPage],
    queryFn: () => employeeService.getAll({ page: Number(currentPage) }),
    select: (data) => ({
      lastPage: data.last_page,
      employees: data.data,
    }),
  });

  const refetchData = () => {
    queryClient.invalidateQueries({ queryKey: [EMPLOYEES_QUERY_KEY] });
    closeDialog?.();
  };

  const { mutate: createEmployee } = useMutation({
    mutationFn: (payload: TEmployeeSchema) => employeeService.create(payload),
    onSuccess: () => {
      toast.success("Funcionário criado!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao criar departamento:", error),
  });

  const { mutate: updateEmployee } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TEmployeeSchema }) =>
      employeeService.update(id, payload),
    onSuccess: () => {
      toast.success("Funcionário atualizadod!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao atualizar departamento:", error),
  });

  const { mutate: deleteEmployee } = useMutation({
    mutationFn: (id: number) => employeeService.delete(id),
    onSuccess: () => {
      toast.success("Funcionário criada!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao excluir departamento:", error),
  });

  return {
    ...data,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  };
}
