import { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function VolunteerManagement() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "volunteers"), (snap) => {
      setVolunteers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const handleStatus = async (id, newStatus) => {
    await updateDoc(doc(db, "volunteers", id), { status: newStatus });
  };

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Community
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Volunteer Applications
        </h1>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#333333]">
            <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Phone</th>
                <th className="px-6 py-4 font-medium">Message</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {volunteers.map((vol) => (
                <tr key={vol.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{vol.fullName}</td>
                  <td className="px-6 py-4 text-[#777777]">{vol.email}</td>
                  <td className="px-6 py-4 text-[#777777]">{vol.phone}</td>
                  <td className="px-6 py-4 text-[#777777] max-w-xs truncate">{vol.message}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-medium ${
                      vol.status === "approved" ? "bg-emerald-50 text-emerald-700" :
                      vol.status === "rejected" ? "bg-red-50 text-red-700" :
                      "bg-amber-50 text-amber-700"
                    }`}>
                      {vol.status || "pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    {vol.status !== "approved" && (
                      <button onClick={() => handleStatus(vol.id, "approved")} className="text-emerald-600 hover:text-emerald-800 font-medium text-xs uppercase tracking-wider transition-colors">
                        Approve
                      </button>
                    )}
                    {vol.status !== "rejected" && (
                      <button onClick={() => handleStatus(vol.id, "rejected")} className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors">
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}