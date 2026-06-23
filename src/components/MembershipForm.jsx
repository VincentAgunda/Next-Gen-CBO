import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MembershipForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setMessage("");
    try {
      // Create Firebase Auth user
      const userCred = await signup(data.email, data.password, {
        fullName: data.fullName,
        phone: data.phone,
        role: "member",
        status: "pending",
      });

      // Save application in Firestore
      await addDoc(collection(db, "member_applications"), {
        userId: userCred.user.uid,
        fullName: data.fullName,
        idNumber: data.idNumber,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        county: data.county,
        ward: data.ward,
        phone: data.phone,
        email: data.email,
        occupation: data.occupation,
        institution: data.institution,
        education: data.education,
        skills: data.skills,
        interests: data.interests || [],
        category: data.category,
        status: "pending",
        createdAt: new Date(),
      });

      setMessage("Registration submitted! Your account is pending approval.");
      setTimeout(() => navigate("/member-portal"), 2000);
    } catch (err) {
      setMessage("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold">Membership Registration</h2>
      {/* Personal Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name *</label>
          <input {...register("fullName", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">ID Number *</label>
          <input {...register("idNumber", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Gender *</label>
          <select {...register("gender", { required: true })} className="w-full border rounded p-2">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Date of Birth *</label>
          <input type="date" {...register("dateOfBirth", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">County *</label>
          <input {...register("county", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Ward *</label>
          <input {...register("ward", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number *</label>
          <input {...register("phone", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email Address *</label>
          <input type="email" {...register("email", { required: true })} className="w-full border rounded p-2" />
        </div>
      </div>

      {/* Professional Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Occupation</label>
          <input {...register("occupation")} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Institution</label>
          <input {...register("institution")} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Education Level</label>
          <select {...register("education")} className="w-full border rounded p-2">
            <option value="">Select</option>
            <option>Certificate</option>
            <option>Diploma</option>
            <option>Degree</option>
            <option>Masters</option>
            <option>PhD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Skills</label>
          <input {...register("skills")} placeholder="e.g., farming, coding" className="w-full border rounded p-2" />
        </div>
      </div>

      {/* Interests */}
      <div>
        <label className="block text-sm font-medium mb-1">Areas of Interest</label>
        <div className="flex flex-wrap gap-3">
          {["Agribusiness", "Research", "Innovation", "Climate Action", "Community Development"].map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input type="checkbox" value={opt} {...register("interests")} />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Membership Category */}
      <div>
        <label className="block text-sm font-medium">Membership Category *</label>
        <select {...register("category", { required: true })} className="w-full border rounded p-2">
          <option value="">Select</option>
          <option>Ordinary Member</option>
          <option>Associate Member</option>
        </select>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium">Password *</label>
        <input type="password" {...register("password", { required: true, minLength: 6 })} className="w-full border rounded p-2" />
        {errors.password && <span className="text-red-500 text-sm">Min 6 characters</span>}
      </div>

      <button disabled={submitting} className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 disabled:opacity-50">
        {submitting ? "Submitting..." : "Register"}
      </button>
      {message && <p className={`mt-2 ${message.includes("Error") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
    </form>
  );
}