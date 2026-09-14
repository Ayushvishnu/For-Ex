import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="about-left">
          <div className="about-tag" data-aos="fade-up" data-aos-duration="700">
            ABOUT MAKE MYEA
          </div>

          <h2
            className="about-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Custom Algo & EA
            <br />
            Development by<span> Greekslabs Technologies</span>
          </h2>

          <p
            className="about-description"
            data-aos="fade-up"
            data-aos-duration="900"
          >
  MakeMyEa is a specialized financial IT division of Greekslabs Technologies
  Ltd, focused on building advanced algorithmic trading solutions.
          </p>

          <p
            className="about-description about-description-second"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
             We develop custom Expert Advisors, trading bots, and automated systems for
  Indian and Forex markets, helping traders execute strategies with greater
  consistency and reduced emotional interference.
          </p>



          {/* =========================
              KEY POINTS
          ========================== */}

          <div className="about-points">
            {/* POINT 1 */}

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">
                <h4>Our Mission</h4>

                <span className="point-line"></span>

                <p>
                    To empower retail traders with custom algorithmic solutions for
    disciplined, automated, and emotion-free trading.
                </p>
              </div>
            </div>

            {/* POINT 2 */}

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">
                <h4>Our Vision</h4>

                <span className="point-line"></span>

                <p>
                  To become a trusted algo technology partner for retail traders across
  Indian and global Forex markets.
                </p>
              </div>
            </div>

            {/* POINT 3 */}

            {/* <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">
                <h4>Why Choose MakeMyEa?</h4>

                <span className="point-line"></span>

                <p>
                  100% Custom Engineering
                  <br />
                  Specialized Market Focus
                  <br />
                  Reliable Delivery
                </p>
              </div>
            </div> */}

<div className="about-point">
  <div className="point-icon">
    <i className="bi bi-check-lg"></i>
  </div>

  <div className="point-content">
    <h4>Why Choose MakeMyEa?</h4>

    <span className="point-line"></span>

    <div className="about-mini-points">
      <span>
        <i className="bi bi-check2-circle"></i>
        100% Custom Engineering
      </span>

      <span>
        <i className="bi bi-check2-circle"></i>
        Specialized Market Focus
      </span>

      <span>
        <i className="bi bi-check2-circle"></i>
        Reliable Delivery
      </span>
    </div>
  </div>
</div>

          </div>

          {/* =========================
              CTA BUTTONS
          ========================== */}

          <div className="about-buttons">
            <button
              className="about-btn"
              onClick={() =>
                window.open(
                  "https://wa.me/919037953858?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20trading%20strategy.",
                  "_blank",
                )
              }
            >
              <i className="bi bi-chat-fill"></i>
              Talk to Our Team
            </button>

            <a
              href="https://greekslabs.com/team"
              target="_blank"
              rel="noopener noreferrer"
              className="about-team-btn"
            >
              Our Team
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* =========================
            RIGHT VISUAL
        ========================== */}

        {/* <div className="about-right">

          <div className="about-flow">

            <div className="about-flow-grid">

              <div className="about-flow-box">
                <i className="bi bi-mortarboard-fill"></i>
                <span>Training</span>
              </div>

              <div className="about-flow-box">
                <i className="bi bi-cpu-fill"></i>
                <span>Algo Technology</span>
              </div>

              <div className="about-flow-box active">
                <i className="bi bi-graph-up-arrow"></i>
                <span>Investments</span>
              </div>

              <div className="about-flow-box">
                <i className="bi bi-headset"></i>
                <span>Support</span>
              </div>

            </div>

          </div>


          <div className="about-highlight-card">

            <span className="about-highlight-small">
              WHO WE ARE
            </span>

            <h3>
              Creative Minds.
              <br />
              Smart Solutions.
              <br />
              <span>Powerful Results.</span>
            </h3>

            <div className="about-highlight-stats">

              <div>
                <strong>18+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>
                  <i className="bi bi-code-slash"></i>
                </strong>
                <span>Algo Development</span>
              </div>

            </div>

          </div>

        </div> */}

        {/* =========================
    RIGHT VIDEO
========================== */}

        <div
          className="about-right-video"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="about-video-wrapper">
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/images/earth.mp4" type="video/mp4" />
            </video>

            <div className="about-video-overlay"></div>

            {/* <div className="about-video-content">
      <span>GREEKSLABS</span>

      <h3>
        Technology Meets
        <br />
        <strong>Financial Markets</strong>
      </h3>
    </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
