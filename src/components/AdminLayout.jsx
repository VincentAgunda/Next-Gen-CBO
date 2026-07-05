import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Dashboard,
  People,
  Event,
  School,
  Biotech,
  Newspaper,
  Handshake,
  VolunteerActivism,
  Menu,
  Close,
  Logout
} from "@mui/icons-material";

// IMPORTANT: Adjust these paths based on where your components are located
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

const links = [
  { to: "/admin", icon: <Dashboard fontSize="small" />, label: "Dashboard" },
  { to: "/admin/members", icon: <People fontSize="small" />, label: "Members" },
  { to: "/admin/programs", icon: <School fontSize="small" />, label: "Programs" },
  { to: "/admin/events", icon: <Event fontSize="small" />, label: "Events" },
  { to: "/admin/research", icon: <Biotech fontSize="small" />, label: "Research" },
  { to: "/admin/innovations", icon: <Biotech fontSize="small" />, label: "Innovations" },
  { to: "/admin/news", icon: <Newspaper fontSize="small" />, label: "News" },
  { to: "/admin/partnerships", icon: <Handshake fontSize="small" />, label: "Partners" },
  { to: "/admin/volunteers", icon: <VolunteerActivism fontSize="small" />, label: "Volunteers" },
];

export default function AdminLayout() {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7]">
      {/* Global Header */}
      <Navbar />

      {/* Admin Wrapper */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Mobile Sidebar Overlay Backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-30 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`absolute lg:relative z-40 w-64 h-full bg-white shadow-xl lg:shadow-none lg:border-r lg:border-gray-100 flex flex-col p-6 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[#d2b79b] font-heading text-[11px] uppercase tracking-[0.25em] font-bold">
              Admin Panel
            </h2>
            <button 
              className="lg:hidden text-[#333333] hover:text-[#d2b79b] transition-colors" 
              onClick={() => setSidebarOpen(false)}
            >
              <Close />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/admin"}
                onClick={() => setSidebarOpen(false)} // Close sidebar on mobile after clicking
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive 
                      ? "bg-[#333333] text-white font-medium shadow-md" 
                      : "text-[#777777] hover:bg-[#F5F5F7] hover:text-[#333333]"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={logout}
            className="mt-6 flex items-center justify-center gap-2 w-full p-3 bg-red-50 text-red-600 rounded-md text-xs uppercase tracking-[0.15em] font-medium hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            <Logout fontSize="small" /> Logout
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full w-full overflow-hidden">
          
          {/* Mobile Admin Topbar */}
          <div className="lg:hidden bg-white border-b border-gray-100 p-4 flex items-center gap-4 z-10">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="text-[#333333] hover:bg-gray-50 p-1 rounded-md"
            >
              <Menu />
            </button>
            <span className="text-[#333333] font-sans text-xs uppercase tracking-[0.15em] font-medium">
              Dashboard Menu
            </span>
          </div>

          {/* Scrollable Data View */}
          <div className="flex-1 overflow-auto p-6 md:p-10">
            <Outlet />
          </div>
        </main>

      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}