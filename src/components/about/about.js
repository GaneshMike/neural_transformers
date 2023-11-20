import "./about.scss";

function About(props) {
  return (
    <>
      <div
        className={`transformers-about ${
          props.mainPage === "false" && "half-white-bg"
        } ${props.mainPage === "true" && "left-bg"}`}
      >
        <div className="container">
          <div className="row">
            {props.mainPage === "true" ? (
              <div className="col-md-6 offset-md-6 col-xs-12">
                <div className="transformers-about-content">
                  <h4>Neural Transformers AI</h4>
                  <p>
                    Welcome to <span>NeuralTransformers.ai!</span> We are a
                    leading product-based company specializing in cutting-edge
                    technologies such as artificial intelligence and natural
                    language processing. Our innovative solutions include
                    chatbots, OCR (Optical Character Recognition), and document
                    summarizers. In addition, we offer comprehensive training
                    programs in data science, data analysis, cloud, and .NET,
                    along with placement and internship opportunities. Explore
                    our website to discover how our products and services can
                    revolutionize your business.
                  </p>
                </div>
              </div>
            ) : (
              <div className="col-12">
                <div className="transformers-about-content">
                  <h2 className="text-center py-3">Courses</h2>
                  <p>
                    At <span>NeuralTransformers.ai</span>, we are passionate
                    about leveraging the power of AI and machine learning to
                    develop intelligent solutions that solve real-world
                    problems. With a team of experienced professionals and
                    industry experts, we are committed to delivering innovative
                    products and services that push the boundaries of
                    technological advancements. Our dedication to excellence has
                    earned us recognition in the industry, and we continue to
                    strive for excellence in everything we do.
                  </p>
                  <div className="transformers-work-culture">
                    <h6>How We Work</h6>
                    <ol className="mb-4">
                      <li>
                        Discovery and Planning: We collaborate closely with your
                        team to understand your specific requirements, goals,
                        and challenges. We conduct a thorough analysis of your
                        data sources, processes, and infrastructure.
                      </li>
                      <li>
                        Solution Design: Based on the insights gained from the
                        discovery phase, we design a customized solution
                        tailored to your business needs. We determine the
                        appropriate technologies, algorithms, and models to
                        achieve optimal results.
                      </li>
                      <li>
                        Development and Integration: Our experienced team of
                        data scientists and engineers develop and implement the
                        solution, ensuring seamless integration with your
                        existing systems and infrastructure. We follow best
                        practices for data security and privacy throughout the
                        process.
                      </li>
                      <li>
                        Testing and Evaluation: We conduct rigorous testing and
                        evaluation to ensure the solution meets your performance
                        and accuracy requirements. We fine-tune and optimize the
                        models and algorithms to deliver the best possible
                        results.
                      </li>
                      <li>
                        Deployment and Support: Once the solution is ready, we
                        assist with its deployment and provide ongoing support
                        and maintenance. We monitor the solution's performance,
                        make necessary updates, and provide technical assistance
                        whenever needed.
                      </li>
                    </ol>
                    <h6>Why Choose Us</h6>
                    <ol>
                      <li>
                        Expertise in cutting-edge technologies: Our team stays
                        updated with the latest advancements in data science and
                        automation technologies, allowing us to deliver
                        innovative and effective solutions.
                      </li>
                      <li>
                        Customized approach: We understand that every business
                        is unique. Hence, we tailor our services to address your
                        specific challenges and goals, ensuring maximum impact
                        and value.
                      </li>
                      <li>
                        Quality and accuracy: We prioritize delivering
                        high-quality and accurate solutions that meet your
                        requirements and exceed expectations
                      </li>
                      <li>
                        Collaborative partnership: We believe in building strong
                        partnerships with our clients
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
