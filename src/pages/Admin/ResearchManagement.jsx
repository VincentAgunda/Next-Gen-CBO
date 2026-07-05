import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ResearchManagement() {
  const [publications, setPublications] = useState([]);
  const [form, setForm] = useState({ title: "", category: "", year: "", description: "", link: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "research_publications"), (snap) => {
      setPublications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const resetForm = () => {
    setForm({ title: "", category: "", year: "", description: "", link: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, "research_publications", editingId), form);
    } else {
      await addDoc(collection(db, "research_publications"), form);
    }
    resetForm();
  };

  const handleEdit = (pub) => {
    setForm({ title: pub.title, category: pub.category, year: pub.year, description: pub.description, link: pub.link });
    setEditingId(pub.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      await deleteDoc(doc(db, "research_publications", id));
    }
  };

  const inputClasses = "w-full bg-[#F5F5F7] border border-transparent focus:border-[#333333] focus:bg-white text-[#333333] text-sm px-4 py-3 rounded-md outline-none transition-all duration-300";

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Academic
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Research Publications
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
        <h2 className="text-[#333333] font-heading text-[11px] uppercase tracking-[0.25em] border-b border-gray-100 pb-3">
          {editingId ? "Update Publication" : "Index New Publication"}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <input placeholder="Paper Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className={inputClasses} />
          <input placeholder="Field / Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required className={inputClasses} />
          <input placeholder="Year of Publication" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} required className={inputClasses} />
        </div>
        <textarea placeholder="Abstract / Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required className={`${inputClasses} min-h-[100px] resize-y`} />
        <input placeholder="Cloudinary PDF/Link URL" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} required className={inputClasses} />
        
        <div className="flex gap-4 pt-2">
          <button type="submit" className="bg-[#333333] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium rounded-md hover:bg-transparent hover:text-[#333333] border border-[#333333] transition-all duration-300">
            {editingId ? "Save Record" : "Add Record"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="bg-transparent text-[#777777] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium rounded-md hover:text-[#333333] border border-gray-200 transition-all duration-300">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#333333]">
            <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
              <tr>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Year</th>
                <th className="px-6 py-4 font-medium">Resource</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {publications.map((pub) => (
                <tr key={pub.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{pub.title}</td>
                  <td className="px-6 py-4 text-[#777777]">{pub.category}</td>
                  <td className="px-6 py-4 text-[#777777]">{pub.year}</td>
                  <td className="px-6 py-4">
                    <a href={pub.link} target="_blank" rel="noreferrer" className="text-[#d2b79b] hover:text-[#b89b7d] font-medium text-xs uppercase tracking-wider transition-colors">
                      View PDF
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    <button onClick={() => handleEdit(pub)} className="text-[#d2b79b] hover:text-[#b89b7d] font-medium text-xs uppercase tracking-wider transition-colors">Edit</button>
                    <button onClick={() => handleDelete(pub.id)} className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors">Delete</button>
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