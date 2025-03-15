import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorMessage({ message }) {
  return (
    <div className="text-[#AF2527] text-[16px] font-[600] flex items-center gap-2">
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <span className="mt-[2px]">{message}</span>
    </div>
  );
}