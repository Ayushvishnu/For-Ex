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
      title: "The Most Expensive Button in Trading: Why Your Emotions Are Costing You Money Every trader knows the feeling.",
      date: "03 Sep 2026",
      image: "/images/b1.jpeg",
      shortDescription:
        "You spend hours analyzing the charts. Your setup is clear. The entry condition triggers. But right when you need to execute, your hand freezes Or worse—you move your Stop-Loss mid-trade because of hope.",
      // content: [
      //   "Manual trading doesn't fail because strategies don't work. It fails because human discipline collapses under real market stress.",

      //   "The Three Silent Profit Killers When real money is on the line, your brain switches from logic to survival mode:",

      //   "Fear: You exit a winning trade early for a tiny profit, leaving massive gains on the table.",

      //   "Greed: You ignore your plan, over-leverage, and chase extended candle spikes.",
      //   "Revenge: A bad loss tempts you to double down immediately, leading to a blown account.",
      //   "The Hard Truth: You cannot out-discipline human physiology. When the Indian market gaps up or Forex sessions swing wildly, logic surrenders to emotion.",
      //   "Why Code Never Flinches Algorithms don't have a heart rate. They don't panic on a red candle, and they don't get greedy on a green one.",
      //   "When you translate your proprietary strategy into a custom trading algo:",
      //   "Cold-Blooded Execution: Trades are placed in milliseconds—zero hesitation, zero second-guessing.",
      //   "Ironclad Risk Management: Stop-losses, profit targets, and position sizing are enforced with 100% mathematical precision.",
      //   "Consistent Edge: Your system trades your strategy exact to the rule, 24/5 or across every Indian market session.",
      //   "Stop Letting Emotions Trade Your Capital Trading without human error isn't a luxury anymore; it’s the standard for modern retail traders.",
      //   "Ready to automate your trading edge?",
      //   "Let us build a custom, emotion-free algorithm tailored to your precise strategy.",
      //   "👉 [Get Your Custom Algo Built Today]",
      // ],
