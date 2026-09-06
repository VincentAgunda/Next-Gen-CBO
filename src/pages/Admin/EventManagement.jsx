import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ============================================================
  // REAL-TIME FIREBASE EVENTS
  // ============================================================

  useEffect(() => {
    const eventsRef = collection(db, "events");

    const unsubscribe = onSnapshot(
      eventsRef,
      (snapshot) => {
        const firebaseEvents = snapshot.docs.map((eventDoc) => ({
          id: eventDoc.id,
          ...eventDoc.data(),
        }));

        setEvents(firebaseEvents);
        setLoading(false);
      },
      (firebaseError) => {
        console.error("Error loading events:", firebaseError);
        setError("Unable to load events from Firebase.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ============================================================
  // RESET FORM
  // ============================================================

  const resetForm = () => {
    setForm({
      title: "",
      date: "",
      venue: "",
      description: "",
    });

    setEditingId(null);
    setError("");
  };

  // ============================================================
  // INPUT HANDLER
  // ============================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================================
  // CREATE / UPDATE EVENT
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      const eventData = {
        title: form.title.trim(),
        date: form.date.trim(),
        venue: form.venue.trim(),
        description: form.description.trim(),
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        // UPDATE EXISTING EVENT
        await updateDoc(
          doc(db, "events", editingId),
          eventData
        );
      } else {
        // CREATE NEW EVENT
        await addDoc(collection(db, "events"), {
          ...eventData,
          createdAt: serverTimestamp(),
        });
      }

      resetForm();
    } catch (firebaseError) {
      console.error("Event save error:", firebaseError);
      setError(
        firebaseError.message ||
          "Something went wrong while saving the event."
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // EDIT EVENT
  // ============================================================

  const handleEdit = (event) => {
    setForm({
      title: event.title || "",
      date: event.date || "",
      venue: event.venue || "",
      description: event.description || "",
    });

    setEditingId(event.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ============================================================
  // DELETE EVENT
  // ============================================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "events", id));
    } catch (firebaseError) {
      console.error("Delete error:", firebaseError);
      setError(
        firebaseError.message ||
          "Unable to delete the event."
      );
    }
  };

  const inputClasses =
    "w-full bg-[#F5F5F7] border border-transparent focus:border-[#333333] focus:bg-white text-[#333333] text-sm px-4 py-3 rounded-md outline-none transition-all duration-300";

  return (
    <div className="space-y-10 font-sans">

      {/* ============================================================
          HEADER
      ============================================================ */}

      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Scheduling
        </span>

        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Event Management
        </h1>
      </div>

      {/* ============================================================
          ERROR
      ============================================================ */}

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 px-5 py-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* ============================================================
          FORM
      ============================================================ */}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-100 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6"
      >
        <h2 className="text-[#333333] font-heading text-[11px] uppercase tracking-[0.25em] border-b border-gray-100 pb-3">
          {editingId
            ? "Edit Event Details"
            : "Create New Event"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <input
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            required
            className={inputClasses}
          />

          <input
            name="date"
            placeholder="Date (e.g., 15 Aug 2026)"
            value={form.date}
            onChange={handleChange}
            required
            className={inputClasses}
          />

          <input
            name="venue"
            placeholder="Venue"
            value={form.venue}
            onChange={handleChange}
            required
            className={inputClasses}
          />

        </div>

        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
          required
          className={`${inputClasses} min-h-[100px] resize-y`}
        />

        <div className="flex gap-4 pt-2">

          <button
            type="submit"
            disabled={saving}
            className="bg-[#333333] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium rounded-md hover:bg-transparent hover:text-[#333333] border border-[#333333] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving
              ? "Saving..."
              : editingId
              ? "Save Changes"
              : "Publish Event"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-transparent text-[#777777] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium rounded-md hover:text-[#333333] border border-gray-200 transition-all duration-300"
            >
              Cancel
            </button>
          )}

        </div>
      </form>

      {/* ============================================================
          EVENTS TABLE
      ============================================================ */}

      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

        {loading ? (
          <div className="px-8 py-12 text-center text-sm text-gray-400">
            Loading events...
          </div>
        ) : events.length === 0 ? (
          <div className="px-8 py-16 text-center">
            <p className="text-sm text-gray-400">
              No events have been published yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full text-left text-sm text-[#333333]">

              <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
                <tr>
                  <th className="px-6 py-4 font-medium">
                    Title
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Date
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Venue
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Description
                  </th>

                  <th className="px-6 py-4 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >

                    <td className="px-6 py-4 font-medium">
                      {event.title}
                    </td>

                    <td className="px-6 py-4 text-[#777777] whitespace-nowrap">
                      {event.date}
                    </td>

                    <td className="px-6 py-4 text-[#777777] whitespace-nowrap">
                      {event.venue}
                    </td>

                    <td className="px-6 py-4 text-[#777777] max-w-xs truncate">
                      {event.description}
                    </td>

                    <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">

                      <button
                        onClick={() => handleEdit(event)}
                        className="text-[#d2b79b] hover:text-[#b89b7d] font-medium text-xs uppercase tracking-wider transition-colors"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(event.id)
                        }
                        className="text-red-500 hover:text-red-700 font-medium text-xs uppercase tracking-wider transition-colors"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}