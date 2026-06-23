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

export default function ResearchManagement() {
  const [publications, setPublications] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    year: "",
    description: "",
    link: "", // Cloudinary URL
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "research_publications"),
      (snap) => {
        setPublications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      }
    );
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
    setForm({
      title: pub.title,
      category: pub.category,
      year: pub.year,
      description: pub.description,
      link: pub.link,
    });
    setEditingId(pub.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this publication?")) {
      await deleteDoc(doc(db, "research_publications", id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Research Publications</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Publication" : "Add New Publication"}
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
            placeholder="Year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            required
            className="border p-2 rounded"
          />
        </div>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <input
          placeholder="Cloudinary PDF/Link URL"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {editingId ? "Update" : "Add"} Publication
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
              <th>Year</th>
              <th>Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub) => (
              <tr key={pub.id} className="border-t">
                <td className="p-3 font-medium">{pub.title}</td>
                <td>{pub.category}</td>
                <td>{pub.year}</td>
                <td>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    View PDF
                  </a>
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(pub)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pub.id)}
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