export const calculateTime = (seconds: number): string => {
  let output = "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  output = `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
  return output;
};
