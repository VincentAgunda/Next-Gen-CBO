import { useState } from "react";
import MembershipForm from "../components/MembershipForm";
import LoginForm from "../components/LoginForm";

export default function Membership() {
  const [tab, setTab] = useState("register");

  return (
    <div className="bg-transparent min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1400px] mx-auto space-y-16">
        
        {/* Massive Typography Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
            Join the NGYAR
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight transition-all duration-500">
            Ecosystem Access
          </h1>
          <p className="text-neutral-500 font-light max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Gain full rights under our constitution, secure structural mentorship, and access direct agricultural investment programs.
          </p>
        </div>

        {/* High-End Toggle Bar */}
        <div className="bg-neutral-100/50 p-1.5 max-w-md mx-auto flex items-center border border-neutral-200/60 transition-all duration-500">
          <button
            onClick={() => setTab("register")}
            className={`flex-1 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.2em] py-4 transition-all duration-500 ease-out font-medium ${
              tab === "register" 
                ? "bg-white text-neutral-900 shadow-sm border border-neutral-200/50" 
                : "text-neutral-400 hover:text-[#B0926A]"
            }`}
          >
            Register Profile
          </button>
          <button
            onClick={() => setTab("login")}
            className={`flex-1 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.2em] py-4 transition-all duration-500 ease-out font-medium ${
              tab === "login" 
                ? "bg-white text-neutral-900 shadow-sm border border-neutral-200/50" 
                : "text-neutral-400 hover:text-[#B0926A]"
            }`}
          >
            Secure Login
          </button>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto w-full bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-14 shadow-2xl shadow-neutral-200/20 transform-gpu transition-all duration-700 ease-out">
          {tab === "register" ? <MembershipForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
}