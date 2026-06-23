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

export default function EventManagement() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    venue: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snap) => {
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const resetForm = () => {
    setForm({ title: "", date: "", venue: "", description: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, "events", editingId), form);
    } else {
      await addDoc(collection(db, "events"), form);
    }
    resetForm();
  };

  const handleEdit = (evt) => {
    setForm({
      title: evt.title,
      date: evt.date,
      venue: evt.venue,
      description: evt.description,
    });
    setEditingId(evt.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this event?")) {
      await deleteDoc(doc(db, "events", id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Event" : "Add New Event"}
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
            placeholder="Date (e.g., 15 Aug 2026)"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            placeholder="Venue"
            value={form.venue}
            onChange={(e) => setForm({ ...form, venue: e.target.value })}
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
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {editingId ? "Update" : "Add"} Event
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
              <th>Date</th>
              <th>Venue</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((evt) => (
              <tr key={evt.id} className="border-t">
                <td className="p-3 font-medium">{evt.title}</td>
                <td>{evt.date}</td>
                <td>{evt.venue}</td>
                <td className="max-w-xs truncate">{evt.description}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(evt)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(evt.id)}
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