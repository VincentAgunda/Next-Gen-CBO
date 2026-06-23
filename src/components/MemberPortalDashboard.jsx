import { useAuth } from "../contexts/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export default function MemberPortalDashboard() {
  const { userData, currentUser } = useAuth();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    const q = query(collection(db, "announcements"), where("target", "array-contains", "all"));
    const unsub = onSnapshot(q, (snap) => {
      setAnnouncements(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, [currentUser]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Member Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Membership Details</h2>
          <p>Status: <span className="capitalize font-bold">{userData.status}</span></p>
          {userData.memberNumber && <p>Member Number: {userData.memberNumber}</p>}
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Announcements</h2>
          {announcements.length === 0 ? (
            <p className="text-gray-500">No announcements</p>
          ) : (
            <ul className="list-disc pl-5">
              {announcements.map((a) => (
                <li key={a.id}>{a.message}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Additional sections: registered events, certificates, downloads can be added similarly */}
    </div>
  );
}