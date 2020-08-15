import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import es from 'date-fns/locale/es'

import './EditUserForm.scss'


export default function EditUserForm(props) {
    const onSubmit = e => {
        e.preventDefault();
        console.log('Editando el formulario')
    }
    return (
        <div className='edit-user-form'>
            <Form onSubmit={onsubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Nombre'
                                name='nombre'>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control
                                type='text'
                                placeholder='Apellidos'
                                name='apellidos'>
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
                            name='biografia'>

                        </Form.Control>

                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            placeholder='Sitio Web'
                            type='text'
                            name='sitioWeb'>
                        </Form.Control>
                    </Form.Group>
                <Form.Group>
                    <DatePicker
                    placeholder='Fecha de nacimiento'
                    locale={es}
                    selected={new Date()}>

                    </DatePicker>
                </Form.Group>
                    <Button
                    className='btn-submit'
                    variant='primary'
                    type='submit'>
                    Actualizar
                    </Button>
            </Form>
        </div>
    )
}