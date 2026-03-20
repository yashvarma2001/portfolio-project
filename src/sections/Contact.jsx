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
            
            <div className="branding-image">
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueXpueGZueXpueGZueXpueGZueXpueGZueXpueGZueXpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72FfM5HJydzaMpfW/giphy.gif" 
                alt="vibe" 
              />
            </div>

            <h1 className="name-banner-light">yashwanth varma</h1>

            <div className="reach-out-row">
              <a href="mailto:yv264@cornell.edu" className="reach-out-btn-light">
                Reach Out <FaArrowRight />
              </a>
              <span className="email-display-light">yv264@cornell.edu</span>
            </div>

            <div className="social-links">
              <p className="social-label">You can also find me on —</p>
              <div className="social-btns-light">
                <a href="https://linkedin.com/in/yashwanth-varma" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
                <a href="https://github.com/yashwanth-varma" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a href="#" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
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
                <div className="input-group-light">
                  <label>Name *</label>
                  <input type="text" name="name" placeholder="Your full name" required />
                </div>
                <div className="input-group-light">
                  <label>Email *</label>
                  <input type="email" name="email" placeholder="your.email@example.com" required />
                </div>
              </div>

              <div className="input-group-light">
                <label>Subject *</label>
                <input type="text" name="subject" placeholder="Project discussion, etc." required />
              </div>

              <div className="input-group-light">
                <label>Message *</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button 
  type="submit" 
  disabled={status === "SENDING" || status === "SUCCESS"}
  className={`send-btn-gradient ${status === "SUCCESS" ? "btn-success" : ""}`}
>
  {status === "SENDING" && "Sending..."}
  {status === "SUCCESS" && <><FaCircleCheck /> Sent!</>} {/* Updated here too */}
  {status === "" && <><FaPaperPlane /> Send Message</>}
  {status === "ERROR" && "Error. Try Again?"}
</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer-light">
        <p>Venkata Surya Yashwanth Varma Vadlamudi © 2026</p>
      </footer>
    </section>
  );
};

export default Contact;