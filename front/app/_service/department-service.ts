import { identity, pickBy } from "lodash";
import { api } from "../_config/api";
import { TDepartmentSchema } from "../_schemas/department-schema";
import { GlobalSearchParams, PaginatedResponse } from "../_types/response-type";
import { EntityWithId } from "../_types/with-id-type";

export type TDepartment = EntityWithId<{
  employees_count: string;
  name: string;
}>;

class DepartmentService {
  private readonly basePath = "/departments";

  async getAll(
    params: GlobalSearchParams
  ): Promise<PaginatedResponse<TDepartment>> {
    const cleanedParams = pickBy(params, identity);
    const { data } = await api.get(this.basePath, {
      params: cleanedParams,
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
