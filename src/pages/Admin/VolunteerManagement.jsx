import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
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
    <div>
      <h1 className="text-2xl font-bold mb-6">Volunteer Applications</h1>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((vol) => (
              <tr key={vol.id} className="border-t">
                <td className="p-3 font-medium">{vol.fullName}</td>
                <td>{vol.email}</td>
                <td>{vol.phone}</td>
                <td className="max-w-xs truncate">{vol.message}</td>
                <td className="capitalize">{vol.status || "pending"}</td>
                <td className="space-x-2">
                  {vol.status !== "approved" && (
                    <button
                      onClick={() => handleStatus(vol.id, "approved")}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                  )}
                  {vol.status !== "rejected" && (
                    <button
                      onClick={() => handleStatus(vol.id, "rejected")}
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