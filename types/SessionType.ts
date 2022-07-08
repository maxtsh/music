export type SessionType = {
  user: { accessToken: string };
};

export type SessionConfigType = {
  required: boolean;
  redirectTo: string;
  queryConfig: any;
};
