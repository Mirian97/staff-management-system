import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import {
  TDepartmentPayload,
  departmentService,
} from "../_service/department-service";

export const DEPARTMENTS_QUERY_KEY = "departments";

export function useDepartment() {
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
  };

  const { mutate: createDepartment } = useMutation({
    mutationFn: (payload: TDepartmentPayload) =>
      departmentService.create(payload),
    onSuccess: () => refetchData(),
    onError: (error) => console.error("Erro ao criar departamento:", error),
  });

  const { mutate: updateDepartment } = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: TDepartmentPayload;
    }) => departmentService.update(id, payload),
    onSuccess: () => refetchData(),
    onError: (error) => console.error("Erro ao atualizar departamento:", error),
  });

  const { mutate: deleteDepartment } = useMutation({
    mutationFn: (id: number) => departmentService.delete(id),
    onSuccess: () => refetchData(),
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
