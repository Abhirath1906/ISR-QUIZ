
import "../pages/styles/global.css"
import "antd/dist/reset.css";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}