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
              FOREX MARKET INSIGHTS{" "}
            </div>

            <h2
              className="blog-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Forex Insights & <span>Market Analysis</span>
            </h2>

            <p
              className="blog-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              get simple insights on Forex trading,currency pairs,market
              movements,trading strategies and risk management.
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

                <div className="blog-category">FOREX TRADING</div>
              </div>

              {/* CONTENT */}

              <div className="featured-blog-content">
                <div className="blog-meta">
                  <span>
                    <i className="bi bi-calendar3"></i>
                    03 Sep 2026
                  </span>

                  <span>
                    <i className="bi bi-clock"></i>6 min read
                  </span>
                </div>

                <h3>Understanding Forex Market Movements</h3>

                <p>
                  Learn how currency prices move and what traders look at when
                  analysing the Forex market.
                </p>

                <div className="blog-author-row">
                  <div className="blog-author">
                    <div className="blog-author-avatar">Author</div>

                    <div>
                      <h5>Vittamoney</h5>
                      <span>Market Insights</span>
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
                          FOREX ANALYSIS
                        </div>

                        <h4>How Currency Pairs Move in the Forex Market</h4>

                        <p>
                          Understand the key factors that can influence major
                          currency pairs and Forex market movements.
                        </p>

                        <div className="small-blog-footer">
                          <span>5 min read</span>

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
                          TRADING STRATEGIES
                        </div>

                        <h4>
                          Forex Trading Strategies for Different Market
                          Conditions
                        </h4>

                        <p>
                          Learn how traders use different approaches based on
                          market trends, price movements and risk levels.
                        </p>

                        <div className="small-blog-footer">
                          <span>7 min read</span>

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
                  More Forex Market Insights
                </span>

                <p>
                  Forex Trading • Market Analysis • Currency Pairs • Trading
                  Strategies
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
