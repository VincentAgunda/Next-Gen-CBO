import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function LoginForm() {
  const { login, currentUser, isAdmin, isApproved, loading } = useAuth();
  // Changed error state to a message object to handle both success (reset) and errors
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  // Destructured getValues to retrieve the email for password reset
  const { register, handleSubmit, getValues, formState: { isSubmitting } } = useForm();

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
    setMessage({ text: "", type: "" }); 
    try {
      await login(data.email, data.password);
    } catch (err) {
      console.error(err);
      let errorMessage = "An error occurred during login. Please try again.";
      if (["auth/invalid-credential", "auth/user-not-found", "auth/wrong-password"].includes(err.code)) {
        errorMessage = "Invalid email or password. Please check your credentials.";
      }
      setMessage({ text: errorMessage, type: "error" });
    }
  };

  // Implement Password Reset Functionality
  const handleForgotPassword = async () => {
    const email = getValues("email");
    if (!email) {
      setMessage({ text: "Please enter your registered email address first to reset your password.", type: "error" });
      return;
    }
    
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage({ text: "Password reset link sent! Please check your inbox.", type: "success" });
    } catch (err) {
      console.error(err);
      setMessage({ text: "Error sending reset link. Please ensure the email is correct.", type: "error" });
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
                onClick={handleForgotPassword}
                className="text-[#B0926A] text-[9px] uppercase tracking-wider hover:text-neutral-900 transition-colors duration-500"
              >
                Forgot?
              </button>
            </div>
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                {...register("password", { required: true })} 
                className={`${inputClasses} pr-12`} 
                placeholder="••••••••"
              />
              {/* Eye Visibility Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-[#B0926A] transition-colors duration-300"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                )}
              </button>
            </div>
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
        disabled={isSubmitting} 
        className="w-full bg-neutral-900 text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B0926A] transition-colors duration-500 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Authenticating..." : "Secure Login"}
      </button>
    </form>
  );
}