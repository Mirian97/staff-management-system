import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { taskService, TTaskPayload } from '../_service/task-service';

export const TASKS_QUERY_KEY = 'employees';

export function useTask() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [TASKS_QUERY_KEY],
    queryFn: () => taskService.getAll(),
  });

  const refetchData = () => {
    queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] })
  }

  const { mutate: createDepartment } = useMutation({
    mutationFn: (payload: TTaskPayload) => taskService.create(payload),
    onSuccess: refetchData,
    onError: (error) => console.error('Erro ao criar departamento:', error),
  });

  const { mutate: updateDepartment } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TTaskPayload }) =>
      taskService.update(id, payload),
    onSuccess: refetchData,
    onError: (error) => console.error('Erro ao atualizar departamento:', error),
  });

  const { mutate: deleteDepartment } = useMutation({
    mutationFn: (id: number) => taskService.delete(id),
    onSuccess: refetchData,
    onError: (error) => console.error('Erro ao excluir departamento:', error),
  });

  return {
    departments: data,
    createDepartment,
    updateDepartment,
    deleteDepartment,
  };
}