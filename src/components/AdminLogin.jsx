import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { login, currentUser, isAdmin, isApproved, loading } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    if (!loading && currentUser) {
      if (isAdmin && isApproved) {
        navigate("/admin");
      } else {
        navigate("/member-portal"); 
      }
    }
  }, [currentUser, isAdmin, isApproved, loading, navigate]);

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (e) {
      setError("Invalid administrative credentials.");
    }
  };

  const inputClasses = "w-full bg-white/50 border border-neutral-300 focus:border-[#B0926A] focus:bg-white text-neutral-900 text-sm px-5 py-4 outline-none transition-all duration-500";

  return (
    <div className="bg-transparent min-h-screen py-24 px-6 flex flex-col justify-center items-center border-t border-neutral-300/50">
      
      <div className="text-center mb-12 space-y-4">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#B0926A] font-semibold">
          Restricted Zone
        </span>
        <h1 className="text-4xl sm:text-5xl font-light text-neutral-900 tracking-tight">
          Admin Portal
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-transparent space-y-8">
        <div className="space-y-6">
          <div>
            <label className="block text-neutral-500 text-[10px] uppercase tracking-[0.2em] mb-3">System Email</label>
            <input type="email" {...register("email", { required: true })} className={inputClasses} placeholder="admin@domain.com" />
          </div>
          <div>
            <label className="block text-neutral-500 text-[10px] uppercase tracking-[0.2em] mb-3">Security Key</label>
            <input type="password" {...register("password", { required: true })} className={inputClasses} placeholder="••••••••" />
          </div>
        </div>

        {error && <p className="text-[#B0926A] text-sm text-center font-medium">{error}</p>}
        
        <button disabled={isSubmitting} className="w-full bg-neutral-900 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] hover:bg-[#B0926A] transition-colors duration-500">
          {isSubmitting ? "Authorizing..." : "Initialize Session"}
        </button>
      </form>
    </div>
  );
}