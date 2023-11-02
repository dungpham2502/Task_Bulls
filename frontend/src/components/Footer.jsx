import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-20 mb-5 p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Task Bulls</h1>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/service" className="hover:text-gray-400">Services</a>
        </div>
      </div>
    </footer>
  );
}
