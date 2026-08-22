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
      const userCred = await signup(data.email, data.password, {
        fullName: data.fullName,
        phone: data.phone,
        role: "member",
        status: "pending",
      });

      await addDoc(collection(db, "member_applications"), {
        userId: userCred.user.uid,
        ...data,
        status: "pending",
        createdAt: new Date(),
      });

      setMessage({ text: "Registration submitted! Your account is pending approval.", type: "success" });
      setTimeout(() => navigate("/member-portal"), 2000);
      
    } catch (err) {
      console.error(err);
      let errorMessage = "An error occurred during registration. Please try again.";
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please switch to 'Secure Login'.";
      }
      setMessage({ text: errorMessage, type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  // Luxury theme classes
  const inputClasses = "w-full bg-neutral-50/50 border border-neutral-200 focus:border-[#B0926A] focus:bg-white text-neutral-900 text-sm px-5 py-4 outline-none transition-all duration-500 placeholder:text-neutral-300";
  const labelClasses = "block text-neutral-500 text-[10px] uppercase tracking-[0.2em] mb-3 font-medium";
  const sectionHeaderClasses = "block text-[#B0926A] text-[11px] uppercase tracking-[0.25em] mb-8 border-b border-neutral-200 pb-4 mt-8";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      
      <div>
        <span className={sectionHeaderClasses}>Personal Details</span>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>Full Name *</label>
            <input {...register("fullName", { required: true })} className={inputClasses} placeholder="John Doe" />
          </div>
          <div>
            <label className={labelClasses}>ID Number *</label>
            <input {...register("idNumber", { required: true })} className={inputClasses} placeholder="National ID" />
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
            <input {...register("phone", { required: true })} className={inputClasses} placeholder="+254..." />
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

      <div>
        <span className={sectionHeaderClasses}>Account Setup</span>
        <div className="grid md:grid-cols-2 gap-6">
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
            <input type="email" {...register("email", { required: true })} className={inputClasses} placeholder="email@address.com" />
          </div>
          <div>
            <label className={labelClasses}>Password *</label>
            <input type="password" {...register("password", { required: true, minLength: 6 })} className={inputClasses} placeholder="••••••••" />
            {errors.password && <span className="text-[#B0926A] text-[10px] uppercase tracking-wider mt-3 block">Min 6 characters required</span>}
          </div>
        </div>
      </div>

      {message.text && (
        <div className={`p-5 text-sm font-medium border ${
          message.type === "error" 
            ? "bg-red-50 text-red-900 border-red-200" 
            : "bg-green-50 text-emerald-900 border-green-200"
        }`}>
          {message.text}
        </div>
      )}

      <button 
        type="submit"
        disabled={submitting} 
        className="w-full bg-neutral-900 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B0926A] transition-colors duration-500 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Processing..." : "Complete Registration"}
      </button>
    </form>
  );
}