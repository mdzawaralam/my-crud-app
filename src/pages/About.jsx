import './Page.css';

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p className="page-intro">
        We are a dedicated team committed to providing excellent services to our customers.
      </p>
      <div className="page-content">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, our company has been at the forefront of innovation in the industry.
          We believe in delivering quality products and services that exceed customer expectations.
          Our team consists of experienced professionals who are passionate about what they do.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide seamless digital solutions that help businesses grow and
          succeed in today's competitive landscape. We strive to maintain the highest standards
          of quality and customer service.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction - We prioritize our customers' needs above all else</li>
          <li>Integrity - We conduct our business with honesty and transparency</li>
          <li>Innovation - We continuously improve and adapt to new technologies</li>
          <li>Teamwork - We collaborate to achieve the best results</li>
        </ul>
      </div>
    </div>
  );
}

export default About;