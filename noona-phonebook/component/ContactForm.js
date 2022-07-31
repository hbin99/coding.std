import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
const ContactForm = () => {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState(0);
  let dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setName("");
    setPhoneNumber("");
  };
  return (
    <Form onSubmit={(event) => addContact(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호r</Form.Label>
        <Form.Control
          type="text"
          placeholder="전화번호r"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;