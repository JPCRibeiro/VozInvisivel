import axios from "axios";

export async function DenunciaLoader({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(`/api/denuncias/${id}`);

    if (typeof response.data === "string" && response.data && response.data.includes('<html')) {
      return {
        denuncia: null,
        error: "Denúncia não encontrada."
      };
    }

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