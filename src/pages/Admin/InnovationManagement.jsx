import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function InnovationManagement() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "innovation_submissions"));
    const unsub = onSnapshot(q, (snap) => {
      setSubmissions(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const handleStatus = (id, newStatus) => {
    updateDoc(doc(db, "innovation_submissions", id), { status: newStatus });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Innovation Submissions</h1>
      <div className="grid gap-4">
        {submissions.map((sub) => (
          <div key={sub.id} className="bg-white p-4 rounded shadow flex justify-between items-start">
            <div>
              <h3 className="font-bold">{sub.title}</h3>
              <p className="text-sm">by {sub.innovator}</p>
              <p className="text-sm text-gray-500">Status: {sub.status}</p>
              {sub.image && <img src={sub.image} alt="innovation" className="h-20 mt-2 rounded" />}
            </div>
            <div className="space-x-2">
              {sub.status === "pending" && (
                <>
                  <button onClick={() => handleStatus(sub.id, "approved")} className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                  <button onClick={() => handleStatus(sub.id, "rejected")} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}