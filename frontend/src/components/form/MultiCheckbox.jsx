import ErrorMessage from "./ErrorMessage.jsx";
import { InputCheckbox } from "./Inputs.jsx";

export default function MultiCheckbox({ setFormData, setErrors, errors }) {
  return (
    <div className="flex flex-col gap-2">
      <h4>Tipo de Discriminação</h4>
      <div className="flex gap-8 pl-4">
        <div className="flex flex-col gap-4">
          {["Racismo", "Sexismo", "LGBTfobia", "Capacitismo"].map((tipo) => (
            <InputCheckbox
              key={tipo}
              id={tipo}
              label={tipo}
              setFormData={setFormData}
              setErrors={setErrors}
              isMultiCheckbox
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {["Idadismo", "Assédio moral", "Assédio sexual", "Outros"].map(
            (tipo) => (
              <InputCheckbox
                key={tipo}
                id={tipo}
                label={tipo}
                setFormData={setFormData}
                setErrors={setErrors}
                isMultiCheckbox
              />
            )
          )}
        </div>
      </div>
      {errors.discriminacao && <ErrorMessage message={errors.discriminacao} />}
    </div>
  );
}
