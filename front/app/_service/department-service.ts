import { api } from "../_config/api";
import { TDepartmentSchema } from "../_schemas/department-schema";
import { PaginatedResponse } from "../_types/response-type";
import { EntityWithId } from "../_types/with-id-type";

export type TDepartment = EntityWithId<{
  employees_count: string;
  name: string;
}>;

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

  async create(payload: TDepartmentSchema): Promise<void> {
    await api.post(this.basePath, payload);
  }

  async update(id: number, payload: TDepartmentSchema): Promise<void> {
    await api.put(`${this.basePath}/${id}`, payload);
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.basePath}/${id}`);
  }
}

export const departmentService = new DepartmentService();
