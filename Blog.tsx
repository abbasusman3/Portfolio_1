import React, { useState } from 'react';

const categoryDetails: Record<string, { image: string; description: string }> = {
  All: {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=300&fit=crop',
    description: 'Explore all articles, tutorials, and insights on web development, programming, and technology.'
  },
  Development: {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=300&fit=crop',
    description: 'Deep dives into modern development practices, frameworks, and productivity tips.'
  },
  CSS: {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=300&fit=crop',
    description: 'Master the art of styling with CSS, Grid, Flexbox, and responsive design.'
  },
  JavaScript: {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=300&fit=crop',
    description: 'Level up your JavaScript skills with ES6+, async/await, and best practices.'
  },
  Backend: {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&h=300&fit=crop',
    description: 'Build robust backends with Node.js, Express, APIs, and databases.'
  },
  Performance: {
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=1200&h=300&fit=crop',
    description: 'Optimize your apps for speed, scalability, and a smooth user experience.'
  }
};

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building a Modern Portfolio with React and TypeScript",
      excerpt: "Learn how to create a stunning portfolio website using React, TypeScript, and modern CSS techniques. This comprehensive guide covers everything from setup to deployment.",
      content: "Creating a portfolio website is one of the best ways to showcase your skills and projects. In this post, I'll walk you through the process of building a modern, responsive portfolio using React and TypeScript...",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop",
      category: "Development",
      readTime: "8 min read",
      date: "2024-01-15",
      author: "John Doe",
      featured: true,
      tags: ["React", "TypeScript", "Portfolio", "Web Development"]
    },
    {
      id: 2,
      title: "Mastering CSS Grid and Flexbox for Responsive Design",
      excerpt: "Discover the power of CSS Grid and Flexbox for creating flexible, responsive layouts. Practical examples and best practices for modern web design.",
      content: "CSS Grid and Flexbox have revolutionized the way we create layouts on the web. Understanding how to use these powerful tools together can help you build more flexible and maintainable designs...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      category: "CSS",
      readTime: "12 min read",
      date: "2024-01-10",
      author: "John Doe",
      featured: false,
      tags: ["CSS", "Grid", "Flexbox", "Responsive Design"]
    },
    {
      id: 3,
      title: "The Future of Web Development: AI and Machine Learning",
      excerpt: "Explore how artificial intelligence and machine learning are transforming web development, from automated testing to intelligent user interfaces.",
      content: "Artificial intelligence is rapidly changing the landscape of web development. From automated code generation to intelligent user experience optimization, AI tools are becoming essential for modern developers...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      category: "AI/ML",
      readTime: "10 min read",
      date: "2024-01-05",
      author: "John Doe",
      featured: false,
      tags: ["AI", "Machine Learning", "Web Development", "Future Tech"]
    },
    {
      id: 4,
      title: "Optimizing React Performance: Best Practices and Techniques",
      excerpt: "Learn essential techniques for optimizing React applications, including code splitting, memoization, and performance monitoring tools.",
      content: "Performance optimization is crucial for creating smooth, responsive React applications. In this comprehensive guide, I'll share proven techniques and best practices that I've learned from building production applications...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      category: "Performance",
      readTime: "15 min read",
      date: "2023-12-28",
      author: "John Doe",
      featured: true,
      tags: ["React", "Performance", "Optimization", "Best Practices"]
    },
    {
      id: 5,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "A complete guide to building scalable RESTful APIs using Node.js, Express, and MongoDB. Includes authentication, validation, and deployment strategies.",
      content: "RESTful APIs are the backbone of modern web applications. In this tutorial, I'll show you how to build robust, scalable APIs using Node.js and Express, covering everything from basic CRUD operations to advanced features...",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
      category: "Backend",
      readTime: "20 min read",
      date: "2023-12-20",
      author: "John Doe",
      featured: false,
      tags: ["Node.js", "Express", "API", "MongoDB"]
    },
    {
      id: 6,
      title: "The Complete Guide to Modern JavaScript ES6+ Features",
      excerpt: "Master modern JavaScript features including arrow functions, destructuring, async/await, and more. Practical examples for everyday development.",
      content: "JavaScript has evolved significantly with ES6 and beyond. Understanding these modern features can make your code more readable, maintainable, and efficient. Let's explore the most important features you should know...",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=300&fit=crop",
      category: "JavaScript",
      readTime: "18 min read",
      date: "2023-12-15",
      author: "John Doe",
      featured: false,
      tags: ["JavaScript", "ES6", "Modern JS", "Programming"]
    }
  ];

  const categories = ["All", "Development", "CSS", "JavaScript", "Backend", "Performance"];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const normalPosts = filteredPosts.filter(post => !post.featured);

  const categoryInfo = categoryDetails[selectedCategory];

  return (
    <section className="Blog">
      <h1>Blog & Articles</h1>
      {/* Category Banner */}
      <div className="Category-Banner">
        <img src={categoryInfo.image} alt={selectedCategory} className="Category-Banner-Image" />
        <div className="Category-Banner-Overlay">
          <h2>{selectedCategory}</h2>
          <p>{categoryInfo.description}</p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="Categories-Filter">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`Category-Btn${selectedCategory === category ? ' active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <div className="Featured-Post">
          {featuredPosts.map(post => (
            <div key={post.id} className="Featured-Card">
              <div className="Featured-Image">
                <img src={post.image} alt={post.title} />
                <div className="Featured-Overlay">
                  <span className="Featured-Badge">Featured</span>
                </div>
              </div>
              <div className="Featured-Content">
                <div className="Post-Meta">
                  <span className="Category">{post.category}</span>
                  <span className="Read-Time">{post.readTime}</span>
                  <span className="Date">{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="Post-Tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="Tag">{tag}</span>
                  ))}
                </div>
                <button className="Read-More-Btn">Read Full Article</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="Blog-Grid">
        {normalPosts.map((post) => (
          <article key={post.id} className="Blog-Card">
            <div className="Blog-Image">
              <img src={post.image} alt={post.title} />
              <div className="Image-Overlay">
                <span className="Category-Badge">{post.category}</span>
              </div>
            </div>
            
            <div className="Blog-Content">
              <div className="Post-Meta">
                <span className="Read-Time">{post.readTime}</span>
                <span className="Date">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              
              <div className="Post-Tags">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="Tag">{tag}</span>
                ))}
              </div>
              
              <div className="Blog-Actions">
                <button className="Read-More-Btn">Read More</button>
                <div className="Author">
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="Newsletter-Section">
        <div className="Newsletter-Content">
          <h3>Stay Updated</h3>
          <p>Get the latest articles and tutorials delivered to your inbox. No spam, unsubscribe anytime.</p>
          <div className="Newsletter-Form">
            <input type="email" placeholder="Enter your email address" />
            <button className="Subscribe-Btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 