// import "./Blog.css";

// function Blog() {
//   return (
//     <section className="blog-section" id="blog">
//       <div className="container">
//         {/* =========================
//             HEADER
//         ========================== */}

//         <div className="row justify-content-center">
//           <div className="col-12 col-lg-8 text-center">
//             <div
//               className="blog-tag"
//               data-aos="fade-up"
//               data-aos-duration="700"
//             >
//               {/* FOREX MARKET INSIGHTS{" "} */}
//               BLOG
//             </div>

//             <h2
//               className="blog-heading"
//               data-aos="fade-up"
//               data-aos-duration="800"
//             >
//               Forex Insights & <span>Market Analysis</span>
//             </h2>

//             <p
//               className="blog-subtitle"
//               data-aos="fade-up"
//               data-aos-duration="900"
//             >
//               get simple insights on Forex trading,currency pairs,market
//               movements,trading strategies and risk management.
//             </p>
//           </div>
//         </div>

//         {/* =========================
//             BLOG CONTENT
//         ========================== */}

//         <div className="row g-4 blog-row">
//           {/* FEATURED ARTICLE */}

//           <div className="col-12 col-lg-7">
//             <article
//               className="blog-card featured-blog"
//               data-aos="fade-right"
//               data-aos-duration="900"
//             >
//               {/* IMAGE */}

//               {/* <div className="featured-blog-image">

//                 <img
//                   src="/images/blog1.jpg"
//                   alt="Algorithmic trading strategy"
//                 />

//                 <div className="blog-image-overlay"></div>

//                 <div className="blog-category">
//                   DIRECTOR'S DESK
//                 </div>

//               </div> */}

//               <div className="featured-blog-image">
//                 {/* <video
//                   src="/images/goldfish.mp4"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 /> */}
//                  <img
//                   src="/images/4vs5.jpeg"
//                   alt="Algorithmic trading strategy"
//                 />

//                 <div className="blog-image-overlay"></div>

//                 <div className="blog-category">FOREX · TRADING PLATFORM</div>
//               </div>

//               {/* CONTENT */}

//               <div className="featured-blog-content">
//                 <div className="blog-meta">
//                   <span>
//                     <i className="bi bi-calendar3"></i>
//                     03 Sep 2026
//                   </span>

//                   {/* <span>
//                     <i className="bi bi-clock"></i>6 min read
//                   </span> */}
//                 </div>

//                 <h3>MT4 vs MT5: Which Trading Platform Should You Choose?</h3>

//                 <p>
//                   Explore the key differences between MetaTrader 4 and
//                   MetaTrader 5, including trading tools, strategy automation,
//                   backtesting, and how each platform supports algorithmic
//                   trading.
//                 </p>

//                 {/* <div className="blog-author-row">
//                   <div className="blog-author">
//                     <div className="blog-author-avatar">Author</div>

//                     <div>
//                       <h5>Vittamoney</h5>
//                       <span>Market Insights</span>
//                     </div>
//                   </div>

//                   <button className="blog-read-btn">
//                     Read Article
//                     <i className="bi bi-arrow-right"></i>
//                   </button>
//                 </div> */}
//               </div>
//             </article>
//           </div>

//           {/* RIGHT ARTICLES */}

//           <div className="col-12 col-lg-5">
//             <div className="row g-4 h-100">
//               {/* BLOG 2 */}

//               <div className="col-12">
//                 <article
//                   className="blog-card small-blog-card"
//                   data-aos="fade-left"
//                   data-aos-duration="800"
//                 >
//                   <div className="row g-0 h-100">
//                     <div className="col-4">
//                       <div className="small-blog-image">
//                         <img
//                           src="/images/4p.jpeg"
//                           alt="Forex trading strategy"
//                         />
//                       </div>
//                     </div>

//                     <div className="col-8">
//                       <div className="small-blog-content">
//                         <div className="small-blog-category">METATRADER 4</div>

//                         <h4>What is MetaTrader 4 (MT4)?</h4>

//                         <p>
//                           MT4 supports automated trading through Expert Advisors
//                           (EAs), which can execute predefined trading rules
//                           automatically.
//                         </p>

//                         <div className="small-blog-footer">
//                           <span>
//                             {" "}
//                             <i className="bi bi-calendar3"></i>
//                             03 Sep 2026
//                           </span>
// {/* 
//                           <button>
//                             <i className="bi bi-arrow-up-right"></i>
//                           </button> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </div>

