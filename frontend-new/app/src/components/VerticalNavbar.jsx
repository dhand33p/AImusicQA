// VerticalNavbar.jsx
// VerticalNavbar.jsx
import React from 'react';
import { Link } from 'wouter'; // Import the Link component from wouter
import './VerticalNavbar.css'; // Import the CSS file for styling

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/chatbot">About</Link></li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;

