import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>AstroPaper</h1>
        <nav>
          <Link to="/">Posts</Link>
          <Link to="/blogs">Tags</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="content">
        <section className="intro">
          <h2>Mingalaba <i class="bi bi-wifi-2"></i></h2> 
          
          <p>
            AstroPaper is a minimal, responsive, accessible, and SEO-friendly Astro blog theme.
            This theme follows best practices and provides accessibility out of the box. 
            Light and dark mode are supported by default. Moreover, additional color schemes 
            can also be configured.
          </p>
          <p>Read the blog posts or check README for more info.</p>
          <div className="social-links">
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </section>
        <section className="recent-posts">
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <h4><Link to="/blogs/1">Adding LaTeX Equations in AstroPaper blog posts</Link></h4>
              <p><span>Sep 9, 2024</span> | <span>8:08 PM</span></p>
            </li>
            <li>
              <h4><Link to="/blogs/2">How to use Git Hooks to set Created and Modified Dates</Link></h4>
              <p><span>Jan 1, 2024</span> | <span>10:59 PM</span></p>
            </li>
          </ul>
          <Link to="/blogs">All Posts →</Link>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright © 2024 | All rights reserved.</p>
        <div className="social-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
