const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-follow-read",
].join(",");

const params = { scope: scopes };
const queryParamString = new URLSearchParams(params);

export const TOKEN_URL = "https://accounts.spotify.com/api/token";
export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;
export default scopes;
