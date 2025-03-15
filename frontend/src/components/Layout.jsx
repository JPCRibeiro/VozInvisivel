import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header/>
      <ScrollRestoration/>
      <main className="mt-[82px]">
        <Outlet/> 
      </main>
      <Footer/>
    </>
  );
}
