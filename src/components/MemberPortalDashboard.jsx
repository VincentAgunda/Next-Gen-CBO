import { useAuth } from "../contexts/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export default function MemberPortalDashboard() {
  // 1. Destructure loading from useAuth
  const { userData, currentUser, loading } = useAuth();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Only fetch announcements if there is an active user
    if (!currentUser) return;
    
    const q = query(collection(db, "announcements"), where("target", "array-contains", "all"));
    const unsub = onSnapshot(q, (snap) => {
      setAnnouncements(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    
    return unsub;
  }, [currentUser]);

  // 2. Show a clean loading state while Firebase fetches the user data
  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-[#777777] font-sans text-xs uppercase tracking-[0.15em] font-medium">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  // 3. Fallback in case they somehow bypass route protection without data
  if (!userData) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-red-500">
        Error loading member profile. Please try logging in again.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#333333]">Member Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Membership Details Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#d2b79b] mb-4 border-b border-gray-50 pb-2">
            Membership Details
          </h2>
          <div className="space-y-3 text-sm text-[#555555]">
            <p className="flex justify-between">
              <span className="font-medium text-[#777777]">Status</span>
              <span className={`capitalize font-bold ${
                userData.status === 'approved' ? 'text-green-600' : 'text-amber-600'
              }`}>
                {userData.status}
              </span>
            </p>
            {userData.memberNumber && (
              <p className="flex justify-between">
                <span className="font-medium text-[#777777]">Member Number</span>
                <span className="font-semibold">{userData.memberNumber}</span>
              </p>
            )}
            <p className="flex justify-between">
              <span className="font-medium text-[#777777]">Role</span>
              <span className="capitalize font-semibold">{userData.role}</span>
            </p>
          </div>
        </div>

        {/* Announcements Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#d2b79b] mb-4 border-b border-gray-50 pb-2">
            Announcements
          </h2>
          {announcements.length === 0 ? (
            <p className="text-[#777777] text-sm italic mt-4 text-center">
              No new announcements at this time.
            </p>
          ) : (
            <ul className="space-y-3 mt-4">
              {announcements.map((a) => (
                <li key={a.id} className="text-sm text-[#555555] bg-[#F5F5F7] p-3 rounded-md border-l-2 border-[#d2b79b]">
                  {a.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* Additional sections: registered events, certificates, downloads can be added similarly */}
    </div>
  );
}