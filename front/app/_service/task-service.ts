import { api } from "../_config/api";
import { EntityWithId } from "../_types/with-id-type";

export type TTaskPayload = {
  title: string;
  description: string;
  assignee_id: number;
  due_date: string;
};

export type TTask = EntityWithId<TTaskPayload>;

class TaskService {
  private readonly basePath = "/tasks";

  async getAll(): Promise<TTask[]> {
    const { data } = await api.get(this.basePath);
    return data;
  }

  async create(payload: TTaskPayload): Promise<void> {
    await api.post(this.basePath, payload);
  }

  async update(id: number, payload: TTaskPayload): Promise<void> {
    await api.put(`${this.basePath}/${id}`, payload);
  }

  async delete(id: number): Promise<void> {
    await api.delete(`${this.basePath}/${id}`);
  }
}

export const taskService = new TaskService();
