import "./contact.scss";
import { useForm } from "react-hook-form";
import courses from "../../assets/courses.json";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  const [loader, setLoader] = useState(false);
  const [mailSuccess, setMailSuccess] = useState(null);
  const [mailFailed, setMailFailed] = useState(null);

  function submitForm(formData) {
    setMailFailed(null);
    setMailSuccess(null);
    if (isValid) {
      setLoader(true);
      return;
      axios
        .post("http://localhost:3000/mailer", formData)
        .then((response) => {
          console.log(response)
          setMailSuccess(response.data || 'Success');
          setLoader(false);
          reset();
        })
        .catch((error) => {
          console.log(error)
          setMailFailed(error.response.data || 'Error')
          setLoader(false);
        });
    }
  }
  return (
    <>
      <div className="transformers-contact">
        <div className="container">
          <h2 className="text-center py-3">For Enquiry</h2>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <p>
                We would love to hear from you! Contact us for inquiries,
                partnerships, or any questions youmay have. Reach out to us via
                the contact form below.
              </p>
              <p>
                <i className="fa fa-envelope"></i> &nbsp;
                admin@neuraltransformers.com
              </p>
              <p>
                <i className="fa fa-phone"></i> &nbsp; +91 93421 53224 +91 63694
                34981, +91 97514 18361, +91 93421 13885
              </p>
            </div>
            <div className="col-md-4 offset-md-2 col-xs-10">
              <form
                onSubmit={handleSubmit((data) => submitForm(data))}
                autoComplete="off"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-danger" role="alert">
                      Name is required.
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                    type="text"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-danger" role="alert">
                      Email address is required.
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-danger" role="alert">
                      Enter valid email address.
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone number
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                      pattern: /^[0-9]+$/i,
                    })}
                    type="text"
                    className="form-control"
                    id="phone"
                  />
                  {errors.phone?.type === "required" && (
                    <p className="text-danger" role="alert">
                      Phone number is required.
                    </p>
                  )}
                  {(errors.phone?.type === "maxLength" ||
                    errors.phone?.type === "minLength" ||
                    errors.phone?.type === "pattern") && (
                    <p className="text-danger" role="alert">
                      Enter valid mobile number.
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="course" className="form-label">
                    Course looking for
                  </label>
                  <select
                    {...register("course")}
                    className="form-select"
                    id="course"
                  >
                    {courses.map((course) => {
                      return (
                        <option value={course.title}>{course.title}</option>
                      );
                    })}
                  </select>
                </div>
                {!loader ? (
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                ) : (
                  <>
                    <p className="text-primary">Sending mail...</p>
                  </>
                )}

                {mailSuccess && (<p className="text-success py-2">{mailSuccess}</p>)}
                {mailFailed && (<p className="text-danger py-2">{mailFailed}</p>)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
