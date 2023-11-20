import { NavLink, Outlet } from "react-router-dom";
import Course from "../course/course";
import "./course-list.scss";

function CourseList(props) {
  const courses = require("../../assets/courses.json");

  return (
    <>
      <div className="transformers-course-list">
        <h2 className="text-center py-3">Courses</h2>
        <div className="container">
          <p className="py-0">
            At NeuralTransformers.ai, we provide extensive and real-time
            training programs designed to equip individuals with the skills and
            knowledge needed to excel in today's competitive job market. Our
            programs cover a wide range of domains, including Data Science, Data
            Analysis, Full Stack .NET Development, Python, SQL, AZ104, AZ400,
            and more.
          </p>
        </div>
        <div className="row my-2">
          <div className="col-10 offset-1">
            <div className="row py-2">
              {courses.slice(0, props.display).map((course) => {
                return <Course course={course} />;
              })}
            </div>
          </div>
        </div>
        {!props.hideViewMore && <NavLink to="/courses">View courses</NavLink>}
      </div>
    </>
  );
}

export default CourseList;
