import { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function PartnershipManagement() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "partnership_requests"),
      (snap) => {
        setRequests(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      }
    );
    return unsub;
  }, []);

  const handleStatus = async (id, newStatus) => {
    await updateDoc(doc(db, "partnership_requests", id), {
      status: newStatus,
    });
  };

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Collaborations
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Partnership Requests
        </h1>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#333333]">
            <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
              <tr>
                <th className="px-6 py-4 font-medium">Organization</th>
                <th className="px-6 py-4 font-medium">Contact Person</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Proposal</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{req.organization}</td>
                  <td className="px-6 py-4 text-[#777777]">{req.contactPerson}</td>
                  <td className="px-6 py-4 text-[#777777]">{req.email}</td>
                  <td className="px-6 py-4 text-[#777777] max-w-xs truncate">{req.proposal}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-medium ${
                      req.status === "approved" ? "bg-emerald-50 text-emerald-700" :
                      req.status === "rejected" ? "bg-red-50 text-red-700" :
                      "bg-amber-50 text-amber-700"
                    }`}>
                      {req.status || "pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    {req.status !== "approved" && (
                      <button onClick={() => handleStatus(req.id, "approved")} className="text-emerald-600 hover:text-emerald-800 font-medium text-xs uppercase tracking-wider transition-colors">
                        Approve
                      </button>
                    )}
                    {req.status !== "rejected" && (
                      <button onClick={() => handleStatus(req.id, "rejected")} className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors">
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