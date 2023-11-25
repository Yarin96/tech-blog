import Head from "next/head";
import About from "../components/about/about";

export default function Contact() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="ABOUT" content="Get to know me a little better" />
      </Head>
      <About />
    </>
  );
}
