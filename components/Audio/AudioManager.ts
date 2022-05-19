import { useState, useRef, useEffect } from "react";
import { calculateTime } from "../../utils/functions";

const AudioManager = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<string>("00:00");
  const [time, setTime] = useState<string>("00:00");
  const audioPlayerRef = useRef<any>(null);
  const progressRef = useRef<any>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if ((audioPlayerRef?.current?.duration, progressRef?.current)) {
      const seconds = Math.floor(audioPlayerRef.current.duration);
      progressRef.current.max = seconds;
      setDuration(calculateTime(seconds));
    }
  }, [
    audioPlayerRef?.current?.loadedmetadata,
    audioPlayerRef?.current?.readyState,
    progressRef,
  ]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioPlayerRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayerRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleChangeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    audioPlayerRef.current.currentTime = e.target.value;
    setTime(calculateTime(Math.floor(Number(e.target.value))));
  };

  const whilePlaying = () => {
    progressRef.current.value = audioPlayerRef.current.currentTime;
    setTime(
      calculateTime(Math.floor(Number(audioPlayerRef.current.currentTime)))
    );
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handleForward = () => {
    const currTime = audioPlayerRef.current.currentTime;
    audioPlayerRef.current.currentTime = currTime + 30;
    progressRef.current.value = currTime + 30;
    setTime(calculateTime(Math.floor(Number(currTime + 30))));
  };

  const handleBackward = () => {
    const currTime = audioPlayerRef.current.currentTime;
    audioPlayerRef.current.currentTime = currTime - 30;
    progressRef.current.value = currTime - 30;
    setTime(calculateTime(Math.floor(Number(currTime - 30))));
  };

  return {
    time,
    duration,
    audioPlayerRef,
    progressRef,
    isPlaying,
    handleChangeSlider,
    handlePlayPause,
    handleForward,
    handleBackward,
  };
};

export default AudioManager;
