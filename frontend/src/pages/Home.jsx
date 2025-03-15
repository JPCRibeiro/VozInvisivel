import { useState, useEffect } from "react";
import Accordion from "../components/Accordion";
import discUrl from "../assets/disc.jpg";
import heroUrl from "../assets/hero-img.jpg";
import logoUrl from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    document.title = "Voz Invisível";

    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative z-0 w-full [box-shadow:rgba(0,_0,_0,_0.16)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_10px_0px]">
        <div className="w-full overflow-hidden relative">
          <div className="z-1 w-full h-full absolute top-0 left-0 bg-[linear-gradient(to_right,rgb(35_35_35/20%),rgb(35_35_35/20%),rgb(35_35_35/20%))]"></div>
          <div className="flex h-full relative">
            <img src={heroUrl} width={width}/>
          </div>
        </div>
      </div>
      <section>
        <div className="flex justify-center items-center gap-4 pt-4 font-bold text-[24px] text-[#383737]">
          <img src={logoUrl} className="w-[65px]" width="65"/>
          VOZ INVISÍVEL
        </div>
        <div className="flex justify-center gap-8 items-center py-4 max-sm:flex-col-reverse">
          <div className="w-[50%] max-sm:w-full flex flex-col gap-4 text-[18px] text-center">
            <p>A discriminação no ambiente de trabalho ainda é uma realidade para muitas pessoas. Casos de racismo, sexismo e outras formas de preconceito afetam não apenas a dignidade dos profissionais, mas também limitam oportunidades e reforçam desigualdades.</p>
            <p>Nossa plataforma foi criada para dar voz às vítimas, permitindo que elas relatem casos de discriminação <strong>de forma anônima e segura</strong>. Aqui, você pode denunciar sem medo, compartilhar experiências e contribuir para um mercado de trabalho mais justo e inclusivo.</p>
            <p><span className="text-[24px]">🚨</span> <strong>Se você foi vítima ou testemunhou uma injustiça, não se cale. Sua denúncia pode fazer a diferença!</strong></p>
          </div>
          <div className="flex my-5">
            <img src={discUrl} className="w-[350px] max-sm:w-[300px] rounded-[13%]"/>
          </div>
        </div>
        <div className="my-6">
          <Accordion />
        </div>
        <div className="flex items-center flex-col gap-4 text-center text-[18px] py-6">
          <p>Se você sofreu discriminação no trabalho e teme represálias, saiba que você não está sozinho!</p>
          <p>Nossa plataforma garante total anonimato para que você possa denunciar com segurança. Sua voz é importante e pode ajudar a combater a injustiça. Denuncie de forma segura e confidencial.</p>
          <Link to="/denunciar" className="button mt-2">
            Faça sua denúncia
          </Link>
        </div>
        <div>
          <h3>Mais informações</h3>
          <div className="topic-container gap-4 font-[500]">
            <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/combate_a_discriminacao" target="_blank" className="noticia" rel="noopener noreferrer">
              Combate à Discriminação no Trabalho - gov.br
            </a>
            <a href="https://tst.jus.br/-/tst-lan%C3%A7a-guias-para-fortalecer-combate-a-ass%C3%A9dio-viol%C3%AAncia-e-discrimina%C3%A7%C3%A3o-no-trabalho" target="_blank" className="noticia" rel="noopener noreferrer">
              TST lança guias para fortalecer combate a assédio, violência e discriminação no trabalho - tst.jus.br
            </a>
            <a href="https://www.planalto.gov.br/ccivil_03/leis/l9029.htm#:~:text=Art.,no%20inciso%20XXXIII%20do%20art." target="_blank" className="noticia" rel="noopener noreferrer">
              Lei nº 9.029 - planalto.gov.br
            </a>
            <a href="https://www.jusbrasil.com.br/artigos/discriminacao-no-ambiente-de-trabalho-consequencias-e-medidas-legais/1918807361" target="_blank" className="noticia" rel="noopener noreferrer">
            Discriminação no ambiente de trabalho: consequências e medidas legais - jusbrasil.com.br
            </a>
          </div>
        </div>
      </section>
    </>
  );
}