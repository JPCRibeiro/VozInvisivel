import mongoose from "mongoose";

const denunciaSchema = new mongoose.Schema({
  id: {type: String},
  empresa: { 
    type: String, 
    required: [true, "O nome da empresa é obrigatório"] 
  },
  estado: { 
    type: String, 
    required: [true, "O estado é obrigatória"] 
  },
  cidade: { 
    type: String, 
    required: [true, "A cidade é obrigatória"] 
  },
  setor: { 
    type: String, 
    required: [true, "O setor é obrigatório"] 
  },
  discriminacao: { 
    type: [String], 
    required: [true, "Informe pelo menos um tipo de discriminação"] 
  },
  data: { 
    type: String, 
    required: [true, "A data do ocorrido é obrigatória"] 
  },
  envolvimento: { 
    type: String, 
    enum: ["Vítima", "Testemunha"],
    required: [true, "Informe seu envolvimento"]
  },
  detalhes: { 
    type: String, 
    required: [true, "A descrição do ocorrido é obrigatória"] 
  },
  tentativa: { 
    type: String, 
    enum: ["Não", "Sim"],
    required: [true, "Informe se houve tentativa de resolução"]
  },
  consentimento: { 
    type: Boolean, 
    required: [true, "O consentimento é obrigatório"] 
  }
}, { versionKey: false });

const denuncias = mongoose.model("denuncias", denunciaSchema);

export default denuncias;