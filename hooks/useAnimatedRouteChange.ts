import { useEffect } from "react";
import { useRouter } from "next/router";
import { useProgressStore } from "../store";

const useAnimatedRouteChange = () => {
  const router = useRouter();
  const setIsAnimating = useProgressStore((state: any) => state.setIsAnimating);
  const isAnimating = useProgressStore((state: any) => state.isAnimating);

  useEffect(() => {
    // Handlers
    const handleStartAnimating = () => setIsAnimating(true);
    const handleStopAnimating = () => setIsAnimating(false);

    // Start Animation on Route Change and End it with Completion or Error
    router.events.on("routeChangeStart", handleStartAnimating);
    router.events.on("routeChangeComplete", handleStopAnimating);
    router.events.on("routeChangeError", handleStopAnimating);

    // Remove events on Cleanup
    return () => {
      router.events.off("routeChangeStart", handleStartAnimating);
      router.events.off("routeChangeComplete", handleStopAnimating);
      router.events.off("routeChangeError", handleStopAnimating);
    };
  }, [router, setIsAnimating]);

  return { isAnimating };
};

export default useAnimatedRouteChange;
