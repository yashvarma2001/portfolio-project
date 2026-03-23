import React, { useState } from 'react';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaArrowRight, 
  FaPaperPlane, 
  FaCircleCheck // Changed from FaCheckCircle
} from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState(""); // "", "SENDING", "SUCCESS", "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgazlpr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        // Reset button after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact-section-light">
      <div className="contact-grid">
        
        {/* LEFT COLUMN */}
        <div className="contact-left">
          <h2 className="big-title-light">Contact</h2>
          <div className="status-area">
            <p className="status-text-light">
              Psst... exciting opportunities, anyone? <br />
              I'm open to new projects, part-time gigs, or a full-time adventure. 
              Just shoot me an email, I'm practically glued to it. No delays, I promise!
            </p>

            <div className="reach-out-row">
              <a href="mailto:yash.varma1515@gmail.com" className="reach-out-btn-light">
                Reach Out <FaArrowRight />
              </a>
              <span className="email-display-light">yash.varma1515@gmail.com</span>
            </div>

            <div className="social-links">
              <p className="social-label">You can also find me on —</p>
              <div className="social-btns-light">
                <a href="https://www.linkedin.com/in/vvs-yashwanth-varma/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
                <a href="https://github.com/yashvarma2001" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form Card */}
        <div className="contact-right">
          <div className="message-card-light">
            <h3 className="form-title-light">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
                <div className="coolinput">
                <label className="text">Name *</label>
                <input type="text" name="name" className="input" placeholder="Your full name" required />
                </div>
                <div className="coolinput">
                <label className="text">Email *</label>
                <input type="email" name="email" className="input" placeholder="your.email@example.com" required />
                </div>
            </div>

            <div className="coolinput">
                <label className="text">Subject *</label>
                <input type="text" name="subject" className="input" placeholder="Project discussion, etc." required />
            </div>

            <div className="coolinput">
                <label className="text">Message *</label>
                <textarea name="message" className="input" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button 
                type="submit" 
                disabled={status === "SENDING" || status === "SUCCESS"}
                className={`send-btn-gradient ${status === "SUCCESS" ? "btn-success" : ""}`}
            >
                {status === "SENDING" && "Sending..."}
                {status === "SUCCESS" && <><FaCircleCheck /> Sent!</>}
                {status === "" && <><FaPaperPlane /> Send Message</>}
                {status === "ERROR" && "Error. Try Again?"}
            </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer-light">
        <h1 className="name-banner-light">Yashwanth Varma</h1>
        <p>Venkata Surya Yashwanth Varma Vadlamudi © 2026</p>
      </footer>
    </section>
  );
};

export default Contact;