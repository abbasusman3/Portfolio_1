import React from 'react';

const About: React.FC = () => (
  <section className="CV-Modern-Wrapper">
    {/* Header */}
    <div className="CV-Modern-Header">
      <h1 className="CV-Modern-Name">USMAN QURESHI</h1>
      <div className="CV-Modern-Title">Software Engineer | Web Developer |<br />Abbottabad, Pakistan</div>
      <div className="CV-Modern-ContactRow">
        <span><b>Phone:</b> +92 3148009273</span>
        <span><b>Email:</b> <a href="mailto:abbasusman312@gmail.com">abbasusman312@gmail.com</a></span>
      </div>
    </div>
    <div className="CV-Modern-Columns">
      <div className="CV-Modern-Left">
        {/* Summary */}
        <div className="CV-Modern-Section">
          <h3 className="CV-Modern-SectionTitle blue">Summary</h3>
          <div className="CV-Modern-Line blue" />
          <p>
            Passionate Software Engineer and Web Developer with hands-on experience in building responsive and scalable web applications. Skilled in front-end technologies like <b>HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, and React JS</b>. Currently working on back-end development using <b>PHP, Laravel, and MySQL</b>. Known for a strong problem-solving mindset, attention to detail, and clean code practices. Eager to explore new technologies, contribute to real-world projects, and grow as a full-stack developer in a collaborative and innovative environment.
          </p>
        </div>
        {/* Experience 1 */}
        <div className="CV-Modern-Section">
          <h3 className="CV-Modern-SectionTitle blue">Experience</h3>
          <div className="CV-Modern-Line blue" />
          <div className="CV-Modern-Job">
            <div className="CV-Modern-JobMeta">01/2025 - Current</div>
            <div className="CV-Modern-JobTitle">Created Opportunities - Abbottabad, Pakistan</div>
            <div className="CV-Modern-JobRole">Web Developer Intern</div>
            <ul className="CV-Modern-JobList">
              <li>Working on the front-end using <b>HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, and React JS</b> to create responsive and user-friendly web interfaces. Collaborate on UI/UX improvements and ensure cross-browser compatibility.</li>
              <li>Contributing to back-end development using <b>PHP and Laravel</b>, including RESTful APIs, authentication, and database operations with <b>MySQL</b>.</li>
              <li>Gained hands-on experience with <b>WordPress</b>, learning <b>on-page SEO techniques</b>, keyword usage, and how to write and publish optimized blog articles.</li>
              <li>Role includes website maintenance, content updates, bug fixing, and participation in testing and deployment processes. Strengthened full-stack skills, SEO knowledge, and teamwork in a professional environment.</li>
            </ul>
          </div>
        </div>
        {/* Experience 2 */}
        <div className="CV-Modern-Section">
          <div className="CV-Modern-JobMeta">02/2024 - 04/2024</div>
          <div className="CV-Modern-JobTitle">Code Soft - Online</div>
          <div className="CV-Modern-JobRole">Web Developer Intern</div>
          <ul className="CV-Modern-JobList">
            <li>Utilised HTML, CSS, and JavaScript to develop responsive web pages, improving site accessibility across devices.</li>
            <li>Utilised JavaScript, HTML, and CSS to create interactive and visually appealing web pages.</li>
            <li>Designed and developed blog post sites using HTML.</li>
          </ul>
        </div>
      </div>
      <div className="CV-Modern-Right">
        {/* Skills */}
        <div className="CV-Modern-Section">
          <h3 className="CV-Modern-SectionTitle blue">Skills</h3>
          <div className="CV-Modern-Line blue" />
          <div className="CV-Modern-SkillGrid">
            <div>✓ Problem-solving</div>
            <div>✓ Critical thinking</div>
            <div>✓ Decision-making</div>
            <div>✓ Creativity</div>
            <div>✓ Information Processing</div>
            <div>✓ Web Development</div>
            <div>✓ HTML, CSS, Javascript</div>
            <div>✓ Database MySQL</div>
            <div>✓ Word</div>
            <div>✓ Excel</div>
            <div>✓ Time management</div>
            <div>✓ Communication skills</div>
          </div>
        </div>
        {/* Education */}
        <div className="CV-Modern-Section">
          <h3 className="CV-Modern-SectionTitle blue">Education</h3>
          <div className="CV-Modern-Line blue" />
          <div className="CV-Modern-Education">
            <div className="CV-Modern-JobMeta">August 2024</div>
            <div className="CV-Modern-EduSchool">Abbottabad University of Science & Technology - Abbottabad, Pakistan</div>
            <div className="CV-Modern-EduDegree">Bachelor of Science: Software Engineering</div>
            <div className="CV-Modern-EduMeta">Relevant coursework: Programming Fundamentals, OOP, DSA, SPM, MAD, Networking, MIS, HCI, WEB</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 