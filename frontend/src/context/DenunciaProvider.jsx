import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import DenunciaContext from "./DenunciaContext";

export const DenunciaProvider = ({ children }) => {
  const [denunciaCache, setDenunciaCache] = useState({});
  const [denunciasCache, setDenunciasCache] = useState([]); // Valor inicial é um array vazio
  const [isLoading, setIsLoading] = useState(true);

  // Busca as denúncias no carregamento inicial
  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const response = await axios.get("/api/denuncias");
        setDenunciasCache(Array.isArray(response.data) ? response.data : []); // Garante que seja um array
      } catch (error) {
        console.error("Erro ao buscar denúncias:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDenuncias();
  }, []);

  const salvarDenuncia = useCallback((id, data) => {
    setDenunciaCache((prev) => ({ ...prev, [id]: data }));
  }, []);

  const salvarDenuncias = useCallback((data) => {
    setDenunciasCache(Array.isArray(data) ? data : []); // Garante que seja um array
  }, []);

  return (
    <DenunciaContext.Provider value={{ denunciaCache, salvarDenuncia, denunciasCache, salvarDenuncias, isLoading }}>
      {children}
    </DenunciaContext.Provider>
  );
};