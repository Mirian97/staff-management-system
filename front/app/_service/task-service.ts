import { identity, pickBy } from "lodash";
import { api } from "../_config/api";
import { TTaskSchema } from "../_schemas/task-schema";
import { GlobalSearchParams, PaginatedResponse } from "../_types/response-type";
import { EntityWithId } from "../_types/with-id-type";
import { TEmployee } from "./employee-service";

export type TTask = EntityWithId<
  TTaskSchema & {
    employee: TEmployee;
  }
>;

class TaskService {
  private readonly basePath = "/tasks";

  async getAll(params: GlobalSearchParams): Promise<PaginatedResponse<TTask>> {
    const cleanedParams = pickBy(params, identity);
    const { data } = await api.get(this.basePath, {
      params: cleanedParams,
    });
    return data;
  }

  async create(payload: TTaskSchema): Promise<void> {
    await api.post(this.basePath, payload);
  }

  async update(id: number, payload: TTaskSchema): Promise<void> {
    await api.put(`${this.basePath}/${id}`, payload);
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.basePath}/${id}`);
  }
}

export const taskService = new TaskService();
