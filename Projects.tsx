import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/username/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveLink: "https://task-app-demo.com",
      githubLink: "https://github.com/username/task-app",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather, forecasts, and interactive maps using weather APIs and chart libraries.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      liveLink: "https://weather-dashboard.com",
      githubLink: "https://github.com/username/weather-app",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and professional design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3"],
      liveLink: "https://portfolio-demo.com",
      githubLink: "https://github.com/username/portfolio",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content scheduling.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      liveLink: "https://social-dashboard.com",
      githubLink: "https://github.com/username/social-dashboard",
      featured: true
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "An intelligent chat application powered by AI, featuring natural language processing, sentiment analysis, and smart responses.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "WebSocket", "NLP"],
      liveLink: "https://ai-chat-demo.com",
      githubLink: "https://github.com/username/ai-chat",
      featured: false
    }
  ];

  return (
    <section className="Projects">
      <h1>My Projects</h1>
      <p className="Projects-Intro">
        Here are some of the projects I've worked on. Each project represents a unique challenge 
        and showcases different technologies and problem-solving approaches.
      </p>
      
      <div className="Projects-Grid">
        {projects.map((project) => (
          <div key={project.id} className={`Project-Card ${project.featured ? 'featured' : ''}`}>
            <div className="Project-Image">
              <img src={project.image} alt={project.title} />
              {project.featured && <span className="Featured-Badge">Featured</span>}
            </div>
            
            <div className="Project-Content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="Project-Tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="Tech-Tag">{tech}</span>
                ))}
              </div>
              
              <div className="Project-Links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="Live-Link">
                  🌐 Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="Github-Link">
                  📁 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 