import { useParams } from "react-router-dom";
import "./course-details.scss";

function CourseDetails() {
  const params = useParams();
  const courses = require("../../assets/courses.json");
  const detail = courses.filter((course) => course.id === params.id)[0];
  const modules = [
    { title: "Module 1" },
    { title: "Module 2" },
    { title: "Module 3" },
    { title: "Module 4" },
    { title: "Module 5" },
    { title: "Module 6" },
  ];
  return (
    <>
      <div className="transformers-course-details">
        <div className="details-first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
                <div className="d-flex detail-box">
                  <div className="duration">Duration: {detail.duration}</div>
                  <div className="rating">{detail.rating}/5 Rating</div>
                  <div className="modules">{detail.modules} Modules</div>
                </div>
                <button className="btn btn-outline-secondary register-btn mb-2">
                  Register your course
                </button>
              </div>
              <div className="col-md-5 offset-md-1 col-xs-12">
                <iframe
                  className="course-video"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={detail.title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="details-second">
          <div className="container py-5">
            <div className="accordion" id="accordionExample">
              {modules.map((module, index) => {
                return (
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        {module.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ol>
                            <li>Title 1</li>
                            <li>Title 2</li>
                            <li>Title 3</li>
                            <li>Title 4</li>
                            <li>Title 5</li>
                            <li>Title 6</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
