import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "../styles/Global";
import Progress from "../components/Progress";
import { useAnimatedRouteChange } from "../hooks";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { isAnimating } = useAnimatedRouteChange();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
        <GlobalStyles />
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp;
