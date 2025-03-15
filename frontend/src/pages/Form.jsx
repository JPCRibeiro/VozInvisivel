import { InputCheckbox, InputText, Select, TextArea } from "../components/form/Inputs";
import axios from "axios";
import { useEffect, useState } from "react";
import * as yup from "yup";
import SuccessMessage from "../components/form/SubmittedFormScreen";
import LocationSelect from "../components/form/locationSelect";
import MultiCheckbox from "../components/form/MultiCheckbox";
import Loader from "../components/Loader";

export default function FormPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    empresa: "",
    estado: "",
    cidade: "",
    setor: "",
    discriminacao: [],
    data: "",
    envolvimento: "",
    detalhes: "",
    tentativa: "",
    consentimento: false,
  });

  const validationSchema = yup.object().shape({
    empresa: yup.string().required("Informe o nome da empresa").trim(),
    estado: yup.string().min(1, "Selecione um campo"),
    cidade: yup.string().min(1, "Selecione um campo"),
    setor: yup.string().required("Informe o setor"),
    discriminacao: yup.array().min(1, "Selecione pelo menos um campo"),
    data: yup.string().required("Informe a data do ocorrido"),
    envolvimento: yup.string().oneOf(["Vítima", "Testemunha"], "Selecione um campo"),
    detalhes: yup.string().required("Descreva o ocorrido"),
    tentativa: yup.string().oneOf(["Não", "Sim"], "Selecione um campo"),
    consentimento: yup.boolean().oneOf([true], "Aceite os termos para prosseguir").default(false),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      await axios.post("http://voz-invisivel.sa-east-1.elasticbeanstalk.com/denuncias", formData);

      window.scrollTo({ top: 0 });
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2000);
    } catch (error) {
      if (error.inner) {
        const formattedErrors = {};

        error.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });

        setErrors(formattedErrors);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Voz Invisível - Formulário de denúncia";
  }, []);

  return (
    <section>
      {isLoading ? (
        <Loader text="Enviando"/>
      ) : isSubmitted ? (
        <SuccessMessage/>
      ) : (
        <>
          <h3>Formulário de Denúncia</h3>
          <form onSubmit={handleSubmit} className="topic-container form gap-6">
            <InputText
              id="empresa"
              type="text"
              label="Nome da empresa"
              setFormData={setFormData}
              setErrors={setErrors}
              error={errors.empresa}
            />
            <LocationSelect 
              setFormData={setFormData}
              setErrors={setErrors}
              errors={errors}
            />
            <InputText
              id="setor"
              type="text"
              label="Setor"
              placeholder="Ex: RH, TI, Vendas"
              setFormData={setFormData}
              setErrors={setErrors}
              error={errors.setor}
            />
            <MultiCheckbox
              setFormData={setFormData}
              setErrors={setErrors}
              errors={errors}
            />
            <InputText
              id="data"
              type="date"
              label="Quando aconteceu?"
              setFormData={setFormData}
              setErrors={setErrors}
              error={errors.data}
            />
            <Select
              id="envolvimento"
              label="Você foi a vítima ou testemunhou?"
              setFormData={setFormData}
              setErrors={setErrors}
              options={[{ value: "Vítima" }, { value: "Testemunha" }]}
              error={errors.envolvimento}
            />
            <TextArea
              setFormData={setFormData}
              setErrors={setErrors}
              error={errors.detalhes}
            />
            <Select
              id="tentativa"
              label="Houve tentativa de resolver internamente?"
              setFormData={setFormData}
              setErrors={setErrors}
              options={[{ value: "Não" }, { value: "Sim" }]}
              error={errors.tentativa}
            />
            <div className="flex flex-col items-center">
              <InputCheckbox
                id="consentimento"
                label="Aceito que minha denúncia seja analisada e publicada anonimamente no site."
                setFormData={setFormData}
                setErrors={setErrors}
                error={errors.consentimento}
              />
              <button type="submit" className="button mt-5">
                Enviar denúncia
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}