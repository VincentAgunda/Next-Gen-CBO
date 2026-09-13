import { useEffect, useState } from "react";
import { collection, query, onSnapshot, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function MemberManagement() {
  const [applications, setApplications] = useState([]);
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState("applications"); // 'applications' | 'members'

  useEffect(() => {
    const qApps = query(collection(db, "member_applications"));
    const unsubApps = onSnapshot(qApps, (snapshot) => {
      setApplications(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const qMembers = query(collection(db, "members"));
    const unsubMembers = onSnapshot(qMembers, (snapshot) => {
      setMembers(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsubApps();
      unsubMembers();
    };
  }, []);

  const handleApprove = async (app) => {
    try {
      const memberNumber = `NGYAR-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
      
      await updateDoc(doc(db, "member_applications", app.id), {
        status: "approved",
        approvedAt: new Date(),
        memberNumber,
      });
      
      const targetUserId = app.userId || app.id;
      
      await setDoc(doc(db, "users", targetUserId), { 
        status: "approved", 
        memberNumber 
      }, { merge: true });
      
      await setDoc(doc(db, "members", targetUserId), {
        userId: targetUserId,
        fullName: app.fullName || "N/A",
        email: app.email || "N/A",
        phone: app.phone || "N/A",
        category: app.category || "General",
        memberNumber,
        status: "approved",
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error approving member:", error);
      alert("Failed to approve application.");
    }
  };

  const handleReject = async (id) => {
    if (window.confirm("Are you sure you want to reject this application?")) {
      await updateDoc(doc(db, "member_applications", id), { status: "rejected" });
    }
  };

  const handleRevoke = async (member) => {
    if (window.confirm("Are you sure you want to revoke this membership?")) {
      await deleteDoc(doc(db, "members", member.id));
      await updateDoc(doc(db, "users", member.userId), { status: "revoked" });
    }
  };

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Network
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Member Management
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTab("applications")}
          className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
            activeTab === "applications"
              ? "border-b-2 border-[#333333] text-[#333333]"
              : "text-gray-400 hover:text-[#333333]"
          }`}
        >
          Applications ({applications.filter(a => a.status === "pending").length})
        </button>
        <button
          onClick={() => setActiveTab("members")}
          className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
            activeTab === "members"
              ? "border-b-2 border-[#333333] text-[#333333]"
              : "text-gray-400 hover:text-[#333333]"
          }`}
        >
          Active Members ({members.length})
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#333333]">
            <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">{activeTab === "members" ? "Member No." : "Applied On"}</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100">
              {activeTab === "applications" ? (
                applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{app.fullName}</td>
                    <td className="px-6 py-4 text-[#777777]">{app.category}</td>
                    <td className="px-6 py-4 text-[#777777]">{app.createdAt?.toDate().toLocaleDateString() || 'N/A'}</td>
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
                      {(app.status === "pending" || !app.status) && (
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
                ))
              ) : (
                members.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{member.fullName}</td>
                    <td className="px-6 py-4 text-[#777777]">{member.category}</td>
                    <td className="px-6 py-4 text-[#777777]">{member.memberNumber}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-medium bg-emerald-50 text-emerald-700">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button onClick={() => handleRevoke(member)} className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors">
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))
              )}

              {(activeTab === "applications" && applications.length === 0) || (activeTab === "members" && members.length === 0) ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-400 text-sm">
                    No records found in this view.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}