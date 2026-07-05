import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function NewsManagement() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({ title: "", date: "", category: "", excerpt: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "news"), (snap) => {
      setArticles(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const resetForm = () => {
    setForm({ title: "", date: "", category: "", excerpt: "", content: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, "news", editingId), form);
    } else {
      await addDoc(collection(db, "news"), form);
    }
    resetForm();
  };

  const handleEdit = (article) => {
    setForm({ title: article.title, date: article.date, category: article.category, excerpt: article.excerpt, content: article.content });
    setEditingId(article.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      await deleteDoc(doc(db, "news", id));
    }
  };

  const inputClasses = "w-full bg-[#F5F5F7] border border-transparent focus:border-[#333333] focus:bg-white text-[#333333] text-sm px-4 py-3 rounded-md outline-none transition-all duration-300";

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Editorial
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          News & Articles
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
        <h2 className="text-[#333333] font-heading text-[11px] uppercase tracking-[0.25em] border-b border-gray-100 pb-3">
          {editingId ? "Edit Article" : "Draft New Article"}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <input placeholder="Headline Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className={inputClasses} />
          <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required className={inputClasses} />
          <input placeholder="Publish Date (e.g., 2026-05-10)" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required className={inputClasses} />
        </div>
        <textarea placeholder="Brief Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className={`${inputClasses} min-h-[80px] resize-y`} />
        <textarea placeholder="Full Article Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={6} className={`${inputClasses} min-h-[150px] resize-y`} />
        
        <div className="flex gap-4 pt-2">
          <button type="submit" className="bg-[#333333] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium rounded-md hover:bg-transparent hover:text-[#333333] border border-[#333333] transition-all duration-300">
            {editingId ? "Update Article" : "Publish Article"}
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
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Excerpt</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {articles.map((art) => (
                <tr key={art.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{art.title}</td>
                  <td className="px-6 py-4 text-[#777777]">{art.category}</td>
                  <td className="px-6 py-4 text-[#777777] whitespace-nowrap">{art.date}</td>
                  <td className="px-6 py-4 text-[#777777] max-w-xs truncate">{art.excerpt}</td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    <button onClick={() => handleEdit(art)} className="text-[#d2b79b] hover:text-[#b89b7d] font-medium text-xs uppercase tracking-wider transition-colors">Edit</button>
                    <button onClick={() => handleDelete(art.id)} className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors">Delete</button>
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