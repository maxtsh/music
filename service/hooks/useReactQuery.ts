import { useQuery, UseQueryResult } from "react-query";
import Api from "service";
import type { Properties } from "service/types";

interface UseReactQueryProps extends Properties {
  key: string;
  options?: any;
}

// Custom Hook to Async Call data using Custom API and React Query
const useReactQuery = <DataType>({
  key,
  url,
  method,
  data: bodyData,
  headers,
  timeout,
}: UseReactQueryProps): UseQueryResult<DataType> => {
  const useQueryResults = useQuery(key, () =>
    Api({
      url,
      method,
      data: bodyData,
      headers,
      timeout,
    })
  );
  return useQueryResults;
};

export default useReactQuery;
