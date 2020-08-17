import React, {useState, useCallback} from 'react'
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import es from 'date-fns/locale/es'
import {useDropzone} from 'react-dropzone'
import camera from '../../../assets/svg/camara.svg'

import './EditUserForm.scss'
import {API_HOST} from "../../../utils/constant";
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import {modificarPerfil, uploadUserAvatar, uploadUserBanner} from "../../../api/user";
import {toast} from "react-toastify";


export default function EditUserForm(props) {
    const {user, setShowModal} = props
    const [formData, setFormData] = useState(initialValue(user))
    const [loading, setLoading] = useState(false)
    const [bannerUrl, setBannerUrl] = useState(
        user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}` : null
    );
    const [avatarUrl, setAvatarUrl] = useState(
        user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user?.id}` : AvatarNotFound
    );
    const [bannerFile, setBannerFile] = useState(null)
    const [avatarFile, setAvatarFile] = useState(null)
    const onDropBanner = useCallback(acceptedFile => {
        const file = acceptedFile[0];
        setBannerUrl(URL.createObjectURL(file))
        setBannerFile(file)
        console.log(acceptedFile)
    })


    const {
        getRootProps: getRootBannerProps,
        getInputProps: getInputBannerProps
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop: onDropBanner

    })
    const onDropAvatar = useCallback(acceptedFile => {
        const file = acceptedFile[0];
        setAvatarUrl(URL.createObjectURL(file))
        setAvatarFile(file)
        console.log(acceptedFile)
    })

    const {
        getRootProps: getRootAvatarProps,
        getInputProps: getInputAvatarProps,

    } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop: onDropAvatar
    })
    const onChange = e => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(formData)
        // console.log('Editando el formulario')
        // console.log(bannerFile)
        // console.log(avatarFile)
        if (bannerFile) {
            await uploadUserBanner(bannerFile).catch(() => {
                toast.error("Error al subir el nuevo Banner")
            })
        }
        if (avatarFile) {
            await uploadUserAvatar(avatarFile).catch(() => {
                toast.error("Error al subir el nuevo Avatar")
            })
        }
        await modificarPerfil(formData).then(() => {
            setShowModal(false)
        })
            .catch(() => {
                toast.error("Error al actualizad los datos")
            }) 
        setLoading(false)
        window.location.reload()

    }
    return (
        <div className='edit-user-form'>
            <div className='banner'
                 style={{backgroundImage: `url('${bannerUrl}')`}}
                 {...getRootBannerProps()}>
                <input {...getInputBannerProps()}/>
                <img src={camera}/>
            </div>
            <div className="avatar"
                 style={{backgroundImage: `url('${avatarUrl}')`}}
                 {...getRootAvatarProps()}>
                <input {...getInputAvatarProps()}/>
                <img src={camera}/>
            </div>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Nombre'
                                name='nombre'
                                defaultValue={formData.nombre}
                                onChange={onChange}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Apellidos'
                                name='apellidos'
                                defaultValue={formData.apellidos}
                                onChange={onChange}>
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as='textarea'
                        row='3'
                        placeholder='Agrega tu biografía'
                        type='text'
                        name='biografia'
                        defaultValue={formData.biografia}
                        onChange={onChange}>

                    </Form.Control>

                </Form.Group>
                <Form.Group>
                    <Form.Control
                        placeholder='Sitio Web'
                        type='text'
                        name='sitioweb'
                        defaultValue={formData.sitioweb}
                        onChange={onChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <DatePicker
                        placeholder="Fecha de nacimiento"
                        locale={es}
                        selected={new Date(formData.fechaNacimiento)}
                        onChange={(value) =>
                            setFormData({...formData, fechaNacimiento: value})
                        }
                    />
                </Form.Group>
                <Button
                    className='btn-submit'
                    variant='primary'
                    type='submit'>
                    {loading && <Spinner animation='border' size='sm' className='mr-2' />    }
                    Actualizar
                </Button>
            </Form>
        </div>
    )
}

function initialValue(user) {
    return {
        nombre: user.nombre ? user.nombre : '',
        apellidos: user.apellidos || '',
        biografia: user.biografia || '',
        ubicacion: user.ubicacion || '',
        sitioweb: user.sitioweb || '',
        fechaNacimiento: user.fechaNacimiento || ''
    }
}