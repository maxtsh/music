import type { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import type { BuiltInProviderType } from "next-auth/providers";

export interface IProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}
