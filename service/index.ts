import axios from "axios";
import type { Properties } from "./types";

const AxiosInstance = axios.create({ timeout: 20000 });

const Api = async ({
  url,
  method,
  data,
  headers,
  timeout,
}: Properties): Promise<any> => {
  const AuthorizationToken =
    process.env.ACCESS_TOKEN || process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  try {
    const res = await AxiosInstance.request({
      url,
      method,
      data,
      timeout,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${AuthorizationToken}`,
        ...headers,
      },
    });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err: any) {
    return {
      status: err.status,
      message: err?.response?.message,
    };
  }
};

export default Api;
