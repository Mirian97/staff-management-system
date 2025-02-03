import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { TDepartmentSchema } from "../_schemas/department-schema";
import { departmentService } from "../_service/department-service";
import { GlobalSearchParams } from "../_types/response-type";

export const DEPARTMENTS_QUERY_KEY = "departments";

interface DepartmentHookProps {
  closeDialog?: () => void;
}

export function useDepartment({ closeDialog }: DepartmentHookProps = {}) {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const currentPage = searchParams?.get("page") ?? "1";
  const [filters, setFilters] = useState<GlobalSearchParams>();

  const handlePartialFilter = (partial: Partial<GlobalSearchParams>) => {
    setFilters((current) => ({ ...current, partial }));
  };

  const { data } = useQuery({
    queryKey: [DEPARTMENTS_QUERY_KEY, currentPage, filters?.search],
    queryFn: () =>
      departmentService.getAll({
        page: Number(currentPage),
        search: filters?.search,
      }),
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
      toast.success("Departamento excluído!");
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
    handlePartialFilter,
    ...filters,
  };
}
