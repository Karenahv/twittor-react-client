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


export default function LeftMenu(props) {
    const {className, children} = props;
  return (
  <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="Twittor"/>

      <Link to="/">
         <FontAwesomeIcon icon={faHome}/> Inicio
      </Link>
      <Link to="/users">
          <FontAwesomeIcon icon={faUsers}/> Usuarios
      </Link>
      <Link to="/profile">
          <FontAwesomeIcon icon={faUser}/> Perfil
      </Link>
      <Link to="/logout">
          <FontAwesomeIcon icon={faPowerOff}/> Salir
      </Link>

      <Button>Twittear</Button>

  </div>
  );
}
