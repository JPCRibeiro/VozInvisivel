import ErrorMessage from "./ErrorMessage.jsx";

export function InputText({ id, type, label, placeholder, setFormData, setErrors, error }) {
  const handleChange = (e) => {
    setFormData((prevState) => ({ 
      ...prevState, [id]: e.target.value.trim() 
    }));
  
    if (e.target.value.trim() !== "") {
      setErrors((prevState) => ({ 
        ...prevState, [id]: undefined 
      }));
    }
  };

  return(
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[18px] text-[#383737] font-[600]">
        {label}
      </label>
      <input 
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export function InputCheckbox({ id, label, setFormData, setErrors, error, isMultiCheckbox }) {
  const handleChange = (e) => {
    if (isMultiCheckbox) {
      setFormData((prevState) => {
        const selectedValues = prevState.discriminacao || []; 
        const isChecked = e.target.checked;
  
        return {
          ...prevState,
          discriminacao: isChecked
            ? [...selectedValues, id] 
            : selectedValues.filter((item) => item !== id), 
        };
      });
  
      if (e.target.checked) {
        setErrors((prevState) => ({ ...prevState, discriminacao: undefined }));
      }
    } else {
      setFormData((prevState) => ({ 
        ...prevState, [id]: e.target.checked
      }));
    
      if (e.target.checked !== "") {
        setErrors((prevState) => ({ 
          ...prevState, [id]: undefined 
        }));
      }
    }
  };

  return(
    isMultiCheckbox ? (
      <div className="flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          onChange={handleChange}
          className="accent-[#AF2527] scale-105 cursor-pointer"
        />
        <label htmlFor={id} className="text-[17px] cursor-pointer select-none">
          {label}
        </label>
      </div>
    ) : (
      <div className="flex flex-col items-center">
        <div className="flex gap-2 items-center">
          <input 
            id={id}
            type="checkbox"
            onChange={handleChange}
            className="accent-[#AF2527] scale-105 cursor-pointer"
          />
          <label htmlFor={id} className="text-[17px] cursor-pointer select-none text-center">
            {label}
          </label>
        </div>
        {error && <ErrorMessage message={error} />}
      </div>
    )
  
  )
}

export function TextArea({ id="detalhes", setFormData, setErrors, error }) {
  const handleChange = (e) => {
    setFormData((prevState) => ({ 
      ...prevState, [id]: e.target.value.trim() 
    }));
  
    if (e.target.value.trim() !== "") {
      setErrors((prevState) => ({ 
        ...prevState, [id]: undefined 
      }));
    }
  };
  
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[18px] text-[#383737] font-[600]">
        Descreva o que aconteceu
      </label>
      <textarea
        id="detalhes"
        name={id}
        placeholder="Explique o que aconteceu, sem informações que possam identificá-lo diretamente."
        className="min-h-[150px] max-h-[300px]"
        onChange={handleChange}
      />
      {error && <ErrorMessage message={error}/>}
    </div>
  );
}

export function Select({ id, label, hiddenOption, options, setFormData, setErrors, error, isLocation, isCidade, estadoSelecionado, onChange }) {
  const handleChange = (e) => {
    setFormData((prevState) => ({ 
      ...prevState, [id]: e.target.value 
    }));
  
    if (e.target.value.trim() !== "") {
      setErrors((prevState) => ({ 
        ...prevState, [id]: undefined 
      }));
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    isLocation ? (
      <div className="w-full flex flex-col gap-2">
        <select
          id={id}
          onChange={handleChange}
          className={`w-full border p-2 ${isCidade && "disabled:!opacity-50 disabled:cursor-not-allowed"}`}
          disabled={estadoSelecionado === "0"}
        >
          <option hidden>{hiddenOption}</option>
          {options && options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        {error && <ErrorMessage message={error} />}
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-[18px] text-[#383737] font-[600]">
          {label}
        </label>
        <select
          id={id}
          onChange={handleChange}
          className="border p-2"
        >
          <option hidden>Selecione um campo</option>
          {options && options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        {error && <ErrorMessage message={error} />}
      </div>
    )
  );
}