import axios from "axios";

export async function DenunciaLoader({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(`http://localhost:3000/api/denuncias/${id}`);
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