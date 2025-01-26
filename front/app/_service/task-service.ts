import { api } from "../_config/api";
import { TTaskSchema } from "../_schemas/task-schema";
import { PaginatedResponse } from "../_types/response-type";
import { EntityWithId } from "../_types/with-id-type";

export type TTask = EntityWithId<TTaskSchema>;

class TaskService {
  private readonly basePath = "/tasks";

  async getAll(page?: number): Promise<PaginatedResponse<TTask>> {
    const { data } = await api.get(this.basePath, {
      params: {
        page,
      },
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
