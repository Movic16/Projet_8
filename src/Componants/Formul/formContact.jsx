import React from "react";
import "../Formul/formContact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function formContact() {
  return (
    
    <section className="mt-5"> 
        <div id='contact' className="text-center">
            <h5>Contact</h5>
            <p>Vous avez un projet ? Discutons-en !</p>
        </div>

        <div className="cont-form d-flex justify-content-center">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="font-weight-bold">Nom</Form.Label>
                    <Form.Control type="name" placeholder="Nom" className="w-100 shadow-sm p-3 bg-white rounded" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label className="font-weight-bold">Email</Form.Label>
                    <Form.Control type="email" placeholder="Name@example.com" className="w-100 shadow-lg p-3 bg-white rounded" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="font-weight-bold">Message</Form.Label>
                    <Form.Control as="textarea" rows={4} className="w-100 shadow-lg p-3 bg-white rounded" required />
                </Form.Group>

                <Button variant="primary" className="btn-lg">Envoyer</Button>
            </Form>
        </div>
    </section>
  );
}

export default formContact;