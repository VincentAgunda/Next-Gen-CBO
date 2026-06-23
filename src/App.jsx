import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import InnovationHub from "./pages/InnovationHub";
import ResearchCenter from "./pages/ResearchCenter";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import MemberPortal from "./pages/MemberPortal";
import Partnerships from "./pages/Partnerships";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import SupportUs from "./pages/SupportUs";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminMemberManagement from "./pages/Admin/MemberManagement";
import AdminProgramManagement from "./pages/Admin/ProgramManagement";
import AdminEventManagement from "./pages/Admin/EventManagement";
import AdminResearchManagement from "./pages/Admin/ResearchManagement";
import AdminInnovationManagement from "./pages/Admin/InnovationManagement";
import AdminNewsManagement from "./pages/Admin/NewsManagement";
import AdminPartnershipManagement from "./pages/Admin/PartnershipManagement";
import AdminVolunteerManagement from "./pages/Admin/VolunteerManagement";
import AdminLogin from "./components/AdminLogin";

export default function App() {
  return (
    <Routes>
      {/* Public routes with shared public layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="innovation-hub" element={<InnovationHub />} />
        <Route path="research" element={<ResearchCenter />} />
        <Route path="events" element={<Events />} />
        <Route path="membership" element={<Membership />} />
        <Route path="partnerships" element={<Partnerships />} />
        <Route path="news" element={<News />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="support-us" element={<SupportUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin-login" element={<AdminLogin />} />
      </Route>

      {/* Protected Member Portal (no public layout) */}
      <Route
        path="/member-portal"
        element={
          <ProtectedRoute>
            <MemberPortal />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes (nested layout) */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="members" element={<AdminMemberManagement />} />
        <Route path="programs" element={<AdminProgramManagement />} />
        <Route path="events" element={<AdminEventManagement />} />
        <Route path="research" element={<AdminResearchManagement />} />
        <Route path="innovations" element={<AdminInnovationManagement />} />
        <Route path="news" element={<AdminNewsManagement />} />
        <Route path="partnerships" element={<AdminPartnershipManagement />} />
        <Route path="volunteers" element={<AdminVolunteerManagement />} />
      </Route>
    </Routes>
  );
}