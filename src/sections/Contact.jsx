import React, { useState } from 'react';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaArrowRight, 
  FaPaperPlane, 
  FaCircleCheck 
} from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgazlpr", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact-section-dark">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="big-title-dark">CONTACT</h2>
          <div className="status-area">
           <p className="status-text-dark">
              I'm open to new projects, career adventures, or solving complex problems. 
              {/* Added your funny relocation line here */}
              <span className="relocate-highlight">
                Ready to relocate, teleport, or move across the globe—just say the word.
              </span>
            </p>
            <div className="contact-gif-container">
            <img src={`${import.meta.env.BASE_URL}assets/Duck.gif`} alt="Duck" />
            </div>

            <div className="reach-out-row">
              <a href="mailto:yash.varma1515@gmail.com" className="reach-out-btn-dark">
                Reach Out <FaArrowRight />
              </a>
              <span className="email-display-dark">yash.varma1515@gmail.com</span>
            </div>

            <div className="social-links">
              <div className="social-btns-dark">
                <a href="https://www.linkedin.com/in/vvs-yashwanth-varma/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
                <a href="https://github.com/yashvarma2001" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="message-card-dark">
            <h3 className="form-title-dark">Send Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="coolinput">
                  <label className="text">Name *</label>
                  <input type="text" name="name" className="input" placeholder="Your name" required />
                </div>
                <div className="coolinput">
                  <label className="text">Email *</label>
                  <input type="email" name="email" className="input" placeholder="email@example.com" required />
                </div>
              </div>
              <div className="coolinput">
                <label className="text">Subject *</label>
                <input type="text" name="subject" className="input" placeholder="Discussion topic" required />
              </div>
              <div className="coolinput">
                <label className="text">Message *</label>
                <textarea name="message" className="input" rows="4" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" disabled={status === "SENDING" || status === "SUCCESS"} className="send-btn-gradient">
                {status === "SENDING" && "Sending..."}
                {status === "SUCCESS" && <><FaCircleCheck /> Sent!</>}
                {status === "" && <><FaPaperPlane /> Send Message</>}
                {status === "ERROR" && "Error. Try Again?"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer-dark">
        <div className="footer-content">
            <h1 className="name-banner-dark">Yashwanth Varma</h1>
            <p className="footer-credits">
              Venkata Surya Yashwanth Varma Vadlamudi © 2026
            </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;