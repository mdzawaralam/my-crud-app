import './Page.css';

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <p className="page-intro">
        We offer a wide range of services to meet your business needs.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Create stunning, responsive websites tailored to your business requirements.
            Our expert developers use the latest technologies to deliver high-quality solutions.
          </p>
        </div>
        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>
            Build cross-platform mobile applications that provide seamless user experiences
            on both iOS and Android devices.
          </p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            Design intuitive user interfaces that enhance user engagement and satisfaction.
            We focus on creating visually appealing and easy-to-use designs.
          </p>
        </div>
        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>
            Leverage cloud technology to scale your business infrastructure.
            We provide secure and reliable cloud migration and management services.
          </p>
        </div>
        <div className="service-card">
          <h3>API Development</h3>
          <p>
            Build robust and scalable APIs that power your applications and enable
            seamless integration with third-party services.
          </p>
        </div>
        <div className="service-card">
          <h3>Consulting</h3>
          <p>
            Get expert advice on technology strategy, architecture, and implementation.
            We help you make informed decisions for your business growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;