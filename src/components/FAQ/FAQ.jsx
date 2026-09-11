import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Can you build an algo from my existing trading strategy?",
      answer:
        "Yes. We analyse your trading strategy, understand its rules and conditions, and build them into a custom algorithm designed for automated execution.",
    },
    {
      question: "How do you convert a trading strategy into an automated system?",
      answer:
        "We first understand your strategy and map its trading logic, then code, test and configure the system according to your requirements.",
    },
    {
      question: "Do you develop custom Expert Advisors for MT4 and MT5?",
      answer:
        "Yes. We develop custom Expert Advisors for both MT4 and MT5 based on your trading strategy, entry and exit rules, indicators and risk parameters.",
    },
    {
      question: "Do you provide complete EA setup and configuration?",
      answer:
        "Yes. We can assist with the required MT4 or MT5 setup, EA installation, configuration and deployment based on your trading environment.",
    },
    {
      question: "Can you automate my entry, exit and risk-management rules?",
      answer:
        "Yes. Your predefined entry, exit, stop-loss, take-profit, position-sizing and other trading rules can be incorporated into the automated system.",
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

              <button className="faq-contact-btn"
               onClick={() =>
    window.open(
      "https://wa.me/919037953858?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20trading%20strategy.",
      "_blank"
    )
  }>
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
