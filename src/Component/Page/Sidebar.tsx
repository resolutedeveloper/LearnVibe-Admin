// // app/Page/Sidebar.tsx
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";
// import { FaUsers, FaBell } from "react-icons/fa";
// import { X } from "lucide-react";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path: string) => location.pathname === path;

//   const handleLogOut = () => {
//     localStorage.removeItem("profileData");
//     localStorage.removeItem("AdminToken");
//     localStorage.removeItem("AdminData");
//     navigate("/");
//   };


//   return (
//     <>
//       {/* Overlay for mobile view */}
//       {isOpen && (
//         <div
//           className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
//           onClick={onClose}
//         ></div>
//       )}

//       {/* Sidebar container */}
//       <div
//         className={`fixed z-50 top-0 left-0 h-full w-64 bg-[#030014] text-white transform transition-transform duration-300 ease-in-out 
//         ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:z-auto`}
//       >
//         <div className="p-4 min-h-screen">
//           {/* Header with logo and close button */}
//           <div className="flex items-center justify-between mb-6 border-b border-white pb-4 px-2">
//             <div className="flex items-center gap-2">
//               <img
//                 src="https://learnvibe.vercel.app/images/logo%20(2).png"
//                 alt="Logo Icon"
//                 className="h-10 w-10"
//               />
//               <img
//                 src="https://learnvibe.vercel.app/images/logo.png"
//                 alt="Learnvibe Logo"
//                 className="h-6"
//               />
//             </div>
//             {/* Close button (only on mobile) */}
//             <button onClick={onClose} className="md:hidden">
//               <X className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <nav className="space-y-4 font-medium leading-7">
//             <Link
//               to="/dashboard"
//               className={`flex items-center gap-2 px-3 py-2 rounded-sm ${isActive("/dashboard")
//                 ? "bg-[rgb(134,70,244)] text-white"
//                 : "hover:bg-[rgb(134,70,244)] hover:text-white"
//                 }`}
//             >
//               <MdDashboard />
//               Dashboard
//             </Link>

//             <Link
//               to="/users"
//               className={`flex items-center gap-2 px-3 py-2 rounded-sm ${location.pathname.startsWith("/users") ||
//                 location.pathname === "/newusers"
//                 ? "bg-[rgb(134,70,244)] text-white"
//                 : "hover:bg-[rgb(134,70,244)] hover:text-white"
//                 }`}
//             >
//               <FaUsers />
//               Users
//             </Link>

//             <Link
//               to="/subscription"
//               className={`flex items-center gap-2 px-3 py-2 rounded-sm ${location.pathname.startsWith("/subscription") ||
//                 location.pathname === "/addsubscription" ||
//                 location.pathname === "/edit-subscription"
//                 ? "bg-[rgb(134,70,244)] text-white"
//                 : "hover:bg-[rgb(134,70,244)] hover:text-white"
//                 }`}
//             >
//               <FaBell />
//               Subscription
//             </Link>
//           </nav>

//           {/* Logout Button */}
//           <div className="absolute bottom-4 left-4">
//             <button
//               className="text-white text-sm px-4 py-2 bg-red-600 rounded hover:bg-red-700"
//               onClick={handleLogOut}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
// app/Page/Sidebar.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Bell, X, ShieldCheck } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleLogOut = () => {
    localStorage.removeItem("profileData");
    localStorage.removeItem("AdminToken");
    localStorage.removeItem("AdminData");
    navigate("/");
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-500 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-[#030014] text-white transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:z-auto`}
      >
        <div className="p-4 min-h-screen relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white pb-4 px-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://learnvibe.vercel.app/images/logo%20(2).png"
                  alt="Logo Icon"
                  className="h-10 w-10"
                />
                <img
                  src="https://learnvibe.vercel.app/images/logo.png"
                  alt="Learnvibe Logo"
                  className="h-6"
                />
              </div>
            </div>
            <button onClick={onClose} className="md:hidden">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-4 font-medium leading-7">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-sm ${isActive("/dashboard")
                ? "bg-[rgb(134,70,244)] text-white"
                : "hover:bg-[rgb(134,70,244)] hover:text-white"
                }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>

            <Link
              to="/users"
              className={`flex items-center gap-2 px-3 py-2 rounded-sm ${location.pathname.startsWith("/users") ||
                location.pathname === "/newusers"
                ? "bg-[rgb(134,70,244)] text-white"
                : "hover:bg-[rgb(134,70,244)] hover:text-white"
                }`}
            >
              <Users className="w-5 h-5" />
              Users
            </Link>

            <Link
              to="/subscription"
              className={`flex items-center gap-2 px-3 py-2 rounded-sm ${location.pathname.startsWith("/subscription") ||
                location.pathname === "/addsubscription" ||
                location.pathname === "/edit-subscription"
                ? "bg-[rgb(134,70,244)] text-white"
                : "hover:bg-[rgb(134,70,244)] hover:text-white"
                }`}
            >
              <Bell className="w-5 h-5" />
              Subscription
            </Link>
          </nav>

          {/* Logout */}
          <div className="absolute bottom-4 left-4">
            <button
              className="text-white text-sm px-4 py-2 bg-red-600 rounded hover:bg-red-700"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
