import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import FormPage from "./pages/Form";
import DenunciasPage from "./pages/Denuncias";
import NotFoundPage from "./pages/NotFound";
import DenunciaPage from "./pages/Denuncia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <HomePage/> },
      { path: "/denunciar", element: <FormPage/> },
      { path: "/denuncias", element: <DenunciasPage/> },
      { path: "/denuncias/:id", element: <DenunciaPage/> },
      { path: "*", element: <NotFoundPage/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}/>;
}
