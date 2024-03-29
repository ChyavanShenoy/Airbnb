import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 px-32 py-14 bg-gray-200 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>This is a clone</p>
        <p>Referrals accepted</p>
        <p>Clones</p>
      </div>
    </div>
  );
}

export default Footer;
