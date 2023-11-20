import { NavLink } from "react-router-dom";
import "./course.scss";
import datascience from "../../assets/datascience.jpg";
import dataanalysis from "../../assets/dataanalysis.jpg";
import dotnet from "../../assets/dotnet.jpg";
import sql from "../../assets/sql.jpg";
import python from "../../assets/python.jpg";
import azure from "../../assets/azure.jpg";

function Course(props) {
  function getImages(image) {
    switch (image) {
      case "datascience":
        return datascience;
      case "dataanalysis":
        return dataanalysis;
      case "dotnet":
        return dotnet;
      case "sql":
        return sql;
      case "python":
        return python;
      case "azure":
        return azure;
      default:
        return require("../../assets/course.jpg");
    }
  }
  return (
    <>
      <div className="col-md-3 py-2">
        <div className="course">
          <div className="course-image">
            {/* <img src={require('../../assets/courses/datascience.jpg')} alt="transformers course"/> */}
            <img
              src={getImages(props.course.image)}
              alt={props.course.title}
            />
          </div>
          <div className="course-content">
            <h5 className="my-2">{props.course.title}</h5>
            <div className="d-flex duration">
              <span>Duration:&nbsp;</span>
              <span>{props.course.duration}</span>
            </div>
            <p className="description">
              {props.course.description.slice(0, 100)}
            </p>
            <NavLink to={`/courses/description/${props.course.id}`}>
              View
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
