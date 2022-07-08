import { useQuery } from "react-query";
import { useRouter } from "next/router";
import type { SessionConfigType } from "types/SessionType";

export async function fetchSession() {
  const res = await fetch("/api/auth/session");
  const session = await res.json();
  if (Object.keys(session).length) {
    return session;
  }
  return null;
}

export function useSession<T>({
  required = true,
  redirectTo = "/auth",
  queryConfig = {
    staleTime: 60 * 1000 * 60 * 4, // 4 Hours
    refetchInterval: 60 * 1000 * 5, // 5 Minutes
  },
}: Partial<SessionConfigType>) {
  const router = useRouter();
  const query = useQuery<T>(["session"], fetchSession, {
    ...queryConfig,
    onSettled(data, error) {
      if (queryConfig.onSettled) queryConfig.onSettled(data, error);
      if (data || !required) return;
      router.push(redirectTo);
    },
  });
  return { data: query.data, status: query.status === "loading" };
}
