import React from "react";

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={require("../../assets/images/recent-photo.jpg")}
          alt="about-me"
          className="photo"
        />
      </div>
      <div>
        <p>
          I am an aspiring full stack web developer looking to gain a software
          engineering apprenticeship. I have been enrolled in the University of
          Birmingham's full-stack development bootcamp.I have learnt front end
          and back end technologies through a dynamic full stack curriculum,
          including HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js,
          React.js, Node.js, Database Theory, MongoDB, MySQL, Git, and more. 
        </p>
        <p>
          I applied aspects of front and back end development in a recent project. I
          worked on a team of five to{" "}
          <a
            href="https://github.com/mohamedisaaq0/Code-College"
            target="_blank"
          >
            develop
          </a>{" "}
          a{" "}
          <a href="https://desolate-reef-02788.herokuapp.com/" target="_blank">
            single-page MERN app
          </a>{" "}
          learning tracker to help users track their progress when learning programming languages. 
        </p>
      </div>
    </section>
  );
}

export default About;
