import { useAuth } from "../contexts/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config"; // Ensure auth is imported from your config
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function MemberPortalDashboard() {
  const { userData, currentUser, loading } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const navigate = useNavigate();

  // 1. Security & Routing: Redirect Admins to the Admin Portal
  useEffect(() => {
    if (userData?.role === "admin") {
      navigate("/admin");
    }
  }, [userData, navigate]);

  // 2. Fetch Announcements
  useEffect(() => {
    if (!currentUser) return;
    
    const q = query(collection(db, "announcements"), where("target", "array-contains", "all"));
    const unsub = onSnapshot(q, (snap) => {
      setAnnouncements(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    
    return unsub;
  }, [currentUser]);

  // 3. Logout Handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/membership"); // Redirects back to the login/register wrapper
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // High-end loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFC]">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-t-2 border-[#B0926A] rounded-full animate-spin"></div>
          <p className="text-neutral-400 text-[10px] tracking-[0.3em] uppercase">Loading Portal...</p>
        </div>
      </div>
    );
  }

  // Fallback if data fails to load
  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC]">
        <p className="text-[#B0926A] font-light tracking-widest text-sm uppercase">
          Authentication required. Please log in.
        </p>
      </div>
    );
  }

  const firstName = userData?.fullName?.split(' ')[0] || 'Member';

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans selection:bg-[#B0926A]/20">
      
      {/* Sticky Top Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/60 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Dashboard Branding */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-neutral-900">
              NGYAR
            </span>
            <span className="hidden sm:inline text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light text-[#B0926A]">
              Portal
            </span>
          </div>

          {/* User Controls */}
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Session Active
            </span>
            <button 
              onClick={handleLogout}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-neutral-900 transition-all duration-300 border border-neutral-200 hover:border-[#B0926A]/50 px-6 py-3"
            >
              Secure Log Out
            </button>
          </div>

        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="py-16 sm:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto space-y-16">
          
          {/* Massive Typography Greeting */}
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
              Overview
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight">
              Welcome, {firstName}.
            </h1>
            <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed max-w-xl">
              Access your membership credentials, structural mentorship programs, and the latest ngyar announcements.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column (Credentials & Quick Actions) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Membership Details Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-10 transition-all duration-500 hover:border-[#B0926A]/40 shadow-sm shadow-neutral-200/20">
                <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A] mb-8 border-b border-neutral-100 pb-4">
                  Credentials
                </h2>
                
                <div className="space-y-6 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-50">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">Status</span>
                    <span className={`tracking-widest uppercase text-[11px] font-medium ${
                      userData.status === 'approved' ? 'text-emerald-700' : 'text-[#B0926A]'
                    }`}>
                      {userData.status}
                    </span>
                  </div>
                  
                  {userData.memberNumber && (
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-50">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">Alliance ID</span>
                      <span className="text-neutral-900 font-light tracking-wider">{userData.memberNumber}</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">Clearance Level</span>
                    <span className="text-neutral-900 font-light tracking-wider capitalize">{userData.role}</span>
                  </div>
                </div>
              </div>

              {/* Ecosystem Resources Card (New addition to make it feel complete) */}
              <div className="bg-neutral-900 p-8 sm:p-10 transition-all duration-500 shadow-xl">
                <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A] mb-6">
                  Ecosystem Resources
                </h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                  Download structural mentorship guidelines and agricultural investment frameworks.
                </p>
                <button className="w-full text-center text-[10px] uppercase tracking-[0.2em] text-white border border-neutral-700 hover:border-[#B0926A] hover:bg-[#B0926A]/10 transition-all duration-300 py-4">
                  Access Document Library
                </button>
              </div>

            </div>

            {/* Right Column (Announcements) */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-12 transition-all duration-500 hover:border-[#B0926A]/40 shadow-sm shadow-neutral-200/20 h-full">
                <div className="flex justify-between items-end mb-10 border-b border-neutral-100 pb-4">
                  <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A]">
                    Directives & Updates
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Live Feed
                  </span>
                </div>
                
                {announcements.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-48 text-center">
                    <p className="text-neutral-400 text-sm font-light italic">
                      No active directives at this time.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {announcements.map((a) => (
                      <li key={a.id} className="text-sm font-light text-neutral-700 bg-neutral-50/80 p-6 sm:p-8 border-l-2 border-[#B0926A] leading-relaxed relative group">
                        {/* Optional subtle date/time could go here if your DB stores timestamps */}
                        <p>{a.message}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}