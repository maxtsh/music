import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../styles/Global";
import Progress from "../components/Progress";
import { useAnimatedRouteChange } from "../hooks";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { isAnimating } = useAnimatedRouteChange();
  return (
    <SessionProvider session={session}>
      {/* This is for Next Auth States */}
      <QueryClientProvider client={queryClient}>
        {/* This is for React Query States*/}
        <Hydrate state={pageProps.dehydratedState}>
          <Progress isAnimating={isAnimating} />
          <Component {...pageProps} />
          <GlobalStyles />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}
export default MyApp;
