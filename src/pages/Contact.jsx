import './Page.css';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p className="page-intro">
        We'd love to hear from you. Get in touch with us for any inquiries or feedback.
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Business Street<br />Tech City, TC 12345</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@myapp.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;