import Layout from "@/components/Layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import PageNotFound from "./PageNotFound";

export default function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps?.statusCode === 404) {
    return <PageNotFound />;
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
