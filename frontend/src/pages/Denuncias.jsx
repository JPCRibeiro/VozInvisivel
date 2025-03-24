import { Link, useLoaderData } from "react-router-dom";

export default function DenunciasPage() {
  const { denuncias, error } = useLoaderData();

  return (
    <section>
      <h3>Denúncias</h3>
      {error ? (
        <div className="min-h-[300px] flex justify-center items-center">
          <p className="text-gray-500 text-center text-[20px] font-[500]">
            {error}
          </p>
        </div>
      ) : (
        <div className="topic-container">
          <ul className="flex flex-col gap-4">
            {denuncias.map((denuncia) => (
              <Link
                to={`/denuncias/${denuncia._id}`}
                key={denuncia._id}
                className="p-4 flex flex-col gap-2 shadow-md rounded-lg border border-gray-200"
              >
                <div>
                  <h4 className="font-[700] text-[20px]">{denuncia.empresa}</h4>
                  <p className="text-gray-600">
                    {denuncia.cidade}, {denuncia.estado}
                  </p>
                </div>
                <p className="line-clamp-2 max-sm:line-clamp-3">{denuncia.detalhes}</p>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}