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
} from "@mui/icons-material";

const links = [
  { to: "/admin", icon: <Dashboard />, label: "Dashboard" },
  { to: "/admin/members", icon: <People />, label: "Members" },
  { to: "/admin/programs", icon: <School />, label: "Programs" },
  { to: "/admin/events", icon: <Event />, label: "Events" },
  { to: "/admin/research", icon: <Biotech />, label: "Research" },
  { to: "/admin/innovations", icon: <Biotech />, label: "Innovations" },
  { to: "/admin/news", icon: <Newspaper />, label: "News" },
  { to: "/admin/partnerships", icon: <Handshake />, label: "Partners" },
  { to: "/admin/volunteers", icon: <VolunteerActivism />, label: "Volunteers" },
];

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md flex flex-col p-4">
        <h1 className="text-2xl font-bold text-brand-primary mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded ${
                  isActive ? "bg-brand-light text-brand-primary font-semibold" : "hover:bg-gray-100"
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
          className="mt-auto p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}