//               {/* BLOG 3 */}

//               <div className="col-12">
//                 <article
//                   className="blog-card small-blog-card"
//                   data-aos="fade-left"
//                   data-aos-duration="900"
//                 >
//                   <div className="row g-0 h-100">
//                     <div className="col-4">
//                       <div className="small-blog-image">
//                         <img
//                           src="/images/5p.jpeg"
//                           alt="MT4 and MT5 algorithmic trading"
//                         />
//                       </div>
//                     </div>

//                     <div className="col-8">
//                       <div className="small-blog-content">
//                         <div className="small-blog-category">METATRADER 5 </div>

//                         <h4>What is MetaTrader 5 (MT5)?</h4>

//                         <p>
//                           MetaTrader 5 (MT5) is a newer multi-asset trading
//                           platform designed for manual and algorithmic trading.
//                           It provides more advanced tools and capabilities than
//                           MT4 in several areas, although the markets available
//                           to a trader depend on their broker.
//                         </p>

//                                <div className="small-blog-footer">
//                           <span>
//                             {" "}
//                             <i className="bi bi-calendar3"></i>
//                             04 Sep 2026
//                           </span>
// {/* 
//                           <button>
//                             <i className="bi bi-arrow-up-right"></i>
//                           </button> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =========================
//             BOTTOM CTA
//         ========================== */}

//         {/* <div className="row">
//           <div className="col-12">
//             <div className="blog-bottom">
//               <div>
//                 <span className="blog-bottom-label">
//                   More Forex Market Insights
//                 </span>

//                 <p>
//                   Forex Trading • Market Analysis • Currency Pairs • Trading
//                   Strategies
//                 </p>
//               </div>

//               <button className="view-all-blog-btn">
//                 View All Articles
//                 <i className="bi bi-arrow-right"></i>
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

// export default Blog;
































