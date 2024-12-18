import React, { FC } from "react";
import "../public/css/styles.css";
import { AppProps } from "next/app";
import Layout from "../src/components/layout/layout";
import "@volvo-cars/css/font-face.css";
import "@volvo-cars/css/tokens.css";
import "@volvo-cars/css/styles_all-media.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: FC<AppProps> = ({ Component, ...rest }) => {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...rest.pageProps} />
      </Layout>
    </React.StrictMode>
  );
};

export default App;
