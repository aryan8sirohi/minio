import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Header from "../components/navbar";
import { store } from "../app/store";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { Provider } from "react-redux";
import {  UserButton , SignIn} from "@clerk/nextjs/app-beta";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";

// import ClerkWrapper from '../../clerk.js'




const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
      <ClerkProvider>
      <SessionProvider session={session}>
      <Provider store={store}>
        <Head>
          <title>Groops</title>
          <meta name="description" content="Groops" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* {router.pathname === "/demo" && <Demo />} */}
         <SignedIn> 
          <UserButton />
        <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <Footer />
      </Provider>
    </SessionProvider>
 
       </ClerkProvider> 
  );
};

export default api.withTRPC(MyApp);
