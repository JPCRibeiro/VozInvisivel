import axios from "axios";

export async function DenunciaLoader({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(`/api/denuncias/${id}`);
    return {
      denuncia: response.data,
      error: null 
    };
  } catch (error) {
    console.log(error);
    return { 
      denuncia: null, 
      error: "Denúncia não encontrada."
    };
  } 
}