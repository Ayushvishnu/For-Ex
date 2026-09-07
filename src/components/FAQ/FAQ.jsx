import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What does GreeksLabs Technologies provide?",
      answer:
        "GreeksLabs Technologies helps traders convert their trading ideas, market concepts and rule-based strategies into structured algorithmic trading solutions.",
    },
    {
      question: "Can I convert my own Forex strategy into an algo?",
      answer:
        "Yes. You can explain your entry conditions, exit conditions, stop loss, target, indicators, timeframe and other trading rules. Our team can review the logic and structure it for algorithmic development.",
    },
    {
      question: "Do you support MT4 and MT5?",
      answer:
        "Yes. Forex strategy development can be planned for MT4, MT5 or both depending on your requirement and trading setup.",
    },
    {
      question: "Can you develop strategies for Gold / XAUUSD?",
      answer:
        "Yes. Strategy requirements can include XAU/USD as well as major Forex currency pairs and other supported instruments.",
    },
    {
      question: "Do you guarantee profit from an algo strategy?",
      answer:
        "No. Trading involves financial risk and algorithmic trading does not guarantee profitability. Market conditions, strategy limitations and technical factors can affect results.",
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

            <div
              className="faq-tag"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2
              className="faq-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Questions Before You{" "}
              <span>Start?</span>
            </h2>

            <p
              className="faq-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Understand how our Forex strategy development and algorithmic
              trading process works before starting your project.
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
                Tell us about your strategy idea and our team can help you
                understand the next steps.
              </p>

              <button className="faq-contact-btn">
                Talk to Our Team
                <i className="bi bi-arrow-right"></i>
              </button>

              <div className="faq-side-line"></div>

              <div className="faq-support-item">
                <i className="bi bi-headset"></i>

                <div>
                  <span>Strategy Support</span>
                  <p>Forex • MT4 • MT5 • Algo</p>
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

                      <h4>
                        {faq.question}
                      </h4>

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
                      <p>
                        {faq.answer}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* BOTTOM CTA */}

        <div className="row">

          <div className="col-12">

            <div className="faq-bottom">

              <div>
                <span className="faq-bottom-title">
                  Ready to Build Your Strategy?
                </span>

                <p>
                  Share your trading logic with GreeksLabs.
                </p>
              </div>


              <button className="faq-start-btn">
                Start Your Strategy
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;