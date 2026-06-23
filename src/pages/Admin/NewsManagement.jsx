import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";

export default function NewsManagement() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
    excerpt: "",
    content: "",
  });
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
    setForm({
      title: article.title,
      date: article.date,
      category: article.category,
      excerpt: article.excerpt,
      content: article.content,
    });
    setEditingId(article.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this article?")) {
      await deleteDoc(doc(db, "news", id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage News & Articles</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Article" : "Add New Article"}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            placeholder="Date (e.g., 2026-05-10)"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="border p-2 rounded"
          />
        </div>
        <textarea
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Full Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows={5}
          className="w-full border p-2 rounded"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {editingId ? "Update" : "Add"} Article
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 px-6 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Excerpt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((art) => (
              <tr key={art.id} className="border-t">
                <td className="p-3 font-medium">{art.title}</td>
                <td>{art.category}</td>
                <td>{art.date}</td>
                <td className="max-w-xs truncate">{art.excerpt}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(art)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(art.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}