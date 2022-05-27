import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { signIn, getProviders } from "next-auth/react";
import Image from "next/image";
import Header from "components/Header";
import { Container } from "styles/pages/auth/Auth.styles";
import type { IProps } from "types/Auth.types";

const Auth: NextPage<IProps> = ({ providers }) => {
  const handleLogin = (proverId: string) => () => {
    signIn(proverId, { callbackUrl: "/" }); // a callback to return after login successfull
  };

  return (
    <>
      <Header />
      <Container>
        <div className="title">
          <Image
            width="240px"
            height="70px"
            src="/assets/spotify_logo.png"
            alt="spotify-logo"
          />
          <h1 className="title-text">LOGIN</h1>
          <p className="title-sub">
            Currently We are only supporting Spotify APIs, we will develop more
            providers soon!
          </p>
        </div>
        <div className="providers">
          {Object.values(providers || {}).map((provider) => (
            <div className="providers-item" key={provider.id}>
              <button
                className="providers-item-button btn"
                onClick={handleLogin(provider.id)}
              >
                Login With {provider.name}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Auth;

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<IProps>
> => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
