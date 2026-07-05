import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // Destructure isAdmin, isApproved, and loading from context
  const { login, currentUser, isAdmin, isApproved, loading } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  // Watch for auth state changes and navigate dynamically
  useEffect(() => {
    // Only navigate if we are no longer loading
    if (!loading && currentUser) {
      if (isAdmin && isApproved) {
        navigate("/admin");
      } else {
        navigate("/member-portal");
      }
    }
  }, [currentUser, isAdmin, isApproved, loading, navigate]);

  const onSubmit = async (data) => {
    setError(""); // Clear any previous errors
    
    try {
      await login(data.email, data.password);
      // Navigation is now handled smoothly by the useEffect above
    } catch (err) {
      console.error(err);
      
      // Friendly Error Handling
      let errorMessage = "An error occurred during login. Please try again.";
      if (
        err.code === "auth/invalid-credential" || 
        err.code === "auth/user-not-found" || 
        err.code === "auth/wrong-password"
      ) {
        errorMessage = "Invalid email or password. Please check your credentials.";
      } else if (err.code === "auth/too-many-requests") {
        errorMessage = "Too many failed attempts. Please try again later.";
      }
      
      setError(errorMessage);
    }
  };

  // Reusable theme classes
  const inputClasses = "w-full bg-[#F5F5F7] border border-transparent focus:border-[#333333] focus:bg-white text-[#333333] text-sm px-4 py-3 rounded-md outline-none transition-all duration-300";
  const labelClasses = "block text-[#777777] font-sans text-[10px] uppercase tracking-[0.15em] mb-2 font-medium";
  const sectionHeaderClasses = "block text-[#d2b79b] font-heading text-[11px] uppercase tracking-[0.25em] mb-6 border-b border-gray-100 pb-3";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      <div>
        <span className={sectionHeaderClasses}>Account Access</span>
        <div className="space-y-5">
          
          {/* Email Field */}
          <div>
            <label className={labelClasses}>Email Address</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              className={inputClasses} 
              placeholder="Enter your registered email"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[#777777] font-sans text-[10px] uppercase tracking-[0.15em] font-medium">
                Password
              </label>
              <button 
                type="button" 
                onClick={() => alert("Password reset functionality coming soon.")}
                className="text-[#d2b79b] text-[10px] uppercase tracking-wider hover:text-[#333333] transition-colors"
              >
                Forgot?
              </button>
            </div>
            <input 
              type="password" 
              {...register("password", { required: true })} 
              className={inputClasses} 
              placeholder="Enter your password"
            />
          </div>

        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-md text-sm font-medium bg-red-50 text-red-800 border-l-4 border-red-500">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button 
        disabled={isSubmitting} 
        className="w-full rounded-md font-heading border border-[#333333] bg-[#333333] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#333333] transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Authenticating..." : "Secure Login"}
      </button>

    </form>
  );
}