import { useEffect, useState } from "react";
import { collection, query, onSnapshot, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function MemberManagement() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "member_applications"));
    const unsub = onSnapshot(q, (snapshot) => {
      setApplications(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const handleApprove = async (app) => {
    const memberNumber = `NGYAR-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
    await updateDoc(doc(db, "member_applications", app.id), {
      status: "approved",
      approvedAt: new Date(),
      memberNumber,
    });
    
    await setDoc(doc(db, "users", app.userId), { status: "approved", memberNumber }, { merge: true });
    
    await setDoc(doc(db, "members", app.userId), {
      userId: app.userId,
      fullName: app.fullName,
      email: app.email,
      phone: app.phone,
      category: app.category,
      memberNumber,
      status: "approved",
      createdAt: new Date(),
    });
  };

  const handleReject = async (id) => {
    await updateDoc(doc(db, "member_applications", id), { status: "rejected" });
  };

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Network
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Member Applications
        </h1>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#333333]">
            <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
              <tr>
                <th className="px-6 py-4 font-medium">Applicant Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Applied On</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{app.fullName}</td>
                  <td className="px-6 py-4 text-[#777777]">{app.category}</td>
                  <td className="px-6 py-4 text-[#777777]">{app.createdAt?.toDate().toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-medium ${
                      app.status === "approved" ? "bg-emerald-50 text-emerald-700" :
                      app.status === "rejected" ? "bg-red-50 text-red-700" :
                      "bg-amber-50 text-amber-700"
                    }`}>
                      {app.status || "pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    {app.status === "pending" && (
                      <>
                        <button onClick={() => handleApprove(app)} className="text-emerald-600 hover:text-emerald-800 font-medium text-xs uppercase tracking-wider transition-colors">
                          Approve
                        </button>
                        <button onClick={() => handleReject(app.id)} className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors">
                          Reject
                        </button>
                      </>
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