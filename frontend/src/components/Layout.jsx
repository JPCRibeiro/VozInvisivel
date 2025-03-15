import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { DenunciaProvider } from "../context/DenunciaProvider.jsx";

export default function Layout() {
  return (
    <DenunciaProvider>
      <Header/>
      <ScrollRestoration/>
      <main className="mt-[82px]">
        <Outlet/> 
      </main>
      <Footer/>
    </DenunciaProvider>
  );
}