content: [
  {
    type: "paragraph",
    text:
      "Manual trading doesn't fail because strategies don't work. It fails because human discipline collapses under real market stress.",
  },

  {
    type: "heading",
    text: "The Three Silent Profit Killers",
  },

  {
    type: "paragraph",
    text:
      "When real money is on the line, your brain switches from logic to survival mode.",
  },

  {
    type: "point",
    title: "Fear",
    text:
      "You exit a winning trade early for a tiny profit, leaving larger potential gains on the table.",
  },

  {
    type: "point",
    title: "Greed",
    text:
      "You ignore your trading plan, over-leverage, or chase extended market movements.",
  },

  {
    type: "point",
    title: "Revenge Trading",
    text:
      "A bad loss can tempt you to increase risk immediately and make decisions outside your original strategy.",
  },

  {
    type: "highlight",
    title: "The Hard Truth",
    text:
      "Market pressure can make disciplined execution difficult. During volatile Forex sessions or fast-moving Indian market conditions, emotions can influence decisions.",
  },

  {
    type: "heading",
    text: "Why Code Never Flinches",
  },

  {
    type: "paragraph",
    text:
      "Algorithms don't experience fear or greed. They simply follow the trading rules programmed into the system.",
  },

  {
    type: "point",
    title: "When you translate your proprietary strategy into a custom trading algo:",
    text:
      "Cold-Blooded Execution: Trades are placed in milliseconds—zero hesitation, zero second-guessing.",
  },

  {
    type: "point",
    title: "Ironclad Risk Management:",
    text:
      " Stop-losses, profit targets, and position sizing are enforced with 100% mathematical precision.",
  },

  {
    type: "point",
    title: "Consistent Edge",
    text:
      "Your system trades your strategy exact to the rule, 24/5 or across every Indian market session.",
  },

  {
    type: "heading",
    text: "Turn Your Trading Rules Into a System",
  },

  {
    type: "paragraph",
    text:
      "Stop Letting Emotions Trade Your Capital Trading without human error isn't a luxury anymore; it’s the standard for modern retail traders.",
  },


    {
    type: "heading",
    text: "Ready to automate your trading edge?",
  },

  {
    type: "paragraph",
    text:
      "Let us build a custom, emotion-free algorithm tailored to your precise strategy.",
  },
],

    },

    {
      id: 2,
      category: "METATRADER 4",
      title: "Math Doesn't Panic: The Core Advantage of Algorithmic Execution",
      date: "03 Sep 2026",
      image: "/images/b2.jpeg",
      shortDescription:
        "Open any retail trading terminal, and you will see chaos disguised as opportunity. Green candles spike, red candles crash, economic data drops, and social media buzz sends assets swinging in seconds.",
      // content: [
      //   "For a manual trader, this environment is a psychological minefield. For an algorithm, it is just raw data.",

      //   "The Flaw of Human Intuition : We like to think our ,gut feeling is a finely tuned trading asset. In reality, human intuition is heavily flawed by cognitive biases:",

      //   "Recency Bias: Letting the last trade dictate your next decision.",

      //   "Confirmation Bias: Seeing patterns on a chart that simply aren't there.",
      //   "Fatigue: Missing high-probability setups because you checked the charts two hours too late.",
      //   "Markets reward math, not emotion. If your trading plan relies on how you feel about a chart at 2:00 PM, you are playing a losing game against institutional systems designed to exploit human error.",
      //   "How Algorithms Turn Chaos Into Consistency: Algorithmic execution strips away the noise and replaces guesswork with a strict, repeatable framework:",
      //   "Pure Logic-Driven Rules: An algo doesn't care if a candle looks scary. If the technical indicators align, the order fires instantly.",
      //   "Unmatched Execution Speed: In fast-moving Forex sessions or volatile Indian market breakouts, milliseconds dictate your fill price. Code eliminates human reaction lag, drastically reducing slippage.",
      //   "Flawless Backtesting: Before risking a single rupee or dollar, a systemic strategy lets you test years of historical data to prove whether your edge actually works",
      //   "Build Your System, Protect Your Edge You don't need to stare at glowing screens all day to be a successful trader. You just need a proven methodology backed by cold, hard code.",
      //   "Whether you trade the NSE, MCX, or global Forex pairs, converting your strategy into a custom automation tool is the ultimate upgrade for your trading business.",
      //   "👉 [Turn Your Strategy Into a Custom Algo Today]"
      //   // button navigate to strategy details
      // ],


content: [
  {
    type: "paragraph",
    text:
      "For a manual trader, rapidly changing markets can create psychological pressure. For an algorithm, market movements are simply data evaluated against predefined conditions.",
  },

  {
    type: "heading",
    text: "The Flaw of Human Intuition",
  },

  {
    type: "paragraph",
    text:
      "We like to think our gut feeling is a finely tuned trading asset. In reality, human intuition is heavily flawed by cognitive biases:",
  },

  {
    type: "point",
    title: "Recency Bias",
    text:
      "Allowing the result of your most recent trade to influence your next decision.",
  },

  {
    type: "point",
    title: "Confirmation Bias",
    text:
      "Looking only for information that supports the trade you already want to take.",
  },

  {
    type: "point",
    title: "Fatigue",
    text:
      "Missing setups or making inconsistent decisions after continuously monitoring markets.",
  },

  {
    type: "heading",
    text: "Markets reward math, not emotion. If your trading plan relies on how you feel about a chart at 2:00 PM, you are playing a losing game against institutional systems designed to exploit human error.",
  },

  {
    type: "point",
    title: "Pure Logic-Driven Rules",
    text:
      " An algo doesn't care if a candle looks scary. If the technical indicators align, the order fires instantly.",
  },

  {
    type: "point",
    title: "Unmatched Execution Speed",
    text:
      "In fast-moving Forex sessions or volatile Indian market breakouts, milliseconds dictate your fill price. Code eliminates human reaction lag, drastically reducing slippage.",
  },

  {
    type: "point",
    title: "Flawless Backtesting",
    text:
      " Before risking a single rupee or dollar, a systemic strategy lets you test years of historical data to prove whether your edge actually works.",
  },

  {
    type: "heading",
    text: "Build Your System, Protect Your Edge",
  },

  {
    type: "paragraph",
    text:
      "You don't need to stare at glowing screens all day to be a successful trader. You just need a proven methodology backed by cold, hard code.  Whether you trade the NSE, MCX, or global Forex pairs, converting your strategy into a custom automation tool is the ultimate upgrade for your trading business.",

  },
],


    },

    {
      id: 3,
      category: "METATRADER 5",
      title: "Stop Renting Indicators: Why Custom-Built Systems Beat Out-of-the-Box Tools",
      date: "04 Sep 2026",
      image: "/images/b3.jpeg",
      shortDescription:
        "Every retail trader has been there: you buy a shiny new indicator package online, plug it into your charts, and watch it fail within a week.",
      // content: [
      //   "Why? Because off-the-shelf, mass-market tools are built for the masses—which means they are built to fail against institutional liquidity. Every other retail trader is looking at the exact same lagging moving averages and oversold RSI zones.",

      //   "If everyone uses the same blueprint, nobody has an edge.",

      //   "The Trap of Generic Indicators Mass-market retail indicators come with major structural flaws:",

      //   "Lagging Data: Most generic tools react after a market move has already happened, leaving you chasing entries.",

      //   "One-Size-Fits-All Settings: A default setting built for a US tech stock will bleed your capital dry in an Indian index breakout or a high-leverage Forex pair.",

      //   "Zero Proprietary Logic: Anyone can buy them. If your strategy is identical to thousands of others, your broker and market makers will hunt your stops with ease.",

      //   "The Power of Custom System Engineering A true trading edge cannot be bought off a shelf; it must be engineered. When you build a custom algorithm around your own unique logic, everything changes:",
      //   "Tailored Architecture: Your risk parameters, entry triggers, and multi-timeframe filters are coded specifically to match your trading personality and capital size.",
      //   "Proprietary Protection: Your logic remains strictly yours. No one else is front-running your setup because your code is unique.",
      //   "Seamless Integration: Whether you trade high-frequency momentum on Indian indices or overnight trends in Forex, your custom system is optimized for your exact asset class and execution speed.",
      //   "Stop Renting, Start Building It’s time to stop relying on generic tools designed to profit off your subscriptions. Take the strategy that actually works for you and turn it into a custom-engineered asset.",
      //   "👉 [Turn Your Unique Strategy Into a Custom Algo Today]"
      //   //         // button navigate to strategy details

      // ],

      content: [
  {
    type: "paragraph",
    text:
      "Why? Because off-the-shelf, mass-market tools are built for the masses—which means they are built to fail against institutional liquidity. Every other retail trader is looking at the exact same lagging moving averages and oversold RSI zones",
  },

  {
    type: "heading",
    text: "If everyone uses the same blueprint, nobody has an edge.",
  },

  {
    type: "point",
    title: "The Trap of Generic Indicators Mass-market retail indicators come with major structural flaws:",
    text:
      "Lagging Data: Most generic tools react after a market move has already happened, leaving you chasing entries.",
  },

  {
    type: "point",
    title: "One-Size-Fits-All Settings",
    text:
      "A default setting built for a US tech stock will bleed your capital dry in an Indian index breakout or a high-leverage Forex pair.",
  },

  {
    type: "point",
    title: "Zero Proprietary Logic:",
    text:
      "Anyone can buy them. If your strategy is identical to thousands of others, your broker and market makers will hunt your stops with ease.",
  },

  {
    type: "heading",
    text: "The Power of Custom System Engineering",
  },

  {
    type: "point",
    title: "A true trading edge cannot be bought off a shelf;",
    text:
      "it must be engineered. When you build a custom algorithm around your own unique logic, everything changes:",
  },

  {
    type: "point",
    title: "Tailored Architecture",
    text:
      " Your risk parameters, entry triggers, and multi-timeframe filters are coded specifically to match your trading personality and capital size.",
  },

  {
    type: "point",
    title: "Proprietary Protection",
    text:
      "Your logic remains strictly yours. No one else is front-running your setup because your code is unique.",
  },

  {
    type: "heading",
    text: "Seamless Integration:",
  },

  {
    type: "paragraph",
    text:
      " Whether you trade high-frequency momentum on Indian indices or overnight trends in Forex, your custom system is optimized for your exact asset class and execution speed.",
  },



  {
    type: "heading",
    text: "Stop Renting, Start Building",
  },

  {
    type: "paragraph",
    text:
      "It’s time to stop relying on generic tools designed to profit off your subscriptions. Take the strategy that actually works for you and turn it into a custom-engineered asset.",
  },


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

              {/* <div className="blog-modal-description">
                {selectedBlog.content.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div> */}
<div className="blog-modal-description">

  {selectedBlog.content.map((item, index) => {

    if (item.type === "heading") {
      return (
        <h3
          className="blog-modal-section-title"
          key={index}
        >
          {item.text}
        </h3>
      );
    }

    if (item.type === "point") {
      return (
        <div
          className="blog-modal-point"
          key={index}
        >
          <div className="blog-modal-point-icon">
            <i className="bi bi-check2"></i>
          </div>

          <div>
            <h5>{item.title}</h5>

            <p>{item.text}</p>
          </div>
        </div>
      );
    }

    if (item.type === "highlight") {
      return (
        <div
          className="blog-modal-highlight"
          key={index}
        >
          <i className="bi bi-lightning-charge-fill"></i>

          <div>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      );
    }

    return (
      <p
        className="blog-modal-paragraph"
        key={index}
      >
        {item.text}
      </p>
    );
  })}

</div>


              {/* <div className="blog-modal-note">
                <i className="bi bi-info-circle"></i>

                <p>
                  Trading and algorithmic trading involve financial risk.
                  Platform features and available markets may vary depending
                  on the broker and trading environment.
                </p>
              </div> */}

<div className="blog-modal-cta">
  <div>
    <span>HAVE A TRADING STRATEGY?</span>

    <h4>
      Turn Your Strategy Into an Automated System
    </h4>

    <p>
      Share your trading rules with our team and discuss how they
      can be developed into a custom algorithm.
    </p>
  </div>

  <button
    className="blog-strategy-btn"
    onClick={() => {
      closeModal();

      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 200);
    }}
  >
    Build Your Strategy

    <i className="bi bi-arrow-right"></i>
  </button>
</div>


            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;


