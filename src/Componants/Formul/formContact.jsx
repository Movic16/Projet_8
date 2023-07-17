import React from "react";
import "../Formul/formContact.css";
import { useForm, ValidationError } from '@formspree/react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormContact() {

    const [state, handleSubmit] = useForm("xeqbojjw");

    if (state.succeeded) {
        return <div className="messageContact"><p>Thanks for joining!</p></div>;
    }

  return (
    <section className="mt-5"> 
        <div id='contact' className="text-center">
            <h5>Contact</h5>
            <p>Vous avez un projet ? Discutons-en !</p>
        </div>

        <div className="cont-form d-flex justify-content-center">
            <Form action="https://formspree.io/f/xeqbojjw" method="post" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label className="font-weight-bold">Nom</Form.Label>
                    <Form.Control method="post" type="name" name="nom" placeholder="Nom" className="w-100 shadow-sm p-3 bg-white rounded" required />
                    <ValidationError prefix="Nom" field="nom" errors={state.errors} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="font-weight-bold">Email</Form.Label>
                    <Form.Control method="post" type="email" name="email" placeholder="Name@example.com" className="w-100 shadow-lg p-3 bg-white rounded" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label className="font-weight-bold">Message</Form.Label>
                    <Form.Control method="post" name="message" as="textarea" rows={4} className="w-100 shadow-lg p-3 bg-white rounded" required />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={state.submitting} className="btn-lg">Envoyer</Button>
            </Form>
        </div>
    </section>
  );
}

export default FormContact;