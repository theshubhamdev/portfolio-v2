import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { NavBar, Preloader, Footer } from "@/components";
import { useEffect, useState } from "react";
import Head from "next/head";
// import homeLogo from "../../../public/home-coder.png";

export default function App({ Component, pageProps }) {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Head>
        {/* <meta name="title" content="Personal Portfolio || The Shubham" />
        <meta
          name="description"
          content="I am a Passionate computer science engineer with Real-World Experience in software development."
        />
        <meta
          name="keywords"
          content="React Native Developer, Reactjs Developer, React Native, Nextjs Developer, React AWS Developer, Full Stack Developer, Mern Stack Developer, Personal Website, Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" /> */}
        {/* <!-- Primary Meta Tags --> */}
        <title>Personal Portfolio || The Shubham</title>
        <meta name="title" content="Personal Portfolio || The Shubham" />
        <meta
          name="description"
          content="Passionate computer science engineer with real-world experience in software development seeking to apply theoretical and practical knowledge to innovate and solve complex problems."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theshubham.in/" />
        <meta property="og:title" content="Personal Portfolio || The Shubham" />
        <meta
          property="og:description"
          content="Passionate computer science engineer with real-world experience in software development seeking to apply theoretical and practical knowledge to innovate and solve complex problems."
        />
        <meta property="og:image" content="https://www.theshubham.in/me.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.theshubham.in/" />
        <meta
          property="twitter:title"
          content="Personal Portfolio || The Shubham"
        />
        <meta
          property="twitter:description"
          content="Passionate computer science engineer with real-world experience in software development seeking to apply theoretical and practical knowledge to innovate and solve complex problems."
        />
        <meta property="twitter:image" content="https://www.theshubham.in/me.jpg" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="https://www.theshubham.in/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://www.theshubham.in/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://www.theshubham.in/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://www.theshubham.in/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://www.theshubham.in/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://www.theshubham.in/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://www.theshubham.in/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://www.theshubham.in/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.theshubham.in/apple-touch-icon-180x180.png"
        />
      </Head>
      <Preloader load={load} />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
