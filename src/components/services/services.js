import services from "../../assets/services.json";
import "./services.scss";

function Services() {
  return (
    <>
      <div className="transformers-services">
        <h2 className="text-center py-3">Services</h2>
        <div className="container">
          {services.map((service) => {
            return (
              <section>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
