import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-left">
          <div className="about-tag">ABOUT FOREX</div>
          <h2 className="about-title">
            Understand Forex Trading <br />
            With Clear <span> Market Insights</span>
          </h2>

          <p className="about-description">
            Get practical insights into Forex trading, currency pairs and market
            movements. Learn how market analysis, trading strategies and risk
            management can help you approach Forex with a clear plan.
          </p>

          {/* PRINCIPLES */}

          <div className="about-points">
            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">
                <h4>Market Insights</h4>

                <span className="point-line"></span>

                {/* <p>We begin with the trader&apos;s logic.</p> */}
                <p>Understand key Forex market movements.</p>
              </div>
            </div>

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">
                <h4>
                Trading <br /> Strategies

                </h4>

                <span className="point-line"></span>

                <p>Explore practical strategies for different market conditions. </p>
              </div>
            </div>

            <div className="about-point">
              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">
                <h4>Risk Management
</h4>


                <span className="point-line"></span>

                <p>Learn how to manage risk while trading Forex.</p>
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
                <span>Market</span>
              </div>
              <div className="about-flow-box">
                <i className="bi bi-rulers"></i>
                <span>Analysis</span>
              </div>

              <div className="about-flow-box active">
                <i className="bi bi-robot"></i>
                <span>Strategy</span>
              </div>
            </div>

            <div className="about-flow-bottom">
              <div className="about-flow-box">
                <i className="bi bi-bullseye"></i>
                <span>Risk</span>
              </div>
            </div>

             {/* <div className="about-flow-box">
                <i className="bi bi-brain-fill"></i>
                <span> Decision</span>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
