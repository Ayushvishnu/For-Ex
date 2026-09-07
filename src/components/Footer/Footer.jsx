import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="row g-5 footer-main">

          {/* BRAND */}

          <div className="col-12 col-md-6 col-lg-4">

            <div className="footer-brand">

              <a href="#home" className="footer-logo">

                <div className="footer-logo-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <span>FOR-EX</span>

              </a>


              <p>
                Transforming trading ideas and market knowledge into
                structured algorithmic trading solutions for Forex
                and financial markets.
              </p>


              {/* SOCIAL ICONS */}

              <div className="footer-socials">

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

              </div>

            </div>

          </div>


          {/* COMPANY */}

          <div className="col-6 col-md-3 col-lg-2">

            <div className="footer-column">

              <h4>Company</h4>

              <ul>
                <li>
                  <a href="#about">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#blog">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#testimonials">
                    Testimonials
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>

            </div>

          </div>


          {/* SERVICES */}

          <div className="col-6 col-md-3 col-lg-2">

            <div className="footer-column">

              <h4>Services</h4>

              <ul>

                <li>
                  <a href="#algo-trading">
                    Algo Trading
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    Forex
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    Indian Market
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    Strategy Development
                  </a>
                </li>

              </ul>

            </div>

          </div>


          {/* RESOURCES */}

          <div className="col-6 col-md-3 col-lg-2">

            <div className="footer-column">

              <h4>Resources</h4>

              <ul>

                <li>
                  <a href="#faq">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#blog">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="/privacy-policy">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="/terms-and-conditions">
                    Terms & Conditions
                  </a>
                </li>

              </ul>

            </div>

          </div>


          {/* CONTACT */}

          <div className="col-6 col-md-3 col-lg-2">

            <div className="footer-column footer-contact">

              <h4>Contact</h4>

              <div className="footer-contact-item">

                <i className="bi bi-envelope"></i>

                <div>
                  <span>Email</span>
                  <a href="mailto:info@greekslabs.com">
                    info@forex.com
                  </a>
                </div>

              </div>


              <div className="footer-contact-item">

                <i className="bi bi-telephone"></i>

                <div>
                  <span>Phone</span>
                  <a href="tel:+910000000000">
                    +91 00000 00000
                  </a>
                </div>

              </div>


              <div className="footer-contact-item">

                <i className="bi bi-clock"></i>

                <div>
                  <span>Support</span>
                  <p>Mon – Sat</p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            RISK DISCLAIMER
        ========================== */}

        <div className="footer-risk">

          <div className="footer-risk-icon">
            <i className="bi bi-exclamation-triangle"></i>
          </div>

          <p>
            <strong>Risk Disclosure:</strong> Trading and algorithmic
            trading involve financial risk. Past performance does not
            guarantee future results. No trading strategy or technology
            can guarantee profitability.
          </p>

        </div>


        {/* =========================
            BOTTOM FOOTER
        ========================== */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} GreeksLabs Technologies Ltd.
            All Rights Reserved.
          </p>


          <div className="footer-bottom-links">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span></span>

            <a href="/terms-and-conditions">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;