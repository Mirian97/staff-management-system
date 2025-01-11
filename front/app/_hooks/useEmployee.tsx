import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { employeeService, TEmployeePayload } from '../_service/employee-service';

export const EMPLOYEES_QUERY_KEY = 'employees';

export function useEmployee() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [EMPLOYEES_QUERY_KEY],
    queryFn: () => employeeService.getAll(),
  });

  const refetchData = () => {
    queryClient.invalidateQueries({ queryKey: [EMPLOYEES_QUERY_KEY] })
  }

  const { mutate: createDepartment } = useMutation({
    mutationFn: (payload: TEmployeePayload) => employeeService.create(payload),
    onSuccess: () => refetchData(),
    onError: (error) => console.error('Erro ao criar departamento:', error),
  });

  const { mutate: updateDepartment } = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: TEmployeePayload }) =>
      employeeService.update(id, payload),
    onSuccess: () => refetchData(),
    onError: (error) => console.error('Erro ao atualizar departamento:', error),
  });

  const { mutate: deleteDepartment } = useMutation({
    mutationFn: (id: number) => employeeService.delete(id),
    onSuccess: () => refetchData(),
    onError: (error) => console.error('Erro ao excluir departamento:', error),
  });

  return {
    departments: data,
    createDepartment,
    updateDepartment,
    deleteDepartment,
  };
}