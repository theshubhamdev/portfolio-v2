import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { NavBar, Preloader, Footer } from '@/components';
import { useEffect, useState } from 'react';

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
      <Preloader load={load} />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
