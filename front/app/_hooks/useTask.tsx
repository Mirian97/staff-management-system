import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { defaultGlobalSearchParams } from "../_constants/global-search-params";
import { TTaskSchema } from "../_schemas/task-schema";
import { taskService } from "../_service/task-service";
import { GlobalSearchParams } from "../_types/response-type";

export const TASKS_QUERY_KEY = "tasks";

interface TaskHookProps {
  closeDialog?: () => void;
}

export function useTask({ closeDialog }: TaskHookProps = {}) {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const currentPage = searchParams?.get("page") ?? "1";
  const [filters, setFilters] = useState<GlobalSearchParams>(
    defaultGlobalSearchParams
  );
  const handlePartialFilter = (partial: Partial<GlobalSearchParams>) => {
    setFilters((current) => ({ ...current, ...partial }));
  };

  const { data } = useQuery({
    queryKey: [TASKS_QUERY_KEY, currentPage, filters],
    queryFn: () =>
      taskService.getAll({ page: Number(currentPage), search: filters.search }),
    select: (data) => ({
      lastPage: data.last_page,
      tasks: data.data,
    }),
  });

  const refetchData = () => {
    queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
    closeDialog?.();
  };

  const { mutate: createTask } = useMutation({
    mutationFn: (payload: TTaskSchema) => taskService.create(payload),
    onSuccess: () => {
      toast.success("Tarefa criada!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao criar departamento:", error),
  });

  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TTaskSchema }) =>
      taskService.update(id, payload),
    onSuccess: () => {
      toast.success("Tarefa atualizada!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao atualizar departamento:", error),
  });

  const { mutate: deleteTask } = useMutation({
    mutationFn: (id: number) => taskService.delete(id),
    onSuccess: () => {
      toast.success("Tarefa excluída!");
      refetchData();
    },
    onError: (error) => console.error("Erro ao excluir departamento:", error),
  });

  return {
    tasks: data?.tasks,
    lastPage: data?.lastPage,
    createTask,
    updateTask,
    deleteTask,
    ...filters,
    handlePartialFilter,
  };
}
