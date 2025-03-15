import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/Home.jsx";
import FormPage from "./pages/Form.jsx";
import DenunciasPage from "./pages/Denuncias.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import DenunciaPage from "./pages/Denuncia.jsx";

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
