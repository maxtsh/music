import * as React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body dir="ltr">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
