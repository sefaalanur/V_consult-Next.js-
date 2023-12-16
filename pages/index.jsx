import Head from "next/head";
import Home from "./home";
export default function Index() {
  return (
    <div>
      <Head>
        <title>V Consult</title>
        <link rel="icon" href="/images/V.png" />
      </Head>
      <Home />
    </div>
  );
}