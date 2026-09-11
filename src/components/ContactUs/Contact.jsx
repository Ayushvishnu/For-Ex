import { useState } from "react";
import "./Contact.css";

function Contact() {
  // const [market, setMarket] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  const [market, setMarket] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   platform: "",
  //   strategyRequirements: "",
  // });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",

    brokerName: "",
    otherBrokerName: "",
    // tradingSegment: "",

    platform: "",
    strategyRequirements: "",
  });


const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || "");

      resolve(result.split(",")[1] || "");
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prevent double submit
//     if (loading) {
//       return;
//     }

//     setError("");

//     // ----------------------------
//     // Check market
//     // ----------------------------

//     if (!market) {
//       setError("Please select a market.");

//       return;
//     }

//     // ----------------------------
//     // Check Forex platform
//     // ----------------------------

//     if (market === "forex" && !formData.platform) {
//       setError("Please select MT4 or MT5.");

//       return;
//     }

//     const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

//     if (!scriptUrl) {
//       setError("Google Script URL is not configured.");

//       return;
//     }


// let fileName = "";
// let fileData = "";
// let fileMimeType = "";

// if (selectedFile) {
//   fileName = selectedFile.name;
//   fileMimeType = selectedFile.type;
//   fileData = await fileToBase64(selectedFile);
// }



//     const payload = {
//       fullName: formData.fullName.trim(),

//       email: formData.email.trim(),

//       phone: formData.phone.trim(),

//       market: market === "forex" ? "Forex" : "Indian Market",

//       platform: market === "forex" ? formData.platform : "",

//       strategyRequirements: formData.strategyRequirements.trim(),
//     };

//     try {
//       setLoading(true);

//       const response = await fetch(scriptUrl, {
//         method: "POST",

//         headers: {
//           "Content-Type": "text/plain;charset=utf-8",
//         },

//         body: JSON.stringify(payload),

//         redirect: "follow",
//       });

//       const result = await response.json();

//       console.log("Google Sheet response:", result);

//       if (!result.success) {
//         throw new Error(result.message || "Submission failed");
//       }

//       // SUCCESS

//       setSubmitted(true);

//       // Clear form

//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         platform: "",
//         strategyRequirements: "",
//       });

//       setMarket("");
//     } catch (err) {
//       console.error(err);

//       setError(err.message || "Unable to submit strategy request.");
//     } finally {
//       setLoading(false);
//     }
//   };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };



const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) {
    return;
  }

  setError("");

  if (!market) {
    setError("Please select a market.");
    return;
  }

  if (market === "forex" && !formData.platform) {
    setError("Please select MT4 or MT5.");
    return;
  }

  if (market === "indian" && !formData.brokerName) {
    setError("Please select a broker.");
    return;
  }

  if (
    market === "indian" &&
    formData.brokerName === "Other" &&
    !formData.otherBrokerName.trim()
  ) {
    setError("Please enter broker name.");
    return;
  }

  const scriptUrl =
    import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    setError("Google Script URL is not configured.");
    return;
  }

  try {
    setLoading(true);

    let fileName = "";
    let fileData = "";
    let fileMimeType = "";

    if (selectedFile) {
      fileName = selectedFile.name;
      fileMimeType = selectedFile.type;
      fileData = await fileToBase64(selectedFile);
    }

    const finalBrokerName =
      market === "indian"
        ? formData.brokerName === "Other"
          ? formData.otherBrokerName.trim()
          : formData.brokerName
        : "";

    const payload = {
      fullName: formData.fullName.trim(),

      email: formData.email.trim(),

      phone: formData.phone.trim(),

      market:
        market === "forex"
          ? "Forex"
          : "Indian Market",

      brokerName: finalBrokerName,

      platform:
        market === "forex"
          ? formData.platform
          : "",

      strategyRequirements:
        formData.strategyRequirements.trim(),

      fileName,
      fileData,
      fileMimeType,
    };

    console.log("Submitting payload:", {
      ...payload,
      fileData: fileData
        ? `${fileData.length} characters`
        : "",
    });

    const response = await fetch(scriptUrl, {
      method: "POST",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8",
      },

      body: JSON.stringify(payload),

      redirect: "follow",
    });

    const result = await response.json();

    console.log(
      "Google Sheet response:",
      result
    );

    if (!result.success) {
      throw new Error(
        result.message ||
          "Submission failed"
      );
    }

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      brokerName: "",
      otherBrokerName: "",
      platform: "",
      strategyRequirements: "",
    });

    setSelectedFile(null);

    setMarket("");

  } catch (err) {
    console.error(err);

    setError(
      err.message ||
        "Unable to submit strategy request."
    );

  } finally {
    setLoading(false);
  }
};



  const handleMarketChange = (selectedMarket) => {
    setMarket(selectedMarket);

    setFormData((prev) => ({
      ...prev,

      brokerName: "",
      otherBrokerName: "",
      tradingSegment: "",
      platform: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,

      ...(name === "brokerName" && value !== "Other"
        ? {
            otherBrokerName: "",
          }
        : {}),
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, JPEG, PNG and PDF files are allowed.");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    const maxSize = 4 * 1024 * 1024;

    if (file.size > maxSize) {
      setError("File must be smaller than 4 MB.");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    setSelectedFile(file);
    setError("");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* ===============================
            HEADER
        ================================ */}

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div
              className="contact-tag"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              CONTACT FOR-EX GROUP
            </div>

            <h2
              className="contact-heading"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Tell Us What You <span>Want to Build</span>
            </h2>

            <p
              className="contact-subtitle"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Whether you trade Indian markets or Forex, share your idea with
              our team and help us understand your strategy requirements.
            </p>
          </div>
        </div>

        {/* ===============================
            CONTACT CONTENT
        ================================ */}

        <div className="row g-4 contact-main-row">
          {/* ===============================
              LEFT SIDE
          ================================ */}

          <div className="col-12 col-lg-4">
            <div
              className="contact-info-card"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="contact-info-icon">
                <i className="bi bi-chat-square-text-fill"></i>
              </div>

              <h3>
                Let&apos;s Discuss
                <br />
                Your Strategy
              </h3>

              <p className="contact-info-description">
                Have a trading concept in mind? Share your requirements and our
                team can review the idea with you.
              </p>

              <div className="contact-info-line"></div>

              {/* Email */}

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <span>Email</span>
                  <p>info@forex.com</p>
                </div>
              </div>

              {/* Phone */}

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <span>Phone</span>
                  <p>+91 00000 00000</p>
                </div>
              </div>

              {/* Working Hours */}

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>

                <div>
                  <span>Working Hours</span>
                  <p>Mon – Fri • 9:00 AM – 3:15 PM</p>
                </div>
              </div>

              <div className="contact-info-line"></div>

              <div className="contact-supported">
                <span>Strategy Support</span>

                <div className="contact-chips">
                  <div>FOREX</div>
                  <div>MT4</div>
                  <div>MT5</div>
                  <div>LOREM</div>
                </div>
              </div>

              <button className="whatsapp-btn">
                <i className="bi bi-whatsapp"></i>
                Chat on WhatsApp
              </button>
            </div>

            <div className="location-map-box">
              <div className="location-map-header">
                <div>
                  <span>LOCATION</span>
                  <h4>Calicut, Kerala</h4>
                </div>

                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps?q=Calicut%2C%20Kerala%2C%20India&output=embed&layer=s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Calicut Location"
                ></iframe>

                <div className="map-gold-overlay"></div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calicut%2C%20Kerala%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="map-view-btn"
              >
                <i className="bi bi-geo-alt-fill"></i>
                View Location
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* ===============================
              RIGHT FORM
          ================================ */}

          <div className="col-12 col-lg-8">
            <div
              className="contact-form-card"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  {/* FORM HEADER */}

                  <div className="contact-form-header">
                    <div>
                      <span className="contact-form-label">
                        STRATEGY ENQUIRY
                      </span>

                      <h3>Share Your Requirements</h3>
                    </div>

                    <div className="contact-form-number">01</div>
                  </div>

                  {/* ===============================
                      PERSONAL DETAILS
                  ================================ */}

                  <div className="contact-form-section">
                    <div className="form-section-title">
                      <span>01</span>
                      Personal Details
                    </div>

                    <div className="row g-3">
                      {/* Name */}

                      <div className="col-12 col-md-6">
                        <div className="contact-form-group">
                          <label>
                            Full Name <span>*</span>
                          </label>

                          <div className="contact-input-wrapper">
                            <i className="bi bi-person-fill"></i>

                            {/* <input
                              type="text"
                              placeholder="Enter your full name"
                              required
                            /> */}

                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}

                      <div className="col-12 col-md-6">
                        <div className="contact-form-group">
                          <label>
                            Email Address <span>*</span>
                          </label>

                          <div className="contact-input-wrapper">
                            <i className="bi bi-envelope"></i>

                            {/* <input
                              type="email"
                              placeholder="Enter your email"
                              required
                            /> */}

                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone */}

                      <div className="col-12">
                        <div className="contact-form-group">
                          <label>
                            Phone Number <span>*</span>
                          </label>

                          <div className="contact-input-wrapper">
                            <i className="bi bi-telephone"></i>

                            {/* <input
                              type="tel"
                              placeholder="Enter your phone number"
                              required
                            /> */}

                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===============================
                      MARKET
                  ================================ */}

                  <div className="contact-form-section">
                    <div className="form-section-title">
                      <span>02</span>
                      Market & Platform
                    </div>

                    <div className="row g-3">
                      <div className="col-12">
                        <div className="contact-form-group">
                          <label>
                            Market <span>*</span>
                          </label>

                          <div className="market-selector">
                            <button
                              type="button"
                              className={
                                market === "indian"
                                  ? "market-option active"
                                  : "market-option"
                              }
                              // onClick={() => setMarket("forex")}

                              // onClick={() => setMarket("indian")}

                              onClick={() => handleMarketChange("indian")}
                            >
                              <i className="bi bi-bar-chart-fill"></i>

                              <div>
                                <strong>Indian Market</strong>
                                <span>NSE • BSE • F&O</span>
                              </div>
                            </button>

                            <button
                              type="button"
                              className={
                                market === "forex"
                                  ? "market-option active"
                                  : "market-option"
                              }
                              // onClick={() => setMarket("forex")}

                              onClick={() => handleMarketChange("forex")}
                            >
                              <i className="bi bi-globe2"></i>

                              <div>
                                <strong>Forex</strong>
                                <span>MT4 • MT5</span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* ===============================
                          INDIAN MARKET
                      ================================ */}

                      {/* {market === "indian" && (
                        <>
                          <div className="col-12 col-md-6">
                            <div className="contact-form-group">
                              <label>
                                Broker Name <span>*</span>
                              </label>

                              <div className="contact-select-wrapper">
                                <i className="bi bi-building"></i>


                                <select
                                  name="platform"
                                  value={formData.platform}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="">Select broker</option>

                                  <option>Zerodha</option>
                                  <option>Angel One</option>
                                  <option>IIFL</option>
                                  <option>Alice Blue</option>
                                  <option>Upstox</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-md-6">

                            <div className="contact-form-group">

                              <label>
                                Trading Segment
                              </label>

                              <div className="contact-select-wrapper">

                                <i className="bi bi-graph-up"></i>

                                <select>
                                  <option value="">
                                    Select segment
                                  </option>

                                  <option>Equity</option>
                                  <option>Futures</option>
                                  <option>Options</option>
                                  <option>Commodity</option>
                                  <option>Multiple</option>
                                </select>

                              </div>

                            </div>

                          </div>
                        </>
                      )} */}

                      {market === "indian" && (
                        <>
                          {/* BROKER */}

                          <div className="col-12 col-md-6">
                            <div className="contact-form-group">
                              <label>
                                Broker Name <span>*</span>
                              </label>

                              <div className="contact-select-wrapper">
                                <i className="bi bi-building"></i>

                                <select
                                  name="brokerName"
                                  value={formData.brokerName}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="">Select broker</option>

                                  <option value="Zerodha">Zerodha</option>

                                  <option value="Angel One">Angel One</option>

                                  <option value="IIFL">IIFL</option>

                                  <option value="Alice Blue">Alice Blue</option>

                                  <option value="Upstox">Upstox</option>

                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* TRADING SEGMENT */}

                          {/* <div className="col-12 col-md-6">
      <div className="contact-form-group">

        <label>
          Trading Segment <span>*</span>
        </label>

        <div className="contact-select-wrapper">

          <i className="bi bi-graph-up"></i>

          <select
            name="tradingSegment"
            value={formData.tradingSegment}
            onChange={handleChange}
            required
          >
            <option value="">
              Select segment
            </option>

            <option value="Equity">
              Equity
            </option>

            <option value="Futures">
              Futures
            </option>

            <option value="Options">
              Options
            </option>

            <option value="Commodity">
              Commodity
            </option>

            <option value="Multiple">
              Multiple
            </option>

          </select>

        </div>

      </div>
    </div> */}

                          {/* OTHER BROKER NAME */}

                          {formData.brokerName === "Other" && (
                            <div className="col-12">
                              <div className="contact-form-group">
                                <label>
                                  Enter Broker Name <span>*</span>
                                </label>

                                <div className="contact-input-wrapper">
                                  <i className="bi bi-building-add"></i>

                                  <input
                                    type="text"
                                    name="otherBrokerName"
                                    value={formData.otherBrokerName}
                                    onChange={handleChange}
                                    placeholder="Enter your broker name"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* ===============================
                          FOREX
                      ================================ */}

                      {market === "forex" && (
                        <>
                          <div className="col-12 col-md-6">
                            <div className="contact-form-group">
                              <label>
                                Trading Platform <span>*</span>
                              </label>

                              <div className="contact-select-wrapper">
                                <i className="bi bi-window"></i>

                                {/* <select required>
                                  <option value="">Select platform</option>

                                  <option>MT4</option>
                                  <option>MT5</option>
                         
                                </select> */}

                                <select
                                  name="platform"
                                  value={formData.platform}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="">Select platform</option>

                                  <option value="MT4">MT4</option>
                                  <option value="MT5">MT5</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* <div className="col-12 col-md-6">
                            <div className="contact-form-group">
                              <label>Preferred Instrument</label>

                              <div className="contact-select-wrapper">
                                <i className="bi bi-currency-exchange"></i>

                                <select>
                                  <option value="">Select instrument</option>

                                  <option>XAU/USD</option>
                                  <option>EUR/USD</option>
                                  <option>GBP/USD</option>
                                  <option>USD/JPY</option>
                                  <option>Multiple</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>
                          </div> */}
                        </>
                      )}
                    </div>
                  </div>

                  {/* ===============================
                      STRATEGY DETAILS
                  ================================ */}

                  <div className="contact-form-section"
                    id="strategy-form-section"
>
                    <div className="form-section-title">
                      <span>03</span>
                      Strategy Requirement
                    </div>

                    <div className="row g-3">
                      <div className="col-12">
                        <div className="contact-form-group">
                          <label>
                            Describe Your Strategy / Requirement <span>*</span>
                          </label>

                          {/* <textarea
                            rows="5"
                            placeholder="Explain your entry conditions, exit conditions, stop loss, target, indicators, timeframe, or any other trading logic..."
                            required
                          ></textarea> */}

                          <textarea
                            name="strategyRequirements"
                            value={formData.strategyRequirements}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Explain your entry conditions, exit conditions, stop loss, target, indicators, timeframe, or any other trading logic..."
                            required
                          ></textarea>

                          <small>
                            You don&apos;t need to write technical code. Explain
                            the strategy in your own words.
                          </small>
                        </div>
                      </div>

                      {/* FILE */}

                      <div className="col-12">
                        <div className="contact-form-group">
                          <label>Upload Reference</label>

                          <label className="contact-upload">
                            <div className="upload-icon">
                              <i className="bi bi-cloud-arrow-up-fill"></i>
                            </div>

                            <div>
                              <strong>
                                Upload chart or strategy reference
                              </strong>

                              <span>PNG, JPG, JPEG or PDF</span>
                            </div>

                            {/* <input type="file" accept=".png,.jpg,.jpeg,.pdf" /> */}

                            <input
                              type="file"
                              accept=".png,.jpg,.jpeg,.pdf"
                              onChange={handleFileChange}
                            />
                          </label>
                          {selectedFile && (
                            <div className="selected-file-name">
                              <i className="bi bi-file-earmark-check"></i>
                              <span>{selectedFile.name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===============================
                      CONSENT
                  ================================ */}

                  <label className="contact-consent">
                    <input type="checkbox" required />

                    <span>
                      I agree to be contacted by GreeksLabs Technologies
                      regarding my enquiry.
                    </span>
                  </label>

                  {error && (
                    <div className="contact-form-error">
                      <i className="bi bi-exclamation-circle"></i>

                      <span>{error}</span>
                    </div>
                  )}

                  {/* ===============================
                      SUBMIT
                  ================================ */}

                  {/* <button type="submit" className="contact-submit-btn">
                    Submit Strategy Enquiry
                    <i className="bi bi-arrow-right"></i>
                  </button> */}

<button
  type="submit"
  className="contact-submit-btn"
  disabled={loading}
>
  {loading ? (
    <>
      <span className="contact-spinner"></span>
      Submitting...
    </>
  ) : (
    <>
      Submit Strategy Enquiry
      <i className="bi bi-arrow-right"></i>
    </>
  )}
</button>

                  
                </form>
              ) : (
                /* ===============================
                    SUCCESS
                ================================ */

                <div className="contact-success">
                  <div className="contact-success-icon">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <span className="success-small">ENQUIRY RECEIVED</span>

                  <h3>
                    Thank You for Sharing
                    <br />
                    Your Strategy.
                  </h3>

                  <p>
                    Our team will review your requirements and contact you
                    regarding the next steps.
                  </p>

                  {/* <button
                    onClick={() => setSubmitted(false)}
                    className="contact-new-enquiry"
                  >
                    Submit Another Enquiry
                  </button> */}

                  <button
                     type="button"
                    className="contact-submit-btn"
                    disabled={loading}
                      onClick={() => {
    setSubmitted(false);

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
                  >
                    {loading ? (
                      <>
                        <span className="contact-spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Another  Enquiry
                        <i className="bi bi-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
