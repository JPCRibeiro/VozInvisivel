import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const accordionData = [
  {
    question: "O que pode ser considerado discriminação no trabalho?",
    answer: "Discriminação no trabalho são práticas injustas que tratam colaboradores de maneira desigual com base em características pessoais, não em seu desempenho. Isso ocorre quando um indivíduo é desconsiderado ou desfavorecido devido a atributos como gênero, idade, raça, orientação sexual ou deficiência."
  },
  {
    question: "O que a CLT diz sobre discriminação?",
    answer: "Art. 1º Fica proibida a adoção de qualquer prática discriminatória e limitativa para efeito de acesso a relação de emprego, ou sua manutenção, por motivo de sexo, origem, raça, cor, estado civil, situação familiar ou idade, ressalvadas, neste caso, as hipóteses de proteção ao menor previstas no inciso XXXIII do art."
  },
  {
    question: "Como provar discriminação no trabalho?",
    answer: "Para provar discriminação no trabalho, é possível reunir evidências como depoimentos, registros de reclamações, mensagens discriminatórias e testemunhos."
  }
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionItemBodiesRef = useRef([]); 

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-2 [box-shadow:0_2px_5px_0_rgba(0,_0,_0,_0.164)] rounded-[6px]">
          <div className={`flex items-center gap-3 px-4 py-3 text-white cursor-pointer bg-[#383737] rounded-[6px] ease-out duration-300 select-none ${ activeIndex === index ? "rounded-b-[0px]" : "" }`} onClick={() => handleClick(index)}>
            <FontAwesomeIcon icon={faCaretRight} className={`duration-200 text-[18px] ${activeIndex === index ? 'rotate-90' : ''}`}/>
            <h2 className="text-[18px] font-medium">{item.question}</h2>
          </div>
          <div ref={(el) => (accordionItemBodiesRef.current[index] = el)} className="overflow-hidden ease-out duration-200" style={{ maxHeight: activeIndex === index ? `${accordionItemBodiesRef.current[index].scrollHeight}px` : '0px'}}>
            <div className="p-4">
              <p className="text-[#3f4348] text-[18px]">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};