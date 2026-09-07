import "./AlgoTrading.css";

function AlgoTrading() {
  return (
    <section className="algo-section" id="algo-trading">
      <div className="container">
        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 text-center">
            <div className="algo-tag">FOREX TRADING </div>

            <h2 className="algo-heading">
              What Is <span>Forex Trading?</span>
            </h2>

            <p className="algo-description">
              Forex trading involves buying and selling currency pairs in the
              global market based on price movements. The market operates 24
              hours a day, five days a week, with a wide range of currency pairs
              to trade.
            </p>
          </div>
        </div>

        {/* =====================================
            ALGO PROCESS
        ====================================== */}

        <div className="row g-3 algo-process-row">
          {/* Market Data */}

          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>

              <h5>Currency Pairs </h5>
            </div>
          </div>

          {/* Conditions */}

          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>

              <h5>Market Analysis</h5>
            </div>
          </div>

          {/* Strategy Logic */}

          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-brain"></i>
              </div>

              <h5>Trading Strategies</h5>
            </div>
          </div>

          {/* Signal */}

          <div className="col-12 col-sm-6 col-md-6 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-broadcast-pin"></i>
              </div>

              <h5>Risk Management</h5>
            </div>
          </div>

          {/* Execution */}

          <div className="col-12 col-sm-6 col-md-6 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-rocket-takeoff-fill"></i>
              </div>

              <h5>24/5 Market</h5>
            </div>
          </div>
        </div>

        {/* =====================================
            ADVANTAGES + CONSIDERATIONS
        ====================================== */}

        <div className="row g-4 algo-comparison-row">
          {/* ADVANTAGES */}

          <div className="col-12 col-lg-6">
            <div className="algo-info-card advantage-card">
              <h3 className="advantage-title">
                <i className="bi bi-check2"></i>
                Advantages
              </h3>

              <div className="algo-list">
                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>High liquidity</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>Trade 24 hours, five days a week</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>Opportunities in rising and falling markets </span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>Wide range of currency pairs </span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>Potential for short-term and long-term trading </span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>
                    Accessible from anywhere with an internet connection{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CONSIDERATIONS */}

          <div className="col-12 col-lg-6">
            <div className="algo-info-card consideration-card">
              <h3 className="consideration-title">
                <i className="bi bi-binoculars-fill"></i>
                Considerations
              </h3>

              <div className="algo-list">
                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

                  <span>Currency prices can be volatile</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

                  <span>Market conditions can change quickly</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

                  <span>Proper risk management is important</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

                  <span>Requires knowledge and continuous learning</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

                  <span>Leverage can increase both profits and losses</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

                  <span>No strategy guarantees profits </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            DISCLAIMER
        ====================================== */}

        {/* <div className="row">

          <div className="col-12">

            <div className="algo-disclaimer">

              <i className="bi bi-exclamation-triangle"></i>

              <span>
                Algo trading does not guarantee profitability. Market risk,
                strategy limitations and technical issues remain possible.
              </span>

            </div>

          </div>

        </div> */}
      </div>
    </section>
  );
}

export default AlgoTrading;
