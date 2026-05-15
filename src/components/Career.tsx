import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Optum</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building EasyTest and enterprise application features with Java,
              Spring Boot, React, REST APIs, Docker, Podman, MongoDB, and
              Artifactory SaaS. Improved page performance from multi-minute load
              times to under 10 seconds and raised coverage across critical pages.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Webstrat</h4>
                <h5>Full-stack engineering</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Engineered rapid data-entry modules, custom print workflows,
              reusable automation functions, and security remediation efforts
              that reduced recurring CodeQL vulnerabilities from thousands to a
              small actionable set.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ARPA Developer</h4>
                <h5>HighRadius</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Maintained and optimized Java-based backend architectures, resolved
              client-reported defects, and closed 20+ complex JIRA tickets while
              meeting strict SLAs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Kalinga Institute Of Industrial Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Graduated with a CPI of 8.68, with a foundation in data
              structures, algorithms, object-oriented programming, and system
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
