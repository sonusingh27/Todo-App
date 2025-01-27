import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">TaskPro</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li>Home</li>
        <li>Your Task</li>
      </ul>
    </nav>
  );
};

export default Navbar;
