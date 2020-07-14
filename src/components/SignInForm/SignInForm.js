import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { values, size } from "lodash";
import "./SignInForm.scss";
import { Form, Button, Spinner } from "react-bootstrap";
import { signInApi, setTokenApi } from "../../api/auth";

export default function SignInForm(props) {
  const { setShowModal, setRefresh} = props;
  const [formData, setFormData] = useState(initialFormValue);
  const [signInLoading, setSignInLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    if (validCount !== size(formData)) {
      toast.warning("Completa todos los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Email inválido");
      } else {
        setSignInLoading(true);
        signInApi(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else if (!response.message) {
              toast.success("Inicio de sesión exitoso");
              setTokenApi(response.token)
              setRefresh(true)
              setShowModal(false);
              setFormData(initialFormValue());
            }
          })
          .catch((err) => {
            toast.error("Error en el servidor")
          })
          .finally(() => {
            setSignInLoading(false);
          });
      }
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-in-form">
      <h2>Entrar</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            defaultValue={FormData.email}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            defaultValue={FormData.password}
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
