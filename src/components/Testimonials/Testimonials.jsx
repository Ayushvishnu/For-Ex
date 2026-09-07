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
              CLIENT EXPERIENCES
            </div>

            <h2
              className="testimonial-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              What Traders Say About
              <span> Working With Us</span>
            </h2>

            <p
              className="testimonial-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Hear from traders who worked with GreeksLabs to transform
              trading ideas into structured algorithmic strategies.
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

                <div className="testimonial-market">
                  FOREX • MT5
                </div>

              </div>


              <div className="testimonial-stars">

                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>

              </div>


              <p className="featured-quote">
                “GreeksLabs helped us take our trading concept from a simple
                idea to a clearly structured automated strategy. The process
                made it much easier to understand how our trading rules could
                be converted into an algorithm.”
              </p>


              <div className="testimonial-user">

                <div className="testimonial-avatar">
                  AK
                </div>

                <div className="testimonial-user-info">

                  <h4>Arjun K.</h4>

                  <p>
                    Forex Trader
                    <span>•</span>
                    XAU/USD
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

                    <div className="testimonial-avatar small-avatar">
                      RM
                    </div>

                    <div className="testimonial-user-info">

                      <h4>Rahul M.</h4>

                      <p>
                        Algo Trader • MT4
                      </p>

                    </div>


                    <div className="mini-quote">
                      <i className="bi bi-quote"></i>
                    </div>

                  </div>


                  <p className="small-quote">
                    “The requirement discussion was clear and practical.
                    Every condition in my strategy was reviewed before moving
                    into development.”
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

                    <div className="testimonial-avatar small-avatar">
                      DS
                    </div>

                    <div className="testimonial-user-info">

                      <h4>Deepak S.</h4>

                      <p>
                        Strategy Developer • Forex
                      </p>

                    </div>


                    <div className="mini-quote">
                      <i className="bi bi-quote"></i>
                    </div>

                  </div>


                  <p className="small-quote">
                    “I liked that the focus was on defining the strategy logic
                    properly rather than making unrealistic performance
                    promises.”
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

        <div className="row">

          <div className="col-12">

            <div className="testimonial-bottom">

              <div className="testimonial-bottom-text">

                <span className="testimonial-bottom-number">
                  Strategy First.
                </span>

                <span>
                  Technology that works around the trader&apos;s logic.
                </span>

              </div>


              <button className="testimonial-view-btn">

                View All Testimonials

                <i className="bi bi-arrow-right"></i>

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;