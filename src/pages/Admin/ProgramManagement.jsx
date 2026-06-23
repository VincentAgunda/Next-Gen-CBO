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

export default function ProgramManagement() {
  const [programs, setPrograms] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "programs"), (snap) => {
      setPrograms(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const resetForm = () => {
    setForm({ title: "", description: "", category: "", image: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, "programs", editingId), form);
    } else {
      await addDoc(collection(db, "programs"), form);
    }
    resetForm();
  };

  const handleEdit = (prog) => {
    setForm({
      title: prog.title,
      description: prog.description,
      category: prog.category,
      image: prog.image || "",
    });
    setEditingId(prog.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this program?")) {
      await deleteDoc(doc(db, "programs", id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Programs</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Program" : "Add New Program"}
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
        </div>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <input
          placeholder="Image URL (Cloudinary or local)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {editingId ? "Update" : "Add"} Program
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

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((prog) => (
              <tr key={prog.id} className="border-t">
                <td className="p-3 font-medium">{prog.title}</td>
                <td>{prog.category}</td>
                <td className="max-w-xs truncate">{prog.description}</td>
                <td>
                  {prog.image ? (
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="h-10 w-10 object-cover rounded"
                    />
                  ) : (
                    "—"
                  )}
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(prog)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prog.id)}
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