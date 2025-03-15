import axios from "axios";
import { useEffect, useState } from "react";
import { Select } from "./Inputs";

export default function LocationSelect({ setFormData, setErrors, errors }) {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("0");

  const handleEstadoChange = (e) => {
    const novoEstado = e.target.value;
    setEstadoSelecionado(novoEstado);

    setFormData((prevState) => ({
      ...prevState, estado: novoEstado, cidade: "", 
    }));

    setErrors((prevState) => ({
      ...prevState, cidade: undefined,
    }));
  };

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then(response => setEstados(response.data));
  }, []);

  useEffect(() => {
    if (estadoSelecionado !== "0") {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then(response => setCidades(response.data));
    } 
  }, [estadoSelecionado]);

  return (
    <div className="flex flex-col gap-2">
      <h4>Localização da empresa</h4>
      <div className="flex flex-col gap-4">
        <Select
          id="estado"
          setFormData={setFormData}
          setErrors={setErrors}
          onChange={handleEstadoChange}
          options={estados.map(uf => ({ value: uf.sigla }))}
          error={errors.estado}  
          isLocation
          hiddenOption="Selecione um estado"
        />
        <Select
          id="cidade"
          setFormData={setFormData}
          setErrors={setErrors}
          options={cidades.map(cidade => ({ value: cidade.nome }))}
          error={errors.cidade}  
          isLocation
          hiddenOption="Selecione uma cidade"
          isCidade
          estadoSelecionado={estadoSelecionado}
        />
      </div>
    </div>
  );
}