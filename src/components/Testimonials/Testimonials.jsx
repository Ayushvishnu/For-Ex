// import "./Testimonials.css";
import "./testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        {/* ===============================
            HEADER
        ================================ */}

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div
              className="testimonial-tag"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              TRADER EXPERIENCES{" "}
            </div>

            <h2
              className="testimonial-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              What Forex Traders <span> Say About Us</span>
            </h2>

            <p
              className="testimonial-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Hear from traders who use our Forex insights and market analysis
              to better understand currency markets and trading strategies.
            </p>
          </div>
        </div>

        {/* ===============================
            TESTIMONIAL CONTENT
        ================================ */}

        <div className="row g-4 testimonial-row">
          {/* ===============================
              FEATURED TESTIMONIAL
          ================================ */}

          <div className="col-12 col-lg-7">
            <div
              className="testimonial-card featured-testimonial"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="testimonial-top">
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>

                <div className="testimonial-market">FOREX • EUR/USD</div>
              </div>

              <div className="testimonial-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>

              <p className="featured-quote">
                “Make My EA ' team understood my trading strategy clearly and turned my manual rules into a custom EA exactly as I needed. The development process was smooth from start to finish.”
              </p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">AK</div>

                <div className="testimonial-user-info">
                  <h4>Arjun K.</h4>

                  <p>
                    Forex Trader
                    <span>•</span>
                    EUR/USD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===============================
              RIGHT TESTIMONIALS
          ================================ */}

          <div className="col-12 col-lg-5">
            <div className="row g-4 h-100">
              {/* TESTIMONIAL 2 */}

              <div className="col-12">
                <div
                  className="testimonial-card small-testimonial"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="small-testimonial-header">
                    <div className="testimonial-avatar small-avatar">RM</div>

                    <div className="testimonial-user-info">
                      <h4>Rahul M.</h4>

                      <p>Forex Trader · MT5</p>
                    </div>

                    <div className="mini-quote">
                      <i className="bi bi-quote"></i>
                    </div>
                  </div>

                  <p className="small-quote">
                    “I wanted to automate my manual strategy without spending weeks on development. Make My Ea 's  team understood my requirements, built the EA quickly and helped me get everything configured properly.”
                  </p>

                  <div className="testimonial-stars small-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>

              {/* TESTIMONIAL 3 */}

              <div className="col-12">
                <div
                  className="testimonial-card small-testimonial"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="small-testimonial-header">
                    <div className="testimonial-avatar small-avatar">DS</div>

                    <div className="testimonial-user-info">
                      <h4>Deepak S.</h4>

                      <p>Forex Trader • Market Analysis</p>
                    </div>

                    <div className="mini-quote">
                      <i className="bi bi-quote"></i>
                    </div>
                  </div>

                  <p className="small-quote">
                  “Quick development, clear communication and complete setup. Make My EA team made automating my strategy surprisingly simple.”
                  </p>

                  <div className="testimonial-stars small-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================
            BOTTOM
        ================================ */}

        {/* <div className="row">
          <div className="col-12">
            <div className="testimonial-bottom">
              <div className="testimonial-bottom-text">
                <span className="testimonial-bottom-number">
                  Forex Focused.
                </span>

                <span>Clear insights for better Forex trading decisions. </span>
              </div>

              <button className="testimonial-view-btn">
                View All Testimonials
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Testimonials;
