import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Voz Invisível - Página não encontrada";
  }, []);

  return (
    <section>
      <div className="min-h-[500px] flex flex-col justify-center items-center text-center gap-6">
        <FontAwesomeIcon icon={faFaceSadCry} className="text-[40px]" />
        <div>
          <h2 className="text-[32px] font-bold">
            Ops! A Página não foi encontrada.
          </h2>
          <p className="text-[20px]">
            Pesquise novamente ou volte para a página inicial.
          </p>
        </div>
        <Link to="/" className="button">Voltar para a página inicial</Link>
      </div>
    </section>
  );
}