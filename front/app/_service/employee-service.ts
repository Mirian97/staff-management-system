import { identity, pickBy } from "lodash";
import { api } from "../_config/api";
import { TEmployeeSchema } from "../_schemas/employee-schema";
import {
  DescriptiveType,
  GlobalSearchParams,
  PaginatedResponse,
} from "../_types/response-type";
import { SelectOptionType } from "../_types/select-type";
import { EntityWithId } from "../_types/with-id-type";

export type TEmployeePayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  department_id: number;
  full_name: string;
  department: DescriptiveType;
};

export type TEmployee = EntityWithId<TEmployeePayload>;

class EmployeeService {
  private readonly basePath = "/employees";

  async getAll(
    params: GlobalSearchParams
  ): Promise<PaginatedResponse<TEmployee>> {
    const cleanedParams = pickBy(params, identity);
    const { data } = await api.get(this.basePath, {
      params: cleanedParams,
    });
    return data;
  }

  async listByName(name: string): Promise<SelectOptionType[]> {
    const { data } = await api.get(`${this.basePath}/listByName`, {
      params: { name },
    });
    return data;
  }

  async create(payload: TEmployeeSchema): Promise<void> {
    await api.post(this.basePath, payload);
  }

  async update(id: number, payload: TEmployeeSchema): Promise<void> {
    await api.put(`${this.basePath}/${id}`, payload);
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.basePath}/${id}`);
  }
}

export const employeeService = new EmployeeService();
