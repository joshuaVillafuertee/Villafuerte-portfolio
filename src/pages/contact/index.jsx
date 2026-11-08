import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp contact-panel-row">
          <Col lg="12">
            <div className="contact-info-card">
              <h3 className="color_sec py-4">Get in touch</h3>

              <div className="contact-detail">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-label">Phone:</span>
                <a href={`tel:${contactConfig.YOUR_FONE}`}>{contactConfig.YOUR_FONE}</a>
              </div>

              <p className="contact-message">{contactConfig.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
