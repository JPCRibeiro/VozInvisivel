import { useState, useCallback } from "react"; // Importe useCallback
import DenunciaContext from "./DenunciaContext";

export const DenunciaProvider = ({ children }) => {
  const [denunciaCache, setDenunciaCache] = useState(() => {
    const savedDenuncia = localStorage.getItem("denunciaCache");
    return savedDenuncia ? JSON.parse(savedDenuncia) : {};
  });
  const [denunciasCache, setDenunciasCache] = useState(() => {
    const savedDenuncias = localStorage.getItem("denunciasCache");
    return savedDenuncias ? JSON.parse(savedDenuncias) : null;
  });

  const salvarDenuncia = useCallback((id, data) => {
    setDenunciaCache((prev) => {
      const newCache = { ...prev, [id]: data };
      localStorage.setItem("denunciaCache", JSON.stringify(newCache));
      return newCache;
    });
  }, []); // Nenhuma dependência, a função é estável

  const salvarDenuncias = useCallback((data) => {
    setDenunciasCache(data);
    localStorage.setItem("denunciasCache", JSON.stringify(data));
  }, []); // Nenhuma dependência, a função é estável

  return (
    <DenunciaContext.Provider value={{ denunciaCache, salvarDenuncia, denunciasCache, salvarDenuncias }}>
      {children}
    </DenunciaContext.Provider>
  );
};