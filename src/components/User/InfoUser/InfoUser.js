import React, {Fragment} from "react";
import location from '../../../assets/svg/location.svg'
import birth from '../../../assets/svg/date-birth.svg'
import link from '../../../assets/svg/link.svg'
import moment from "moment";
import localization from "moment/locale/es"
import './InfoUser.scss'

export default function InfoUser(props) {
    const {user} = props;
    return (
        <div className='info-user'>
            <h2 className='name'>
                {user?.nombre} {user?.apellidos}
            </h2>
            <p className='email'>
                {user?.email}
            </p>
            {user?.biografia && (
                <div className='descripcion'>
                    {user.biografia}
                </div>
            )}
            <div className='more-info'>
                {user?.ubicacion && (
                    <p>
                        <img src={location}/>
                        {user.ubicacion}
                    </p>
                )

                }
                {user?.sitioweb && (
                    <a href={user.sitioweb}
                       alt={user.sitioweb}
                       target='_blank'
                       rel='noopener noreferrer'>
                        <img src={link}/> {user.sitioweb}
                    </a>
                )}
                {user?.fechaNacimiento && (
                    <p>
                        <img src={birth}/>

                        {moment(user.fechaNacimiento).locale("es", localization).format("LL")}
                    </p>

                )}

            </div>
        </div>
    )
}