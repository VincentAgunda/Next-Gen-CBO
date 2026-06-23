import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
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
    <div>
      <h1 className="text-2xl font-bold mb-6">Partnership Requests</h1>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Organization</th>
              <th>Contact Person</th>
              <th>Email</th>
              <th>Proposal</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="p-3 font-medium">{req.organization}</td>
                <td>{req.contactPerson}</td>
                <td>{req.email}</td>
                <td className="max-w-xs truncate">{req.proposal}</td>
                <td className="capitalize">{req.status || "pending"}</td>
                <td className="space-x-2">
                  {req.status !== "approved" && (
                    <button
                      onClick={() => handleStatus(req.id, "approved")}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                  )}
                  {req.status !== "rejected" && (
                    <button
                      onClick={() => handleStatus(req.id, "rejected")}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
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
  );
}