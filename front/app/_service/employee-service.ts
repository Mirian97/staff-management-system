import { api } from "../_config/api";
import { EntityWithId } from "../_types/with-id-type";

export type TEmployeePayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  department_id: number;
};

export type TEmployee = EntityWithId<TEmployeePayload>;

class EmployeeService {
  private readonly basePath = "/employees";

  async getAll(): Promise<TEmployee[]> {
    const { data } = await api.get(this.basePath);
    return data;
  }

  async create(payload: TEmployeePayload): Promise<void> {
    await api.post(this.basePath, payload);
  }

  async update(id: number, payload: TEmployeePayload): Promise<void> {
    await api.put(`${this.basePath}/${id}`, payload);
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.basePath}/${id}`);
  }
}

export const employeeService = new EmployeeService();
