import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/Global";
import Progress from "../components/Progress";
import { useProgressStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const setIsAnimating = useProgressStore((state: any) => state.setIsAnimating);
  const isAnimating = useProgressStore((state: any) => state.isAnimating);

  useEffect(() => {
    const handleStartAnimating = () => setIsAnimating(true);
    const handleStopAnimating = () => setIsAnimating(false);

    router.events.on("routeChangeStart", handleStartAnimating);
    router.events.on("routeChangeComplete", handleStopAnimating);
    router.events.on("routeChangeError", handleStopAnimating);

    return () => {
      router.events.off("routeChangeStart", handleStartAnimating);
      router.events.off("routeChangeComplete", handleStopAnimating);
      router.events.off("routeChangeError", handleStopAnimating);
    };
  }, [router, setIsAnimating]);

  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
