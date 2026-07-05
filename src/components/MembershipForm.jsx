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
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setMessage({ text: "", type: "" });
    
    try {
      // 1. Create Firebase Auth user
      const userCred = await signup(data.email, data.password, {
        fullName: data.fullName,
        phone: data.phone,
        role: "member",
        status: "pending",
      });

      // 2. Save application in Firestore
      await addDoc(collection(db, "member_applications"), {
        userId: userCred.user.uid,
        fullName: data.fullName,
        idNumber: data.idNumber,
        gender: data.gender,
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

      setMessage({ text: "Registration submitted! Your account is pending approval.", type: "success" });
      setTimeout(() => navigate("/member-portal"), 2000);
      
    } catch (err) {
      console.error(err); // Good for debugging console
      
      // Friendly Error Handling
      let errorMessage = "An error occurred during registration. Please try again.";
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please switch to 'Secure Login' above.";
      } else if (err.code === "permission-denied") {
        errorMessage = "Database connection blocked. Please verify Firestore security rules.";
      }
      
      setMessage({ text: errorMessage, type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  // Reusable theme classes
  const inputClasses = "w-full bg-[#F5F5F7] border border-transparent focus:border-[#333333] focus:bg-white text-[#333333] text-sm px-4 py-3 rounded-md outline-none transition-all duration-300";
  const labelClasses = "block text-[#777777] font-sans text-[10px] uppercase tracking-[0.15em] mb-2 font-medium";
  const sectionHeaderClasses = "block text-[#d2b79b] font-heading text-[11px] uppercase tracking-[0.25em] mb-6 border-b border-gray-100 pb-3 mt-4";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      
      {/* Section 1: Personal Details */}
      <div>
        <span className={sectionHeaderClasses}>Personal Details</span>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={labelClasses}>Full Name *</label>
            <input {...register("fullName", { required: true })} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>ID Number *</label>
            <input {...register("idNumber", { required: true })} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Gender *</label>
            <select {...register("gender", { required: true })} className={inputClasses}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Phone Number *</label>
            <input {...register("phone", { required: true })} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>County *</label>
            <input {...register("county", { required: true })} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Ward *</label>
            <input {...register("ward", { required: true })} className={inputClasses} />
          </div>
        </div>
      </div>

      {/* Section 2: Professional Details */}
      <div>
        <span className={sectionHeaderClasses}>Professional Details</span>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={labelClasses}>Occupation</label>
            <input {...register("occupation")} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Institution</label>
            <input {...register("institution")} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Education Level</label>
            <select {...register("education")} className={inputClasses}>
              <option value="">Select</option>
              <option>Certificate</option>
              <option>Diploma</option>
              <option>Degree</option>
              <option>Masters</option>
              <option>PhD</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Skills</label>
            <input {...register("skills")} placeholder="e.g., farming, coding" className={inputClasses} />
          </div>
        </div>
      </div>

      {/* Section 3: Interests */}
      <div>
        <span className={sectionHeaderClasses}>Areas of Interest</span>
        <div className="flex flex-wrap gap-4">
          {["Agribusiness", "Research", "Innovation", "Climate Action", "Community Development"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-[#777777] cursor-pointer group">
              <input type="checkbox" value={opt} {...register("interests")} className="w-4 h-4 rounded accent-[#333333] cursor-pointer" />
              <span className="group-hover:text-[#333333] transition-colors">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Section 4: Account Details */}
      <div>
        <span className={sectionHeaderClasses}>Account Setup</span>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className={labelClasses}>Membership Category *</label>
            <select {...register("category", { required: true })} className={inputClasses}>
              <option value="">Select Category</option>
              <option>Ordinary Member</option>
              <option>Associate Member</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Email Address *</label>
            <input type="email" {...register("email", { required: true })} className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Password *</label>
            <input type="password" {...register("password", { required: true, minLength: 6 })} className={inputClasses} />
            {errors.password && <span className="text-[#d2b79b] text-[10px] uppercase tracking-wider mt-2 block">Min 6 characters required</span>}
          </div>
        </div>
      </div>

      {/* Status Messages */}
      {message.text && (
        <div className={`p-4 rounded-md text-sm font-medium ${
          message.type === "error" 
            ? "bg-red-50 text-red-800 border-l-4 border-red-500" 
            : "bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500"
        }`}>
          {message.text}
        </div>
      )}

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={submitting} 
        className="w-full rounded-md font-heading border border-[#333333] bg-[#333333] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#333333] transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Processing Registration..." : "Complete Registration"}
      </button>

    </form>
  );
}