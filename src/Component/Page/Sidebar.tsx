

// import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaBell } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  // Helper for active link
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-[15%] min-h-screen bg-[#030014] overflow-y-auto shadow-sm">
      <div className="p-4 w-[15%] min-h-screen fixed top-0 left-0 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6 border-b border-white pb-4 px-6">
          <img
            src="https://learnvibe.vercel.app/images/logo%20(2).png"
            alt="Logo Icon"
            className="h-12 w-12"
          />
          <img
            src="https://learnvibe.vercel.app/images/logo.png"
            alt="Learnvibe Logo"
            className="h-8"
          />
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 font-medium leading-7">
          <Link
            to="/dashboard"
            className={`relative group flex items-center gap-2 text-md px-3 py-1 ${
              isActive("/dashboard")
                ? "bg-[rgb(134,70,244)] text-white rounded-sm"
                : "text-white hover:bg-[rgb(134,70,244)] hover:text-white rounded-sm"
            }`}
          >
            <MdDashboard className="text-normal"/>
            Dashboard
          </Link>

          <Link
            to="/users"
            className={`relative group flex items-center gap-2 text-md px-3 py-1 ${
              location.pathname.startsWith("/users") ||
              location.pathname === "/newusers"
                ? "bg-[rgb(134,70,244)] text-white rounded-sm"
                : "text-white hover:bg-[rgb(134,70,244)] hover:text-white rounded-sm"
            }`}
          >
            <FaUsers className="text-normal" />
            Users
          </Link>

          <Link
            to="/subscription"
            className={`relative group flex items-center gap-2 text-md px-3 py-1 ${
              location.pathname.startsWith("/subscription") ||
              location.pathname === "/addsubscription" ||
              location.pathname === "/edit-subscription"
                ? "bg-[rgb(134,70,244)] text-white rounded-sm"
                : "text-white hover:bg-[rgb(134,70,244)] hover:text-white rounded-sm"
            }`}
          >
            <FaBell className="text-normal" />
            Subscription
          </Link>

          {/* Enable this section later for dropdown menu */}
          {/* Reports dropdown can be re-enabled here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
