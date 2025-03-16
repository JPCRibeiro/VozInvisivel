import axios from "axios";

export async function DenunciasLoader() {
  try {
    const response = await axios.get(`/api/denuncias`);
    const denuncias = Array.isArray(response.data) ? response.data : [];
    return {
      denuncias,
      error: null 
    };
  } catch (error) {
    console.log(error);
    return { 
      denuncias: [], 
      error: "Nenhuma denúncia encontrada."
    };
  } 
}