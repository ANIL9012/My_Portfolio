import React from "react";
import skills from "./data/skills.json";

function Skills() {
  return (
    <>
      <div className="container skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data, index) => (
            <div
              className="item mx-3"
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt={data.name} />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
