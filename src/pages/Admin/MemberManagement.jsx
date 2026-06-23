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
    // Update user document
    await setDoc(doc(db, "users", app.userId), { status: "approved", memberNumber }, { merge: true });
    // Optionally create member record
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
    <div>
      <h1 className="text-2xl font-bold mb-4">Member Applications</h1>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-3">{app.fullName}</td>
                <td>{app.category}</td>
                <td>{app.createdAt?.toDate().toLocaleDateString()}</td>
                <td className="capitalize">{app.status}</td>
                <td className="space-x-2">
                  {app.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(app)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
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
  );
}