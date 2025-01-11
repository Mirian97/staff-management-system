import { api } from "../_config/api";

export type TDepartment = {
  id: number;
  name: string;
};

export type TDepartmentPayload = {
  name: string;
};

class DepartmentService {
  private readonly basePath = '/departments';

  async getAll(): Promise<TDepartment[]> {
    const { data } = await api.get(this.basePath);
    return data;
  }

  async create(payload: TDepartmentPayload): Promise<void> {
    await api.post(this.basePath, payload);
  }

  async update(id: number, payload: TDepartmentPayload): Promise<void> {
    await api.put(`${this.basePath}/${id}`, payload);
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.basePath}/${id}`);
  }
}

export const departmentService = new DepartmentService();