import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">

          <div className="about-tag">
            ABOUT GREEKSLABS
          </div>

          <h2 className="about-title">
            Technology Built Around the
            <br />
            Way <span>Traders Think</span>
          </h2>

          <p className="about-description">
            GreeksLabs Technologies helps traders convert market knowledge,
            trading concepts, and rule-based strategies into structured
            algorithmic solutions.
          </p>


          {/* PRINCIPLES */}

          <div className="about-points">

            <div className="about-point">

              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">

                <h4>Strategy First</h4>

                <span className="point-line"></span>

                <p>
                  We begin with the trader&apos;s logic.
                </p>

              </div>

            </div>


            <div className="about-point">

              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">

                <h4>
                  Technology
                  <br />
                  Driven
                </h4>

                <span className="point-line"></span>

                <p>
                  Trading concepts are converted into structured systems.
                </p>

              </div>

            </div>


            <div className="about-point">

              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">

                <h4>Built for Markets</h4>

                <span className="point-line"></span>

                <p>
                  Solutions designed around practical execution.
                </p>

              </div>

            </div>

          </div>


          {/* CTA */}

          <button className="about-btn">

            <i className="bi bi-chat-fill"></i>

            Talk to Our Team

          </button>

        </div>


        {/* RIGHT VISUAL */}

        <div className="about-right">

          <div className="about-flow">

            <div className="about-flow-top">

              <div className="about-flow-box">
                <i className="bi bi-brain-fill"></i>
                <span>Idea</span>
              </div>


              <div className="about-flow-box">
                <i className="bi bi-rulers"></i>
                <span>Rules</span>
              </div>


              <div className="about-flow-box active">
                <i className="bi bi-robot"></i>
                <span>Automation</span>
              </div>

            </div>


            <div className="about-flow-bottom">

              <div className="about-flow-box">
                <i className="bi bi-bullseye"></i>
                <span>Execution</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;