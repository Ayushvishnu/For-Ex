// import "./About.css";

// function About() {
//   return (
//     <section className="about-section" id="about">
//       <div className="about-container">
//         {/* LEFT CONTENT */}
//         <div className="about-left">
//           <div className="about-tag">ABOUT GREEKSLABS</div>
//           <h2 className="about-title">
//             Empowering Investors With <br />
//             Knowledge, <span> Technology & Trust</span>
//           </h2>

//           <p className="about-description">
//             Get practical insights into Forex trading, currency pairs and market
//             movements. Learn how market analysis, trading strategies and risk
//             management can help you approach Forex with a clear plan.
//           </p>

//           {/* PRINCIPLES */}

//           <div className="about-points">
//             <div className="about-point">
//               <div className="point-icon">
//                 <i className="bi bi-check-lg"></i>
//               </div>

//               <div className="point-content">
//                 <h4>Training Excellence</h4>

//                 <span className="point-line"></span>

//                 {/* <p>We begin with the trader&apos;s logic.</p> */}
//                 <p>
//                   We offer online and offline stock market training, from
//                   beginner investing to advanced algo trading, technical
//                   analysis, and automated trading.
//                 </p>
//               </div>
//             </div>

//             <div className="about-point">
//               <div className="point-icon">
//                 <i className="bi bi-check-lg"></i>
//               </div>

//               <div className="point-content">
//                 <h4>Advanced Algo Trading Solutions</h4>

//                 <span className="point-line"></span>

//                 <p>
//                   We develop custom algo trading software, trading bots, API
//                   integrations, and automation tools for faster and smarter
//                   trade execution.
//                 </p>
//               </div>
//             </div>

//             <div className="about-point">
//               <div className="point-icon">
//                 <i className="bi bi-check-lg"></i>
//               </div>

//               <div className="point-content">
//                 <h4>Diverse Financial Services</h4>

//                 <span className="point-line"></span>

//                 <p>
//                   We offer mutual funds, PMS, insurance, bonds, AIFs, and
//                   broking solutions to help investors build diversified
//                   portfolios.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CTA */}

//           <button className="about-btn">
//             <i className="bi bi-chat-fill"></i>
//             Talk to Our Team
//           </button>
//         </div>

//         {/* RIGHT VISUAL */}

//         {/* <div className="about-right">
//           <div className="about-flow">
//             <div className="about-flow-top">
//               <div className="about-flow-box">
//                 <i className="bi bi-brain-fill"></i>
//                 <span>18+ Years  of Exp</span>
//               </div>
//               <div className="about-flow-box">
//                 <i className="bi bi-rulers"></i>
//                 <span>Analysis</span>
//               </div>

//               <div className="about-flow-box active">
//                 <i className="bi bi-robot"></i>
//                 <span>Strategy</span>
//               </div>
//             </div>

//             <div className="about-flow-bottom">
//               <div className="about-flow-box">
//                 <i className="bi bi-bullseye"></i>
//                 <span>Risk</span>
//               </div>
//             </div>

      
//           </div>
//         </div> */}

//         <div className="about-flow">
//           <div className="about-flow-grid">
//             <div className="about-flow-box">
//               <i className="bi bi-brain-fill"></i>
//               <span>18+ Years  of Exp</span>
//             </div>

//             <div className="about-flow-box">
//               <i className="bi bi-rulers"></i>
//               <span>Analysis</span>
//             </div>

//             <div className="about-flow-box active">
//               <i className="bi bi-robot"></i>
//               <span>Strategy</span>
//             </div>

//             <div className="about-flow-box">
//               <i className="bi bi-bullseye"></i>
//               <span>Risk</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="about-left">

          <div
            className="about-tag"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            ABOUT GREEKSLABS
          </div>

          <h2
            className="about-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Financial Technology,
            <br />
            Trading & <span>Investment Solutions</span>
          </h2>

          <p
            className="about-description"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Greeks Labs Technologies Ltd is a Public Limited Company
            based in Kozhikode, Kerala, specializing in financial
            market IT solutions, algorithmic trading development and
            investment services.
          </p>

          <p
            className="about-description about-description-second"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We provide technology-driven financial solutions for
            investors, traders and corporate clients, with a focus on
            structured systems, research-based strategies and modern
            financial technology.
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

                <h4>
                  18+ Years of Experience
                </h4>

                <span className="point-line"></span>

                <p>
                  Experience across financial markets, technology and
                  investment services.
                </p>

              </div>

            </div>

            {/* POINT 2 */}

            <div className="about-point">

              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">

                <h4>
                  Customised Algo Development
                </h4>

                <span className="point-line"></span>

                <p>
                  Custom trading strategies, APIs, automation and
                  algorithmic trading solutions.
                </p>

              </div>

            </div>

            {/* POINT 3 */}

            <div className="about-point">

              <div className="point-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <div className="point-content">

                <h4>
                  Financial Services
                </h4>

                <span className="point-line"></span>

                <p>
                  Mutual funds, PMS, insurance, bonds, AIFs, broking
                  and unlisted share investment solutions.
                </p>

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
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
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

      </div>
    </section>
  );
}

export default About;
