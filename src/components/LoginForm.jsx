import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
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
    setError(""); 
    try {
      await login(data.email, data.password);
    } catch (err) {
      console.error(err);
      let errorMessage = "An error occurred during login. Please try again.";
      if (["auth/invalid-credential", "auth/user-not-found", "auth/wrong-password"].includes(err.code)) {
        errorMessage = "Invalid email or password. Please check your credentials.";
      }
      setError(errorMessage);
    }
  };

  const inputClasses = "w-full bg-neutral-50/50 border border-neutral-200 focus:border-[#B0926A] focus:bg-white text-neutral-900 text-sm px-5 py-4 outline-none transition-all duration-500 placeholder:text-neutral-300";
  const labelClasses = "block text-neutral-500 text-[10px] uppercase tracking-[0.2em] mb-3 font-medium";
  const sectionHeaderClasses = "block text-[#B0926A] text-[11px] uppercase tracking-[0.25em] mb-8 border-b border-neutral-200 pb-4";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <span className={sectionHeaderClasses}>Account Access</span>
        <div className="space-y-6">
          <div>
            <label className={labelClasses}>Email Address</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              className={inputClasses} 
              placeholder="Enter your registered email"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-medium">
                Password
              </label>
              <button 
                type="button" 
                onClick={() => alert("Password reset functionality coming soon.")}
                className="text-[#B0926A] text-[9px] uppercase tracking-wider hover:text-neutral-900 transition-colors duration-500"
              >
                Forgot?
              </button>
            </div>
            <input 
              type="password" 
              {...register("password", { required: true })} 
              className={inputClasses} 
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="p-5 text-sm font-medium bg-red-50 text-red-900 border border-red-200">
          {error}
        </div>
      )}

      <button 
        disabled={isSubmitting} 
        className="w-full bg-neutral-900 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B0926A] transition-colors duration-500 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Authenticating..." : "Secure Login"}
      </button>
    </form>
  );
}