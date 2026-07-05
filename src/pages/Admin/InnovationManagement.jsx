import { useEffect, useState } from "react";
import { collection, query, onSnapshot, updateDoc, doc } from "firebase/firestore";
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
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Incubator
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Innovation Submissions
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {submissions.map((sub) => (
          <div key={sub.id} className="bg-white border border-gray-100 p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-[#333333] text-lg leading-tight">{sub.title}</h3>
                <span className={`px-2 py-1 rounded-sm text-[9px] uppercase tracking-wider font-medium whitespace-nowrap ml-3 ${
                  sub.status === "approved" ? "bg-emerald-50 text-emerald-700" :
                  sub.status === "rejected" ? "bg-red-50 text-red-700" :
                  "bg-amber-50 text-amber-700"
                }`}>
                  {sub.status || "pending"}
                </span>
              </div>
              <p className="text-sm text-[#777777] mb-4">Submitted by <span className="text-[#333333]">{sub.innovator}</span></p>
              
              {sub.image && (
                <div className="w-full h-32 mb-4 overflow-hidden rounded-md border border-gray-100">
                  <img src={sub.image} alt="innovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t border-gray-50 flex gap-3 mt-auto">
              {sub.status === "pending" && (
                <>
                  <button onClick={() => handleStatus(sub.id, "approved")} className="flex-1 bg-[#333333] text-white px-3 py-2 text-[10px] uppercase tracking-[0.1em] font-medium rounded hover:bg-[#d2b79b] transition-colors">
                    Approve
                  </button>
                  <button onClick={() => handleStatus(sub.id, "rejected")} className="flex-1 bg-transparent text-red-500 border border-red-200 px-3 py-2 text-[10px] uppercase tracking-[0.1em] font-medium rounded hover:bg-red-50 transition-colors">
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}