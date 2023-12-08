import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";


export default function ModalLogin( { show, handleClose } ) {

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Войти</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{ marginBottom: "10px"}}>
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control type="email" placeholder="Введите email" />
                            <Form.Text className="text-muted">
                              Сохраним в секрете, честно.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня" style={{ marginTop: "10px", marginLeft: "10px", marginBottom: "10px", color: "#adb1b8", fontWeight: "bold", fontSize: "14px",}}/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Войти
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
    )
}