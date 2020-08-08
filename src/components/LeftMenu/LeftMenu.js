import React from "react";
import "./LeftMenu.scss";
import {Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faHome,
    faUser,
    faUsers,
    faPowerOff

} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import LogoWhite from '../../assets/png/original (1).png'
import {logoutApi} from "../../api/auth";
import useAuth from "../../hooks/useAuth";


export default function LeftMenu(props) {
    const {className, setRefresh, children} = props;
    const user = useAuth();
    const logout = () => {
        logoutApi();
        setRefresh(true);
    }
  return (
  <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="Twittor"/>

      <Link to="/">
         <FontAwesomeIcon icon={faHome}/> Inicio
      </Link>
      <Link to="/users">
          <FontAwesomeIcon icon={faUsers}/> Usuarios
      </Link>
      <Link to={`/${user?._id }`}>
          <FontAwesomeIcon icon={faUser}/> Perfil
      </Link>
      <Link to="" onClick={logout}>
          <FontAwesomeIcon icon={faPowerOff}/> Salir
      </Link>

      <Button>Twittear</Button>

  </div>
  );
}
