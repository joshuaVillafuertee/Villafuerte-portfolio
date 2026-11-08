import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item project-card">
                <div className="project-image-wrap">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{data.year}</span>
                    <span className="project-role">{data.role}</span>
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <div className="project-techs">
                    {data.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {data.github ? (
                      <a href={data.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(data)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>
              <div className="project-modal-image-wrap">
                <img src={selectedProject.img} alt={selectedProject.title} />
              </div>
              <div className="project-modal-body">
                <div className="project-meta">
                  <span className="project-year">{selectedProject.year}</span>
                  <span className="project-role">{selectedProject.role}</span>
                </div>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <div className="project-techs">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-modal-link"
                  >
                    GitHub Repository
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
