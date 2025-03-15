import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useDenuncia } from "../hooks/useDenuncia.jsx";

export default function DenunciasPage() {
  const { denunciasCache, isLoading } = useDenuncia();

  useEffect(() => {
    document.title = "Voz Invisível - Denúncias";
  }, []);

  // Exibe "Carregando" apenas se os dados ainda não foram carregados
  if (isLoading) {
    return <Loader text="Carregando" />;
  }

  // Verifica se denunciasCache é um array antes de usar .map()
  const denuncias = Array.isArray(denunciasCache) ? denunciasCache : [];

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
          <div className="min-h-[300px] flex justify-center items-center">
            <p className="text-gray-500 text-center text-[18px]">Nenhuma denúncia encontrada.</p>
          </div>
        )}
      </div>
    </section>
  );
}