import { useState, useCallback, useEffect } from "react";
import DenunciaContext from "./DenunciaContext";

export const DenunciaProvider = ({ children }) => {
  // Verifica se está no cliente antes de acessar o localStorage
  const [denunciaCache, setDenunciaCache] = useState({});
  const [denunciasCache, setDenunciasCache] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDenuncia = localStorage.getItem("denunciaCache");
      const savedDenuncias = localStorage.getItem("denunciasCache");
      setDenunciaCache(savedDenuncia ? JSON.parse(savedDenuncia) : {});
      setDenunciasCache(savedDenuncias ? JSON.parse(savedDenuncias) : null);
    }
  }, []);

  const salvarDenuncia = useCallback((id, data) => {
    if (typeof window !== "undefined") {
      setDenunciaCache((prev) => {
        const newCache = { ...prev, [id]: data };
        localStorage.setItem("denunciaCache", JSON.stringify(newCache));
        return newCache;
      });
    }
  }, []);

  const salvarDenuncias = useCallback((data) => {
    if (typeof window !== "undefined") {
      setDenunciasCache(data);
      localStorage.setItem("denunciasCache", JSON.stringify(data));
    }
  }, []);

  return (
    <DenunciaContext.Provider value={{ denunciaCache, salvarDenuncia, denunciasCache, salvarDenuncias }}>
      {children}
    </DenunciaContext.Provider>
  );
};