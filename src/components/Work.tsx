import { useState, useCallback } from "react";
import "./styles/Work.css";
import {
  MdArrowBack,
  MdArrowForward,
  MdBolt,
  MdCode,
  MdIntegrationInstructions,
  MdSecurity,
} from "react-icons/md";

type Project = {
  title: string;
  role: string;
  period: string;
  category: string;
  icon: JSX.Element;
  highlights: string[];
  details: string[];
  tools: string[];
};

const projects: Project[] = [
  {
    title: "EasyTest",
    role: "Senior Software Engineer - Optum",
    period: "Jul 2024 - Current",
    category: "Enterprise testing platform modernization",
    icon: <MdBolt />,
    highlights: ["10 sec load", "20+ pages tested", "50%+ coverage lift"],
    details: [
      "Implemented major features across multiple pages during a rewrite, improving architecture, maintainability, and user experience.",
      "Optimized DLL loading on a critical page, reducing load time from 5-10 minutes to under 10 seconds.",
      "Built keyboard shortcut features that improved accessibility and streamlined navigation workflows.",
      "Migrated Docker images to Artifactory SaaS and added Podman support for efficient CI/CD image workflows.",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "React",
      "REST APIs",
      "Docker",
      "Podman",
      "MongoDB",
      "Artifactory",
    ],
  },
  {
    title: "Webstrat",
    role: "Full-stack Engineer - Optum",
    period: "Jun 2023 - Nov 2024",
    category: "Data entry, print workflows, QA automation",
    icon: <MdIntegrationInstructions />,
    highlights: ["30-40 fields", "70% automated", "85% automation rate"],
    details: [
      "Engineered a rapid data-entry module that helps users populate 30-40 categorized fields in under 3 seconds.",
      "Built a custom UI printing flow with print-all and selective page printing options for better reporting.",
      "Architected reusable interaction functions for test automation, reducing manual QA effort across recurring flows.",
      "Partnered with security teams to reduce 5,000+ recurring CodeQL vulnerabilities to a small actionable set.",
    ],
    tools: [".NET", "React", "JavaScript", "SQL Server", "Docker", "Git"],
  },
  {
    title: "ARPA Backend",
    role: "ARPA Developer - HighRadius",
    period: "Jan 2022 - Dec 2022",
    category: "Java backend maintenance and client defect resolution",
    icon: <MdSecurity />,
    highlights: ["20+ JIRA tickets", "SLA delivery", "Backend optimization"],
    details: [
      "Maintained and optimized Java-based backend architectures for enterprise client workflows.",
      "Resolved critical client-reported defects and improved service stability through focused debugging.",
      "Analyzed and closed 20+ complex JIRA tickets while meeting strict SLA expectations.",
    ],
    tools: ["Java", "MySQL", "Eclipse", "JQuery"],
  },
  {
    title: "CodeCollab",
    role: "Academic Project",
    period: "KIIT",
    category: "Real-time collaborative code editor",
    icon: <MdCode />,
    highlights: ["Live editing", "Version history", "Conflict handling"],
    details: [
      "Built a collaborative code editor with React, Node.js, and Socket.IO.",
      "Implemented syntax highlighting, live editing, and version history for shared coding sessions.",
      "Added multi-user collaboration with conflict-resolution logic for concurrent edits.",
    ],
    tools: ["React", "Node.js", "Socket.IO"],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((index) =>
      index === 0 ? projects.length - 1 : index - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) =>
      index === projects.length - 1 ? 0 : index + 1
    );
  }, []);

  const activeProject = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-reel">
          <div className="work-reel-nav">
            {projects.map((project, index) => (
              <button
                className={`work-reel-item ${
                  index === currentIndex ? "work-reel-item-active" : ""
                }`}
                data-cursor="disable"
                key={project.title}
                onClick={() => goToSlide(index)}
                type="button"
              >
                <span className="work-reel-number">0{index + 1}</span>
                <span className="work-reel-icon">{project.icon}</span>
                <span className="work-reel-copy">
                  <span>{project.title}</span>
                  <small>{project.period}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="work-detail-panel" key={activeProject.title}>
            <div className="work-panel-scan"></div>
            <div className="work-panel-header">
              <div>
                <p className="work-eyebrow">{activeProject.role}</p>
                <h3>{activeProject.title}</h3>
                <p className="work-category">{activeProject.category}</p>
              </div>
              <div className="work-panel-icon">{activeProject.icon}</div>
            </div>

            <div className="work-highlights">
              {activeProject.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>

            <div className="work-details-list">
              {activeProject.details.map((detail, index) => (
                <p
                  key={detail}
                  style={{ animationDelay: `${0.16 + index * 0.08}s` }}
                >
                  {detail}
                </p>
              ))}
            </div>

            <div className="work-tools">
              {activeProject.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="work-controls">
          <button
            className="work-arrow"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
            type="button"
          >
            <MdArrowBack />
          </button>
          <div className="work-progress">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`work-progress-dot ${
                  index === currentIndex ? "work-progress-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
                type="button"
              />
            ))}
          </div>
          <button
            className="work-arrow"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
            type="button"
          >
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
