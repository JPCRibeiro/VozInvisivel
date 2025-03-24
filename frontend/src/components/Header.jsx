import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoUrl from "../assets/logo.png";

export default function Header() {
  return(
    <header className="bg-[#862723] h-[82px] w-full text-[white] py-4 px-6 [box-shadow:rgba(0,_0,_0,_0.16)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.12)_0px_2px_10px_0px] fixed top-0 z-50">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-3 font-bold text-[22px]">
          <img src={logoUrl} className="w-[50px]" width="50"/>
          VOZ INVISÍVEL
        </Link>
        <ul className="flex gap-4 items-center text-[18px] font-[600] max-sm:hidden">
          <NavLink to="/denuncias">
            Denúncias
          </NavLink>
          <NavLink to="/denunciar" className="button !bg-[white] !text-[#862723] !font-[600]">
            Denuncie Aqui
          </NavLink>
        </ul>
        <FontAwesomeIcon icon={faBars} className="text-[22px] !hidden max-sm:!block"/>
      </div>
    </header>
  )
}