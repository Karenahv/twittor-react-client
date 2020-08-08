import React, {Fragment} from 'react'
import {Button} from "react-bootstrap";
import AvatarNotFound from '../../../assets/png/avatar-no-found.png'
import './BannerAvatar.scss'
import {API_HOST} from "../../../utils/constant";

export default function BannerAvatar(props) {
    const {user, loggedUser} = props;
    const bannerUrl = user?.banner ? `${API_HOST}/obtenerBanner?id=${user?.id}` : null
    const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user?.id}` : AvatarNotFound
    return (
        <div
            className="banner-avatar"
            style={{backgroundImage: `url('${bannerUrl}')`}}
        >
            <div
                className="avatar"
                style={{backgroundImage: `url('${avatarUrl}')`}}
            />
            {user && (
                <div className='options'>
                    {
                        loggedUser._id === user.id && (
                            <Button>Editar perfil</Button>
                        )
                    }


                    {
                        loggedUser._id !== user.id && (
                            <Button >Seguir Usuario</Button>
                        )
                    }
                </div>
            )}
        </div>

    )
}