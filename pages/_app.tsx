import GlobalStyles from "../styles/Global";
import Progress from "../components/Progress";
import { useAnimatedRouteChange } from "../hooks";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { isAnimating } = useAnimatedRouteChange();
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
export default MyApp;
