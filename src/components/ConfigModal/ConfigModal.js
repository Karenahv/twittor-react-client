import React from 'react'

import './ConfigModal.scss'
import {Modal} from 'react-bootstrap'
import close from '../../assets/svg/close.svg'


export default function ConfigModal (props) {
    const {show, setShow, title, children } = props
    return (
        <Modal
        className='config-modal'
        show={show}
        onHide={() => setShow(false)}
        centered
        size='lg'
        >
        <Modal.Header>
            <Modal.Title>
                <img src={close} onClick={() => setShow(false)}></img>
                <h2>{title}</h2>
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}