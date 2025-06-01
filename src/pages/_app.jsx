// pages/_app.js
import "../styles/index.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../layout/loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader for 2 seconds on first load

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(timeout);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? <Loader /> : <Component {...pageProps} />}
      <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}
