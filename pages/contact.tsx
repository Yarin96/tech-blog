import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="contact" content="A place to send me messages" />
      </Head>
      <ContactForm />
    </>
  );
}
