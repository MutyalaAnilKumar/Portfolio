export default function ResumePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&family=Arial:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #f0f0f0; }

        .page {
          width: 210mm;
          min-height: 297mm;
          margin: 20px auto;
          padding: 18mm 18mm 14mm 18mm;
          background: white;
          font-family: 'Times New Roman', Times, serif;
          font-size: 10.5pt;
          line-height: 1.4;
          color: #000;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        }

        .name {
          text-align: center;
          font-size: 18pt;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 4px;
          font-family: Arial, sans-serif;
        }

        .contact-line {
          text-align: center;
          font-size: 9.5pt;
          margin-bottom: 14px;
          color: #000;
        }

        .contact-line a {
          color: #1a5276;
          text-decoration: none;
        }

        .section-title {
          font-size: 10.5pt;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 1.5px solid #000;
          padding-bottom: 2px;
          margin-bottom: 6px;
          margin-top: 12px;
          font-family: Arial, sans-serif;
          letter-spacing: 0.5px;
        }

        .summary-text {
          text-align: justify;
          margin-bottom: 4px;
        }

        .skills-list {
          list-style: disc;
          padding-left: 20px;
          margin: 0;
        }

        .skills-list li {
          margin-bottom: 3px;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
        }

        .job-title {
          font-weight: bold;
          font-size: 10.5pt;
        }

        .job-company {
          font-weight: bold;
          font-size: 10.5pt;
          margin-bottom: 5px;
        }

        .job-date {
          font-size: 10pt;
          color: #000;
        }

        .bullet-list {
          list-style: disc;
          padding-left: 20px;
          margin: 0 0 6px 0;
        }

        .bullet-list li {
          margin-bottom: 3px;
          text-align: justify;
        }

        .project-title {
          font-weight: bold;
          font-size: 10.5pt;
          margin-top: 10px;
          margin-bottom: 1px;
        }

        .project-stack {
          font-style: italic;
          font-size: 10pt;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .edu-list {
          list-style: disc;
          padding-left: 20px;
        }

        .edu-list li {
          margin-bottom: 3px;
        }

        .print-btn {
          display: block;
          margin: 0 auto 16px auto;
          width: 210mm;
          background: #1a5276;
          color: white;
          border: none;
          padding: 10px 0;
          font-size: 13px;
          cursor: pointer;
          font-family: Arial, sans-serif;
          letter-spacing: 1px;
          border-radius: 4px;
        }

        .print-btn:hover { background: #154360; }

        @media print {
          body { background: white; }
          .page {
            margin: 0;
            padding: 15mm 18mm 12mm 18mm;
            box-shadow: none;
            width: 100%;
          }
          .print-btn { display: none; }
        }
      `}</style>

      <button className="print-btn" onClick={() => window.print()}>
        Print / Save as PDF
      </button>

      <div className="page">
        <div className="name">ANIL KUMAR MUTYALA</div>
        <div className="contact-line">
          anilmutyala516@gmail.com &nbsp;|&nbsp; +91 9347558332 &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/anilkumar-mutyala-612766219" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          &nbsp;|&nbsp;
          <a href="https://github.com/MutyalaAnilKumar" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>

        {/* Professional Summary */}
        <div className="section-title">Professional Summary</div>
        <p className="summary-text">
          <strong>Backend Developer</strong> with strong experience in designing and building <strong>scalable, automation-driven backend systems</strong> and <strong>RESTful APIs</strong> using <strong>Node.js, Express.js,</strong> and <strong>MongoDB</strong>. Proven expertise in <strong>Web3 automation</strong>, trading bots, and <strong>blockchain integrations</strong>, including DEX interactions and liquidity pool management. Skilled in handling high-frequency transactions, background jobs, concurrency, and fault-tolerant system design. Passionate about building reliable backend systems for real-world, production-grade applications.
        </p>

        {/* Technical Skills */}
        <div className="section-title">Technical Skills</div>
        <ul className="skills-list">
          <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, Role-Based Access Control, Background Jobs, Queue-Based Processing, Concurrency Handling, Retry &amp; Backoff Strategies</li>
          <li><strong>Frontend:</strong> React.js, JavaScript</li>
          <li><strong>Database:</strong> MongoDB (Mongoose), MySQL, Schema Design, Query Optimization.</li>
          <li><strong>Blockchain / Web3:</strong> Solana Web3.js, Raydium SDK, DEX Integration, Wallet Management, On-chain Transaction Automation</li>
          <li><strong>Tools &amp; Cloud:</strong> Git, CI/CD, Postman, VS Code.</li>
        </ul>

        {/* Professional Experience */}
        <div className="section-title">Professional Experience</div>
        <div className="job-title">Senior Software Developer</div>
        <div className="job-header">
          <div className="job-company">String Metaverse Pvt Ltd</div>
          <div className="job-date">August 2023 – Present</div>
        </div>
        <ul className="bullet-list">
          <li>Developed and maintained backend services to support <strong>internal financial, operational, and Web3 game workflows</strong> using scalable, modular architecture.</li>
          <li>Built and optimized APIs and dashboards to track <strong>partner pay-outs, in-game transactions, and operational metrics</strong> with real-time data visibility.</li>
          <li>Worked with large datasets to ensure accurate <strong>transaction processing for both business operations and game-related activities</strong>, including rewards and user progression.</li>
          <li>Collaborated with product, operations, and engineering teams to translate business and <strong>Web3 gaming requirements</strong> into reliable backend solutions.</li>
        </ul>

        {/* Key Projects */}
        <div className="section-title">Key Projects</div>

        <div className="project-title">Game Backend Systems (Car Racing &amp; Tetris Games)</div>
        <div className="project-stack">Node.js, Express.js, MongoDB</div>
        <ul className="bullet-list">
          <li>Developed scalable backend services for <strong>multiple casual games (Car Racing and Tetris)</strong>, handling player sessions, gameplay state, scoring, rewards, and progression logic.</li>
          <li>Designed and implemented secure <strong>RESTful APIs</strong> for game actions, score tracking, leaderboards, and user state management.</li>
          <li>Built <strong>JWT-based authentication</strong> and <strong>role-based access control</strong> for admin operations and game configuration.</li>
          <li>Optimized MongoDB schemas and queries to support <strong>high-frequency gameplay events</strong> and real-time reward calculations.</li>
          <li>Focused on <strong>low-latency API responses</strong> to ensure smooth, responsive gameplay experiences for concurrent users.</li>
        </ul>

        <div className="project-title">Web3 Trading, Market-Making &amp; Liquidity Automation Platform</div>
        <div className="project-stack">Node.js, MongoDB, Solana Web3.js, Raydium SDK, Blockchain SDKs</div>
        <ul className="bullet-list">
          <li>Built a <strong>production-grade Web3 backend platform</strong> for automated trading, market-making, liquidity pool management, and DEX analytics using Node.js, MongoDB, and Solana Web3 tools.</li>
          <li>Engineered <strong>fault-tolerant, queue-based on-chain transaction execution</strong> with retries, backoff, and validation to handle high-volatility and high-frequency blockchain operations.</li>
          <li>Designed secure systems for <strong>wallet management, role-based access control, and large-scale financial data processing</strong>, enabling automated decision-making with minimal manual intervention.</li>
        </ul>

        {/* Education */}
        <div className="section-title">Education</div>
        <ul className="edu-list">
          <li><strong>Bachelor of Technology</strong> &nbsp;|&nbsp; Mandava Institute of Engineering &amp; Technology &nbsp;|&nbsp; Apr 2017 – Jul 2021 &nbsp;|&nbsp; CGPA: 7.01</li>
        </ul>
      </div>
    </>
  );
}
