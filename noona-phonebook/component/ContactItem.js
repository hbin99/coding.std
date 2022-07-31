import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg="2">
          <img
            src=""
            alt="이미지"
          />
        </Col>
        <Col lg="10">
          <h4>{item.name}</h4>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;