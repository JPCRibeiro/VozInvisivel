import { Link } from "react-router-dom";

export default function SuccessMessage() {
  return (
    <div className="min-h-[500px] flex justify-center items-center flex-col gap-2">
      <h2 className="text-[24px] font-bold text-center">Denúncia enviada!</h2>
      <Link to="/denuncias" className="button">Ver denúncias</Link>
    </div>
  );
}