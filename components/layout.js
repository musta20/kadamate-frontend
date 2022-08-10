import Head from "next/head";
import Header from "../components/Header";
import Footer from "./Footer";
export default function Layout({ children , title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
       {children}
      <Footer />
    </>
  );
}
