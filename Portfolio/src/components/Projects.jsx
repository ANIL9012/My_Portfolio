import React from "react";
import project from "./data/project.json";

function Projects() {
  return (
    <>
      <div className="container projects my-3">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {project.map((data) => {
            return (
              <div
                key={data.key}
                className="my-3 col-sm-6 col-md-4 col-lg-3 mx-5"
              >
                 
                <div className="card bg-dark text-light" data-aos="flip-right" data-aos-duration="1000" >
                  <div className="img d-flex justify-content-center align-items-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top rounded"
                      alt="data.imageSrc"
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary me-2">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
