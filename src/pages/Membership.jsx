import { useState } from "react";
import MembershipForm from "../components/MembershipForm";
import LoginForm from "../components/LoginForm";

export default function Membership() {
  const [tab, setTab] = useState("register");

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-32 px-6 flex flex-col justify-center items-center font-sans">
      <div className="w-full max-w-2xl space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-emerald-700 font-semibold font-heading block">
            Join the Alliance
          </span>
          <h1 className="text-4xl font-heading font-light tracking-tight text-[#333333]">
            Ecosystem Membership Access
          </h1>
          <p className="text-[#777777] font-light max-w-md mx-auto text-sm leading-relaxed">
            Gain full rights under our constitution, secure structural mentorship, and access direct agricultural investment programs.
          </p>
        </div>

        {/* High-End Toggle Bar */}
        <div className="bg-[#F5F5F7] p-1.5 rounded-xl max-w-sm mx-auto flex items-center border border-gray-200/60">
          <button
            onClick={() => setTab("register")}
            className={`flex-1 text-center font-heading text-[11px] uppercase tracking-widest py-3 transition-all duration-300 font-medium ${
              tab === "register" 
                ? "bg-white text-[#333333] shadow-sm rounded-lg" 
                : "text-[#777777] hover:text-[#333333]"
            }`}
          >
            Register Profile
          </button>
          <button
            onClick={() => setTab("login")}
            className={`flex-1 text-center font-heading text-[11px] uppercase tracking-widest py-3 transition-all duration-300 font-medium ${
              tab === "login" 
                ? "bg-white text-[#333333] shadow-sm rounded-lg" 
                : "text-[#777777] hover:text-[#333333]"
            }`}
          >
            Secure Login
          </button>
        </div>

        {/* Card Component Wrapper */}
        <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform-gpu transition-all duration-500">
          {tab === "register" ? (
            <div className="space-y-6">
              
              <MembershipForm />
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}