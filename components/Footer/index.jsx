import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-20 py-4 text-center sm:text-left sm:px-32 sm:py-14 bg-gray-200 text-gray-800">
      <div className="space-y-4 text-xs text-gray-800 dark:text-gray-300 footer-list-container">
        <h5 className="font-bold dark:text-white">Support</h5>
        <p>Help Center</p>
        <p>Safety Information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Report a neighborhood concern</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 dark:text-gray-300 footer-list-container">
        <h5 className="font-bold dark:text-white">COMMUNITY</h5>
        <p>Disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Celebrating diversity & belonging</p>
        <p>Combating discrimination</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 dark:text-gray-300 footer-list-container">
        <h5 className="font-bold dark:text-white">HOST</h5>
        <p>Try hosting</p>
        <p>Protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 dark:text-gray-300 footer-list-container">
        <h5 className="font-bold dark:text-white">ABOUT</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
      </div>
    </footer>
  );
};

export default Footer;
