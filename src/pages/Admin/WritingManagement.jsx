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

export default function WritingManagement() {
  const [resources, setResources] = useState([]);
  const [form, setForm] = useState({
    title: "",
    type: "Exercise", // "Exercise" | "Work"
    deadline: "",
    link: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ============================================================
  // REAL-TIME FIREBASE WRITING RESOURCES
  // ============================================================

  useEffect(() => {
    const resourcesRef = collection(db, "writingResources");

    const unsubscribe = onSnapshot(
      resourcesRef,
      (snapshot) => {
        const firebaseResources = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));

        setResources(firebaseResources);
        setLoading(false);
      },
      (firebaseError) => {
        console.error("Error loading writing resources:", firebaseError);
        setError("Unable to load writing resources from Firebase.");
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
      type: "Exercise",
      deadline: "",
      link: "",
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
  // CREATE / UPDATE RESOURCE
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      // Basic URL validation (allow http/https only)
      const trimmedLink = form.link.trim();
      if (!/^https?:\/\//i.test(trimmedLink)) {
        throw new Error("Link must start with http:// or https://");
      }

      const resourceData = {
        title: form.title.trim(),
        type: form.type,
        deadline: form.deadline.trim(),
        link: trimmedLink,
        description: form.description.trim(),
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        await updateDoc(
          doc(db, "writingResources", editingId),
          resourceData
        );
      } else {
        await addDoc(collection(db, "writingResources"), {
          ...resourceData,
          createdAt: serverTimestamp(),
        });
      }

      resetForm();
    } catch (firebaseError) {
      console.error("Writing resource save error:", firebaseError);
      setError(
        firebaseError.message ||
          "Something went wrong while saving the writing resource."
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // EDIT RESOURCE
  // ============================================================

  const handleEdit = (resource) => {
    setForm({
      title: resource.title || "",
      type: resource.type || "Exercise",
      deadline: resource.deadline || "",
      link: resource.link || "",
      description: resource.description || "",
    });

    setEditingId(resource.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ============================================================
  // DELETE RESOURCE
  // ============================================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this writing resource?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "writingResources", id));
    } catch (firebaseError) {
      console.error("Delete error:", firebaseError);
      setError(
        firebaseError.message || "Unable to delete the writing resource."
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
          Curriculum
        </span>

        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          Writing Exercises & Works
        </h1>

        <p className="text-sm text-[#777777] font-light max-w-2xl leading-relaxed">
          Publish writing exercises and works for members. Submissions or
          reference material are delivered via external links (Google Docs,
          Notion, PDFs, etc.).
        </p>
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
            ? "Edit Writing Resource"
            : "Publish New Writing Resource"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <input
            name="title"
            placeholder="Title (e.g., Essay #4 – Perspective)"
            value={form.title}
            onChange={handleChange}
            required
            className={inputClasses}
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="Exercise">Exercise</option>
            <option value="Work">Work</option>
          </select>

          <input
            name="deadline"
            placeholder="Deadline (e.g., 20 Sep 2026)"
            value={form.deadline}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <input
          name="link"
          type="url"
          placeholder="Link (https://docs.google.com/...)"
          value={form.link}
          onChange={handleChange}
          required
          className={inputClasses}
        />

        <textarea
          name="description"
          placeholder="Description / instructions for the member"
          value={form.description}
          onChange={handleChange}
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
              : "Publish Resource"}
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
          RESOURCES TABLE
      ============================================================ */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        {loading ? (
          <div className="px-8 py-12 text-center text-sm text-gray-400">
            Loading writing resources...
          </div>
        ) : resources.length === 0 ? (
          <div className="px-8 py-16 text-center">
            <p className="text-sm text-gray-400">
              No writing resources have been published yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#333333]">
              <thead className="bg-[#F5F5F7] text-[10px] uppercase tracking-[0.15em] text-[#777777]">
                <tr>
                  <th className="px-6 py-4 font-medium">Title</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Deadline</th>
                  <th className="px-6 py-4 font-medium">Link</th>
                  <th className="px-6 py-4 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {resources.map((resource) => (
                  <tr
                    key={resource.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">
                      {resource.title}
                    </td>

                    <td className="px-6 py-4 text-[#777777] whitespace-nowrap">
                      {resource.type}
                    </td>

                    <td className="px-6 py-4 text-[#777777] whitespace-nowrap">
                      {resource.deadline || "—"}
                    </td>

                    <td className="px-6 py-4 max-w-xs truncate">
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d2b79b] hover:text-[#b89b7d] underline underline-offset-2 transition-colors"
                      >
                        {resource.link}
                      </a>
                    </td>

                    <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(resource)}
                        className="text-[#d2b79b] hover:text-[#b89b7d] font-medium text-xs uppercase tracking-wider transition-colors"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(resource.id)}
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