import { api } from "../_config/api";

interface StatisticCount {
  employee_count: number;
  task_count: number;
  department_count: number;
}

class StatisticService {
  async counts() {
    const { data } = await api.get<StatisticCount>("/statistic");
    return data;
  }
}

export const statisticService = new StatisticService();
