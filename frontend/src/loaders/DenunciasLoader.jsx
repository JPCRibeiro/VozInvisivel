import axios from "axios";

export async function DenunciasLoader() {
  try {
    const response = await axios.get("/api/denuncias");

    if (response.status !== 200) {
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
