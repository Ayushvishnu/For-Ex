import "./Blog.css";

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">

            <div
              className="blog-tag"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              MARKET INSIGHTS
            </div>

            <h2
              className="blog-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Ideas, Strategies &{" "}
              <span>Market Thinking</span>
            </h2>

            <p
              className="blog-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Explore insights on Forex, algorithmic trading, strategy
              development, market concepts and trading technology from
              GreeksLabs.
            </p>

          </div>
        </div>


        {/* =========================
            BLOG CONTENT
        ========================== */}

        <div className="row g-4 blog-row">

          {/* FEATURED ARTICLE */}

          <div className="col-12 col-lg-7">

            <article
              className="blog-card featured-blog"
              data-aos="fade-right"
              data-aos-duration="900"
            >

              {/* IMAGE */}

              {/* <div className="featured-blog-image">

                <img
                  src="/images/blog1.jpg"
                  alt="Algorithmic trading strategy"
                />

                <div className="blog-image-overlay"></div>

                <div className="blog-category">
                  DIRECTOR'S DESK
                </div>

              </div> */}

              <div className="featured-blog-image">
  <video
    src="/images/goldfish.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  <div className="blog-image-overlay"></div>

  <div className="blog-category">
    DIRECTOR'S DESK
  </div>
</div>


              {/* CONTENT */}

              <div className="featured-blog-content">

                <div className="blog-meta">
                  <span>
                    <i className="bi bi-calendar3"></i>
                    03 Sep 2026
                  </span>

                  <span>
                    <i className="bi bi-clock"></i>
                    6 min read
                  </span>
                </div>


                <h3>
                  Building Trading Strategies Around Logic,
                  Not Emotion
                </h3>


                <p>
                  Understand how structured trading rules can transform
                  discretionary market ideas into systematic algorithmic
                  strategies.
                </p>


                <div className="blog-author-row">

                  <div className="blog-author">

                    <div className="blog-author-avatar">
                      GL
                    </div>

                    <div>
                      <h5>GreeksLabs</h5>
                      <span>Director's Desk</span>
                    </div>

                  </div>


                  <button className="blog-read-btn">

                    Read Article

                    <i className="bi bi-arrow-right"></i>

                  </button>

                </div>

              </div>

            </article>

          </div>


          {/* RIGHT ARTICLES */}

          <div className="col-12 col-lg-5">

            <div className="row g-4 h-100">


              {/* BLOG 2 */}

              <div className="col-12">

                <article
                  className="blog-card small-blog-card"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >

                  <div className="row g-0 h-100">

                    <div className="col-4">

                      <div className="small-blog-image">

                        {/* <img
                          src="/images/blog2.jpg"
                          alt="Forex trading strategy"
                        /> */}

                      </div>

                    </div>


                    <div className="col-8">

                      <div className="small-blog-content">

                        <div className="small-blog-category">
                          FOREX
                        </div>

                        <h4>
                          Understanding XAU/USD Strategy Development
                        </h4>

                        <p>
                          Key considerations when building systematic
                          Gold trading strategies.
                        </p>

                        <div className="small-blog-footer">

                          <span>
                            5 min read
                          </span>

                          <button>
                            <i className="bi bi-arrow-up-right"></i>
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              </div>


              {/* BLOG 3 */}

              <div className="col-12">

                <article
                  className="blog-card small-blog-card"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >

                  <div className="row g-0 h-100">

                    <div className="col-4">

                      <div className="small-blog-image">

                        {/* <img
                          src="/images/blog3.jpg"
                          alt="MT4 and MT5 algorithmic trading"
                        /> */}

                      </div>

                    </div>


                    <div className="col-8">

                      <div className="small-blog-content">

                        <div className="small-blog-category">
                          ALGO TRADING
                        </div>

                        <h4>
                          From Trading Rules to MT4 & MT5 Automation
                        </h4>

                        <p>
                          Learn how trading conditions can be structured
                          before algorithm development begins.
                        </p>

                        <div className="small-blog-footer">

                          <span>
                            7 min read
                          </span>

                          <button>
                            <i className="bi bi-arrow-up-right"></i>
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM CTA
        ========================== */}

        <div className="row">

          <div className="col-12">

            <div className="blog-bottom">

              <div>

                <span className="blog-bottom-label">
                  Explore More Insights
                </span>

                <p>
                  Forex • Algo Trading • Strategy Development • Technology
                </p>

              </div>


              <button className="view-all-blog-btn">

                View All Articles

                <i className="bi bi-arrow-right"></i>

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Blog;