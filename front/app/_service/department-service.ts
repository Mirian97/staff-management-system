import { api } from "../_config/api";
import { PaginatedResponse } from "../_types/response-type";

export type TDepartment = {
  id: number;
  name: string;
  employees_count: string;
};

export type TDepartmentPayload = {
  name: string;
};

class DepartmentService {
  private readonly basePath = "/departments";

  async getAll(page?: number): Promise<PaginatedResponse<TDepartment>> {
    const { data } = await api.get(this.basePath, {
      params: {
        page,
      },
    });
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
