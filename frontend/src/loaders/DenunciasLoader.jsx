import axios from "axios";

export async function DenunciasLoader() {
  try {
    const response = await axios.get(`/api/denuncias`);
    return {
      denuncias: response.data,
      error: null 
    };
  } catch (error) {
    console.log(error);
    return { 
      denuncias: null, 
      error: "Nenhuma denúncia encontrada."
    };
  } 
}