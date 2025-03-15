import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDenuncia } from "../hooks/useDenuncia.jsx";
import Loader from "../components/Loader.jsx";

export default function DenunciaPage() {
  const { id } = useParams();
  const { denunciaCache, salvarDenuncia } = useDenuncia();
  const [denuncia, setDenuncia] = useState(denunciaCache[id] || null);
  const [isLoading, setIsLoading] = useState(!denunciaCache[id]);

  useEffect(() => {
    let timeoutId;

    const fetchDenuncia = async () => {
      try {
        const response = await axios.get(`http://voz-invisivel.sa-east-1.elasticbeanstalk.com/denuncias/${id}`);
        setDenuncia(response.data);
        salvarDenuncia(id, response.data);
      } catch (error) {
        console.error("Erro ao buscar denúncia:", error);
      } finally {
        timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchDenuncia();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [id, denunciaCache, salvarDenuncia]);

  useEffect(() => {
    document.title = "Voz Invisível - Denúncia";
  }, []);

  if (isLoading) {
    return <Loader text="Carregando" />;
  }

  if (!denuncia) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Denúncia não encontrada.</p>
      </div>
    );
  }

  const formatArray = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr.slice(0, -1).join(", ") + " e " + arr[arr.length - 1];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Data inválida";
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <section>
      <h3>Denúncia</h3>
      <div className="topic-container">
        <div className="bg-white shadow-md rounded-lg !p-6 border border-gray-200">
          <h2 className="text-[24px] font-bold">{denuncia.empresa}</h2>
          <p className="text-[15px]">
            {denuncia.cidade}, {denuncia.estado} <span>•</span> {formatDate(denuncia.data)}
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <p>
              <span className="font-semibold">Setor:</span> {denuncia.setor}
            </p>
            <p>
              <span className="font-semibold">Envolvimento:</span> {denuncia.envolvimento}
            </p>
            <p>
              <span className="font-semibold">Tentativa de Solução:</span> {denuncia.tentativa}
            </p>
          </div>
          <div className="mt-5 px-6 py-4 bg-[#E5E7EB] rounded-lg flex flex-col gap-2">
            <p className="text-[18px] font-semibold">
              Discriminação: {formatArray(denuncia.discriminacao)}
            </p>
            <p>{denuncia.detalhes}</p>
          </div>
        </div>
      </div>
    </section>
  );
}