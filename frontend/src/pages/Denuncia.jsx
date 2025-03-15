import { useLoaderData } from "react-router-dom";

export default function DenunciaPage() {
  const { denuncia, error } = useLoaderData();

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
      {error ? (
        <div className="min-h-[300px] flex justify-center items-center">
          <p className="text-gray-500 text-center text-[18px]">Denúncia não encontrada.</p>
        </div>
      ) : (
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
              Discriminação: {Array.isArray(denuncia.discriminacao) ? formatArray(denuncia.discriminacao) : "Nenhuma discriminação registrada."}
            </p>
            <p>{denuncia.detalhes}</p>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}