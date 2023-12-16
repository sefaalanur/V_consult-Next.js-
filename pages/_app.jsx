import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css";
import Layout from "../layout/Layout";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps: {session, ...pageProps }  }) {
  return (
    <SessionProvider session={session}>
        <Layout>
        <ToastContainer />
          <Component {...pageProps} />
        </Layout>
    </SessionProvider>
  );
}

export default MyApp;