import { useState } from "react";
import "./Blog.css";

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      category: "FOREX · TRADING PLATFORM",
      title: "MT4 vs MT5: Which Trading Platform Should You Choose?",
      date: "03 Sep 2026",
      image: "/images/4vs5.jpeg",
      shortDescription:
        "Explore the key differences between MetaTrader 4 and MetaTrader 5, including trading tools, strategy automation, backtesting, and how each platform supports algorithmic trading.",
      content: [
        "MetaTrader 4 and MetaTrader 5 are two widely used trading platforms developed by MetaQuotes. Both platforms support manual and algorithmic trading, but they differ in their features, architecture and capabilities.",

        "MT4 is widely known for Forex trading and has a large ecosystem of Expert Advisors, indicators and custom trading tools. Traders can automate predefined strategies using Expert Advisors developed in MQL4.",

        "MT5 is the newer platform and provides additional features such as more order types, a more advanced strategy tester, additional timeframes and broader multi-asset support. Automated strategies on MT5 are developed using MQL5.",

        "The right platform depends on your broker, trading requirements and the type of automated strategy you want to build. If your strategy is already designed for MT4, continuing with MT4 may be practical. For newer projects requiring more advanced testing and execution capabilities, MT5 may offer additional flexibility.",
      ],
    },

    {
      id: 2,
      category: "METATRADER 4",
      title: "What is MetaTrader 4 (MT4)?",
      date: "03 Sep 2026",
      image: "/images/4p.jpeg",
      shortDescription:
        "MT4 supports automated trading through Expert Advisors (EAs), which can execute predefined trading rules automatically.",
      content: [
        "MetaTrader 4, commonly known as MT4, is a trading platform developed by MetaQuotes. It is widely used in the Forex market for chart analysis, manual trading and automated strategy execution.",

        "One of the key features of MT4 is its support for Expert Advisors. An Expert Advisor is a program that can monitor market conditions and execute trades automatically according to predefined trading rules.",

        "A custom EA can include entry conditions, exit conditions, stop-loss rules, take-profit levels, position sizing and additional risk-management logic.",

        "MT4 also provides technical indicators, multiple chart timeframes and historical data that can be used when developing and testing trading strategies.",
      ],
    },

    {
      id: 3,
      category: "METATRADER 5",
      title: "What is MetaTrader 5 (MT5)?",
      date: "04 Sep 2026",
      image: "/images/5p.jpeg",
      shortDescription:
        "MetaTrader 5 is a newer multi-asset trading platform designed for manual and algorithmic trading.",
      content: [
        "MetaTrader 5, commonly called MT5, is a newer trading platform developed by MetaQuotes. It supports both manual trading and algorithmic trading through automated programs.",

        "MT5 provides more advanced features than MT4 in several areas, including additional timeframes, more order types, an economic calendar and an improved strategy-testing environment.",

        "Automated strategies in MT5 are developed using MQL5. These programs can monitor market conditions, execute trades and manage positions based on predefined strategy rules.",

        "MT5 can support multiple asset classes depending on the broker, including Forex, stocks, futures and other financial instruments.",
      ],
    },
  ];

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <section className="blog-section" id="blog">
        <div className="container">

          {/* HEADER */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div
                className="blog-tag"
                data-aos="fade-up"
                data-aos-duration="700"
              >
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
                Get simple insights on Forex trading, currency pairs, market
                movements, trading strategies and risk management.
              </p>
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div className="row g-4 blog-row">

            {/* FEATURED BLOG */}
            <div className="col-12 col-lg-7">
              <article
                className="blog-card featured-blog"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="featured-blog-image">
                  <img
                    src={blogs[0].image}
                    alt={blogs[0].title}
                  />

                  <div className="blog-image-overlay"></div>

                  <div className="blog-category">
                    {blogs[0].category}
                  </div>
                </div>

                <div className="featured-blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="bi bi-calendar3"></i>
                      {blogs[0].date}
                    </span>
                  </div>

                  <h3>{blogs[0].title}</h3>

                  <p>
                    {blogs[0].shortDescription}
                  </p>

                  <button
                    className="blog-read-more-btn"
                    onClick={() => setSelectedBlog(blogs[0])}
                  >
                    Read More
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </article>
            </div>

            {/* RIGHT BLOGS */}
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
                            src={blogs[1].image}
                            alt={blogs[1].title}
                          />
                        </div>
                      </div>

                      <div className="col-8">
                        <div className="small-blog-content">
                          <div className="small-blog-category">
                            {blogs[1].category}
                          </div>

                          <h4>
                            {blogs[1].title}
                          </h4>

                          <p>
                            {blogs[1].shortDescription}
                          </p>

                          <div className="small-blog-footer">
                            <span>
                              <i className="bi bi-calendar3"></i>
                              {blogs[1].date}
                            </span>

                            <button
                              className="small-blog-read-btn"
                              onClick={() => setSelectedBlog(blogs[1])}
                            >
                              Read More
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
                          <img
                            src={blogs[2].image}
                            alt={blogs[2].title}
                          />
                        </div>
                      </div>

                      <div className="col-8">
                        <div className="small-blog-content">
                          <div className="small-blog-category">
                            {blogs[2].category}
                          </div>

                          <h4>
                            {blogs[2].title}
                          </h4>

                          <p>
                            {blogs[2].shortDescription}
                          </p>

                          <div className="small-blog-footer">
                            <span>
                              <i className="bi bi-calendar3"></i>
                              {blogs[2].date}
                            </span>

                            <button
                              className="small-blog-read-btn"
                              onClick={() => setSelectedBlog(blogs[2])}
                            >
                              Read More
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
        </div>
      </section>

      {/* =========================
          BLOG MODAL
      ========================== */}

      {selectedBlog && (
        <div
          className="blog-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="blog-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              className="blog-modal-close"
              onClick={closeModal}
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {/* IMAGE */}
            <div className="blog-modal-image">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
              />

              <div className="blog-modal-image-overlay"></div>

              <div className="blog-modal-category">
                {selectedBlog.category}
              </div>
            </div>

            {/* CONTENT */}
            <div className="blog-modal-content">

              <div className="blog-modal-meta">
                <span>
                  <i className="bi bi-calendar3"></i>
                  {selectedBlog.date}
                </span>
              </div>

              <h2>
                {selectedBlog.title}
              </h2>

              <div className="blog-modal-description">
                {selectedBlog.content.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="blog-modal-note">
                <i className="bi bi-info-circle"></i>

                <p>
                  Trading and algorithmic trading involve financial risk.
                  Platform features and available markets may vary depending
                  on the broker and trading environment.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;