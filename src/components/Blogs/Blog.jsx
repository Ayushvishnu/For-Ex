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
              {/* FOREX MARKET INSIGHTS{" "} */}
              BLOG
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
                {/* <video
                  src="/images/goldfish.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                /> */}
                 <img
                  src="/images/4vs5.jpeg"
                  alt="Algorithmic trading strategy"
                />

                <div className="blog-image-overlay"></div>

                <div className="blog-category">FOREX · TRADING PLATFORM</div>
              </div>

              {/* CONTENT */}

              <div className="featured-blog-content">
                <div className="blog-meta">
                  <span>
                    <i className="bi bi-calendar3"></i>
                    03 Sep 2026
                  </span>

                  {/* <span>
                    <i className="bi bi-clock"></i>6 min read
                  </span> */}
                </div>

                <h3>MT4 vs MT5: Which Trading Platform Should You Choose?</h3>

                <p>
                  Explore the key differences between MetaTrader 4 and
                  MetaTrader 5, including trading tools, strategy automation,
                  backtesting, and how each platform supports algorithmic
                  trading.
                </p>

                {/* <div className="blog-author-row">
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
                </div> */}
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
                        <img
                          src="/images/4.png"
                          alt="Forex trading strategy"
                        />
                      </div>
                    </div>

                    <div className="col-8">
                      <div className="small-blog-content">
                        <div className="small-blog-category">METATRADER 4</div>

                        <h4>What is MetaTrader 4 (MT4)?</h4>

                        <p>
                          MT4 supports automated trading through Expert Advisors
                          (EAs), which can execute predefined trading rules
                          automatically.
                        </p>

                        <div className="small-blog-footer">
                          <span>
                            {" "}
                            <i className="bi bi-calendar3"></i>
                            03 Sep 2026
                          </span>
{/* 
                          <button>
                            <i className="bi bi-arrow-up-right"></i>
                          </button> */}
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
                        <img
                          src="/images/5.png"
                          alt="MT4 and MT5 algorithmic trading"
                        />
                      </div>
                    </div>

                    <div className="col-8">
                      <div className="small-blog-content">
                        <div className="small-blog-category">METATRADER 5 </div>

                        <h4>What is MetaTrader 5 (MT5)?</h4>

                        <p>
                          MetaTrader 5 (MT5) is a newer multi-asset trading
                          platform designed for manual and algorithmic trading.
                          It provides more advanced tools and capabilities than
                          MT4 in several areas, although the markets available
                          to a trader depend on their broker.
                        </p>

                               <div className="small-blog-footer">
                          <span>
                            {" "}
                            <i className="bi bi-calendar3"></i>
                            04 Sep 2026
                          </span>
{/* 
                          <button>
                            <i className="bi bi-arrow-up-right"></i>
                          </button> */}
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

        {/* <div className="row">
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
        </div> */}
      </div>
    </section>
  );
}

export default Blog;
