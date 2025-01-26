import { useQuery } from "@tanstack/react-query";
import { statisticService } from "../_service/statistic-service";

export const STATISTIC_COUNT_QUERY_KEY = "statistic-count";

const useStatistic = () => {
  const { data: counts } = useQuery({
    queryKey: [STATISTIC_COUNT_QUERY_KEY],
    queryFn: () => statisticService.counts(),
  });

  return {
    counts,
  };
};

export default useStatistic;
