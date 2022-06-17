import { useQuery, UseQueryResult } from "react-query";
import Api from "service";
import type { UseReactQueryProps } from "service/types";

// Custom Hook to Async Call data using Custom API and React Query
const useReactQuery = <DataType>({
  key,
  url,
  method,
  data: bodyData,
  headers,
  timeout,
  enabled,
}: UseReactQueryProps): UseQueryResult<DataType> => {
  const useQueryResults = useQuery(
    key,
    () =>
      Api({
        url,
        method,
        data: bodyData,
        headers,
        timeout,
      }),
    { enabled }
  );
  return useQueryResults;
};

export default useReactQuery;
