import type { Method, AxiosRequestHeaders } from "axios";

export interface Properties {
  method: Method;
  data?: any;
  url: string;
  timeout?: number;
  headers?: AxiosRequestHeaders;
  enabled?: boolean;
}

export interface UseReactQueryProps extends Properties {
  key: string;
  options?: any;
}
