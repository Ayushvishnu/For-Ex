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
            <div className="algo-tag">ALGO TRADING </div>

            <h2 className="algo-heading">
              Benefits of <span>Algo Trading?</span>
            </h2>

            <p className="algo-description">
              Algorithmic trading helps traders execute predefined strategies
              with greater speed, consistency, discipline, and automation while
              reducing the impact of emotional decision-making.
            </p>
          </div>
        </div>

        {/* =====================================
            ALGO PROCESS
        ====================================== */}

        {/* <div className="row g-3 algo-process-row">

          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>

              <h5>Market Data </h5>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>

              <h5>Conditions</h5>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-brain"></i>
              </div>

              <h5>Strategy Logic</h5>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-6 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-broadcast-pin"></i>
              </div>

              <h5>Signal</h5>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-6 col-lg">
            <div className="algo-process-card">
              <div className="algo-process-icon">
                <i className="bi bi-rocket-takeoff-fill"></i>
              </div>

              <h5>Execution</h5>
            </div>
          </div>
        </div> */}

        {/* =====================================
            ADVANTAGES + CONSIDERATIONS
        ====================================== */}

        <div className="row g-4 algo-comparison-row">
          {/* ADVANTAGES */}

          <div className="col-12 col-lg-6">
            <div className="algo-info-card advantage-card">
              <h3 className="advantage-title">
                <i className="bi bi-check2"></i>
      Key Benefits
              </h3>

              <div className="algo-list">
                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

        <span>Faster and more efficient trade execution</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

        <span>Consistent rule-based decision making</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

        <span>Reduced emotional interference while trading</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

        <span>Ability to monitor multiple markets and conditions</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

        <span>Automated entries, exits, stop loss and targets</span>
                </div>

                <div className="algo-list-item advantage-item">
                  <i className="bi bi-check-lg"></i>

                  <span>
        <span>Supports backtesting and strategy refinement</span>
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
      Important Considerations
              </h3>

              <div className="algo-list">
                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

        <span>Strategy rules must be clearly defined</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

        <span>Market conditions can change over time</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

        <span>Proper risk management is still essential</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

        <span>Technical failures and connectivity issues are possible</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

        <span>Strategies should be tested before live deployment</span>
                </div>

                <div className="algo-list-item consideration-item">
                  <span className="consideration-dot"></span>

        <span>No algorithm or strategy can guarantee profit</span>
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
