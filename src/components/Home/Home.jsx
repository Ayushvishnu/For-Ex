import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // animate again
      mirror: true, // animate when scrolling back
    });
  }, []);

  return (
    <main className="home" id="home">
      {/* BACKGROUND VIDEO */}
      <div className="home-video-bg">
        <video autoPlay loop muted playsInline preload="auto">
          {/* <source src="/public/images/circlenet.mp4" type="video/mp4" /> */}
          {/* <source src="/public/images/goldnet.mp4" type="video/mp4" /> */}
          <source src="/public/images/bgvdo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="home-video-overlay"></div>
      </div>

      <div className="home-container">
        {/* LEFT SIDE */}

        <div className="hero-left">
          <div
            className="hero-tag"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-once="false"
          >
            {/* FOREX · ALGO · TECHNOLOGY */}
            FOREX • MARKET ANALYSIS • TRADING EDUCATION
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="true"
          >
            {/* Turn Your Trading Ideas */}
Make Your Algo.
            <br />
            <div data-aos="fade-right">
              {" "}
             Automate  <span>Your </span>
              <br />
              <span>Strategy.</span>
            </div>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            data-aos-once="false"
          >
            Explore the Forex market with practical insights,market analysis and
            structured trading strategies designed to help you make more
            informed trading decisions
          </p>

          <div className="hero-buttons">
            {" "}
            <button
              className="primary-btn"
              data-aos="fade-up-right"
              data-aos-duration="900"
              data-aos-delay="300"
              data-aos-once="false"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <i className="bi bi-arrow-right"></i>
              Build your Strategy
              {/* Explore Forex Trading */}
            </button>
            <button
              className="secondary-btn"
              data-aos="fade-up-left"
              data-aos-duration="900"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <i className="bi bi-play-fill"></i>
              {/* How It Works */}
              Learn About Forex
            </button>
          </div>

          <div className="markets">
            <span>XE/USD</span>
            <span>GBP/USD</span>
            <span>USD/JPY</span>
            <span>USD/CHF</span>
            <span>AUD/USD</span>
            <span>USD/CAD</span>
            <span>NZD/USD</span>

            {/* <span>GOLD</span>
            <span>MT4</span>
            <span>MT5</span>
            <span>AUTOMATION</span> */}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">
          <div className="flow-row top-row">
            <div className="flow-box">
              <i className="bi bi-lightbulb-fill"></i>
              Strategy Submission
            </div>

            <div className="line"></div>

            <div className="flow-box">
              <i className="bi bi-gear-fill"></i>
              Strategy Evaluation{" "}
            </div>
          </div>

          <div className="flow-row middle-row">
            <div className="flow-box active-flow">
              <i className="bi bi-code-slash"></i>
              Algo Dev{" "}
            </div>

            <div className="line"></div>

            <div className="flow-box">
              <i className="bi bi-beaker-fill"></i>
              Strategy Automation{" "}
            </div>

            <div className="line small-line"></div>
          </div>

          <div className="flow-row bottom-row">
            <div className="flow-box execute-box">
              <i className="bi bi-play-fill"></i>
              Automated Trading{" "}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}

      {/* <div className="features-container">
        <div className="feature">
          <div className="feature-icon">
            <i className="bi bi-megaphone-fill"></i>
          </div>

          <span>Forex Guidance</span>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <i className="bi bi-cpu-fill"></i>
          </div>

          <span>Forex Market Analysis</span>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <i className="bi bi-globe2"></i>
          </div>

          <span>Forex & Currency Pairs</span>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <i className="bi bi-bar-chart-steps"></i>
          </div>

          <span>Trading Platforms</span>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <i className="bi bi-headset"></i>
          </div>

          <span>Trading Support</span>
        </div>
      </div> */}
    </main>
  );
}

export default Home;
