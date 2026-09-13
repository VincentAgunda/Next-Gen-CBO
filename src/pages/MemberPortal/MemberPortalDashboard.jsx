import { useAuth } from "../contexts/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export default function MemberPortalDashboard() {
  const { userData, currentUser, loading } = useAuth();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    
    const q = query(collection(db, "announcements"), where("target", "array-contains", "all"));
    const unsub = onSnapshot(q, (snap) => {
      setAnnouncements(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    
    return unsub;
  }, [currentUser]);

  // High-end loading state to match AdminRoute and ProtectedRoute
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-t-2 border-[#B0926A] rounded-full animate-spin"></div>
          <p className="text-neutral-400 text-[10px] tracking-[0.3em] uppercase">Loading Portal...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <p className="text-[#B0926A] font-light tracking-widest text-sm uppercase">
          Error loading profile. Please authenticate again.
        </p>
      </div>
    );
  }

  // Extract first name for a personalized massive greeting
  const firstName = userData?.fullName?.split(' ')[0] || 'Member';

  return (
    <div className="min-h-screen bg-transparent py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Massive Typography Header */}
        <div className="space-y-6">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
            Alliance Portal
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight">
            Welcome, {firstName}.
          </h1>
          <p className="text-neutral-500 font-light max-w-2xl text-sm sm:text-base leading-relaxed">
            Access your membership credentials, structural mentorship programs, and the latest alliance announcements below.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Membership Details Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-12 transition-all duration-500 hover:border-[#B0926A]/50">
            <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A] mb-8 border-b border-neutral-200 pb-4">
              Credentials
            </h2>
            
            <div className="space-y-6 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-100">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">Status</span>
                <span className={`tracking-widest uppercase text-xs font-medium ${
                  userData.status === 'approved' ? 'text-neutral-900' : 'text-[#B0926A]'
                }`}>
                  {userData.status}
                </span>
              </div>
              
              {userData.memberNumber && (
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-100">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">Alliance ID</span>
                  <span className="text-neutral-900 font-light tracking-wider">{userData.memberNumber}</span>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-100">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">Clearance Level</span>
                <span className="text-neutral-900 font-light tracking-wider capitalize">{userData.role}</span>
              </div>
            </div>
          </div>

          {/* Announcements Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-12 transition-all duration-500 hover:border-[#B0926A]/50">
            <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A] mb-8 border-b border-neutral-200 pb-4">
              Directives & Updates
            </h2>
            
            {announcements.length === 0 ? (
              <p className="text-neutral-400 text-sm font-light italic mt-4">
                No active directives at this time.
              </p>
            ) : (
              <ul className="space-y-4">
                {announcements.map((a) => (
                  <li key={a.id} className="text-sm font-light text-neutral-600 bg-neutral-50/50 p-5 border-l-2 border-[#B0926A] leading-relaxed">
                    {a.message}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}