import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What is Forex trading?",
      answer:
        "Forex trading is the buying and selling of currency pairs such as EUR/USD and GBP/USD. Traders study market movements and other factors before making trading decisions.",
    },
    {
      question: "How does the Forex market work?",
      answer:
        "The Forex market is a global market where currencies are traded in pairs. Prices can move based on factors such as economic data, interest rates, news and market demand.",
    },
    {
      question: "What are currency pairs in Forex?",
      answer:
        "A currency pair shows the value of one currency against another. Major pairs include EUR/USD, GBP/USD, USD/JPY and USD/CHF.",
    },
    {
      question: "What is Forex market analysis?",
      answer:
        "Forex market analysis involves studying price movements, economic factors and market trends to better understand possible market conditions.",
    },
    {
      question: "Is Forex trading profitable?",
      answer:
        "Forex trading involves risk, and profits are never guaranteed. Market prices can change quickly, so understanding risk management and having a clear trading plan are important.",
    },
    // {
    //   question: "What information should I provide for development?",
    //   answer:
    //     "You should provide your strategy logic including entry rules, exit rules, stop loss, target, indicators, timeframe, trading session and any additional conditions you currently follow.",
    // },
    // {
    //   question: "Is strategy testing included?",
    //   answer:
    //     "Testing requirements can be included as part of the development process depending on the strategy scope and agreed implementation plan.",
    // },
    // {
    //   question: "Can the strategy be modified later?",
    //   answer:
    //     "Yes. Strategy logic can be reviewed and modified later based on the agreed development scope and additional requirements.",
    // },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* HEADER */}

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className="faq-tag" data-aos="fade-up" data-aos-duration="700">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2
              className="faq-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Questions About <span>Forex Trading?</span>
            </h2>

            <p
              className="faq-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Find simple answers to common questions about Forex trading,
              currency pairs, market analysis and risk management.
            </p>
          </div>
        </div>

        {/* FAQ CONTENT */}

        <div className="row g-4 faq-main-row">
          {/* LEFT INFO */}

          <div className="col-12 col-lg-4">
            <div
              className="faq-side-card"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="faq-side-icon">
                <i className="bi bi-chat-square-dots-fill"></i>
              </div>

              <h3>
                Still Have
                <br />
                Questions?
              </h3>

              <p>
                have a Question about Forex trading or the currency market? Our
                team is here to help you understand the basics and get started.
              </p>

              <button className="faq-contact-btn">
                Talk to Our Team
                <i className="bi bi-arrow-right"></i>
              </button>

              <div className="faq-side-line"></div>

              <div className="faq-support-item">
                <i className="bi bi-headset"></i>

                <div>
                  <span>Forex Support</span>
                  <p>Forex • Currency Pairs • Market Analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDION */}

          <div className="col-12 col-lg-8">
            <div
              className="faq-list"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              {faqData.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <div className="faq-question-left">
                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h4>{faq.question}</h4>
                    </div>

                    <span className="faq-toggle">
                      <i
                        className={
                          activeIndex === index
                            ? "bi bi-dash-lg"
                            : "bi bi-plus-lg"
                        }
                      ></i>
                    </span>
                  </button>

                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}

        {/* <div className="row">
          <div className="col-12">
            <div className="faq-bottom">
              <div>
                <span className="faq-bottom-title">
                  Ready to Learn More About Forex?
                </span>

                <p>
                  Build your understanding of Forex trading, market analysis and
                  risk management.{" "}
                </p>
              </div>

              <button className="faq-start-btn">
                Learn Forex Trading → <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default FAQ;
