import axios from "axios";

export async function DenunciasLoader() {
  try {
    const response = await axios.get(`https://api.vozinvisivel.com.br/api/denuncias`);
    if (!response.ok) {
      throw new Error("Erro ao buscar denúncias");
    } else {
      return {
        denuncias: response.data,
        error: null 
      };
    }
  } catch (error) {
    console.log(error);
    return { 
      denuncias: [], 
      error: "Nenhuma denúncia encontrada."
    };
  } 
}