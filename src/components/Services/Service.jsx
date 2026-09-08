import "./Service.css";

function Service() {
  return (
    <section className="service-section" id="service">
      <div className="container">

        {/* HEADER */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 text-center">

            <div
              className="service-tag"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              OUR SERVICES
            </div>

            <h2
              className="service-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Algo Development for
              <span> Forex & Indian Markets</span>
            </h2>

            <p
              className="service-description"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              We help transform clearly defined trading ideas into structured
              algorithmic strategies for Forex platforms and Indian market
              broker integrations.
            </p>

          </div>
        </div>


        {/* SERVICE CARDS */}
        <div className="row g-4 service-row">

          {/* FOREX SERVICE */}
          <div className="col-12 col-lg-6">

            <div
              className="service-card"
              data-aos="fade-right"
              data-aos-duration="900"
            >

              <div className="service-card-top">

                <div className="service-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <span className="service-number">
                  01
                </span>

              </div>


              <h3>
                Forex Algo Development
              </h3>

              <p className="service-card-description">
                We help convert Forex trading ideas into structured
                algorithmic strategies for automated and rule-based
                execution across supported trading platforms.
              </p>


              <div className="service-list">

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    MT4 & MT5 Strategy Development
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Custom Entry & Exit Logic
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Stop Loss & Target Automation
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Indicator-Based Strategies
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Risk Management Rules
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Strategy Testing & Optimization
                  </span>
                </div>

              </div>


              <div className="service-bottom-text">
                Turn your Forex trading rules into automated strategies
                for MT4 and MT5 with custom entry, exit and risk-management
                logic.
              </div>

            </div>

          </div>


          {/* INDIAN MARKET SERVICE */}
          <div className="col-12 col-lg-6">

            <div
              className="service-card"
              data-aos="fade-left"
              data-aos-duration="900"
            >

              <div className="service-card-top">

                <div className="service-icon">
                  <i className="bi bi-bar-chart-fill"></i>
                </div>

                <span className="service-number">
                  02
                </span>

              </div>


              <h3>
                Indian Market Algo Development
              </h3>

              <p className="service-card-description">
                Build customized algorithmic trading solutions for Indian
                markets based on your strategy rules, broker setup and
                trading requirements.
              </p>


              <div className="service-list">

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Equity Strategy Automation
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Futures & Options Strategies
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Broker API Integration
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Rule-Based Order Execution
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Stop Loss & Target Automation
                  </span>
                </div>

                <div className="service-list-item">
                  <i className="bi bi-check2"></i>
                  <span>
                    Custom Trading Logic
                  </span>
                </div>

              </div>


              <div className="service-bottom-text">
                Automate strategies for Indian equities, futures and
                options with broker integrations and customized execution
                rules.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Service;