import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { useDenuncia } from "../hooks/useDenuncia.jsx";

export default function DenunciasPage() {
  const { denunciasCache, salvarDenuncias } = useDenuncia();
  const [denuncias, setDenuncias] = useState(denunciasCache || []);
  const [isLoading, setIsLoading] = useState(!denunciasCache); 

  useEffect(() => {
    let timeoutId;
    
    const fetchDenuncias = async () => {
      try {
        const response = await axios.get("/api/denuncias");
        console.log("Resposta da API:", response.data);
        setDenuncias(Array.isArray(response.data) ? response.data : []);
        salvarDenuncias(response.data);
      } catch (error) {
        console.error("Erro ao buscar denúncias:", error);
        console.log("Resposta da API:", error.data);
      } finally {
        timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchDenuncias();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [denunciasCache, salvarDenuncias]);

  useEffect(() => {
    document.title = "Voz Invisível - Denúncias";
  }, []);

  if (isLoading) {
    return (
      <Loader text="Carregando"/>
    );
  }

  return (
    <section>
      <h3>Denúncias</h3>
      <div className="topic-container">
        {denuncias.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {denuncias.map((denuncia) => (
              <Link to={`/denuncias/${denuncia._id}`} key={denuncia._id} className="p-4 flex flex-col gap-2 shadow-md rounded-lg border border-gray-200">
                <div>
                  <h4 className="font-[700] text-[20px]">{denuncia.empresa}</h4>
                  <p className="text-gray-600">{denuncia.cidade}, {denuncia.estado}</p>
                </div>
                <p className="line-clamp-2 max-sm:line-clamp-3">{denuncia.detalhes}</p>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">Nenhuma denúncia encontrada.</p>
        )}
      </div>
    </section>
  );
}
