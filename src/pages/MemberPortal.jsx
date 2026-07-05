import { useState } from "react";
import MembershipForm from "../components/MembershipForm";
import LoginForm from "../components/LoginForm";

export default function Membership() {
  const [tab, setTab] = useState("register");

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-32 px-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-xl space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-700 font-semibold font-heading block">Join the Alliance</span>
          <h1 className="text-4xl font-heading font-light tracking-tight text-neutral-900">Ecosystem Membership Access</h1>
          <p className="text-gray-500 font-light max-w-md mx-auto text-sm leading-relaxed">
            Gain full rights under our constitution, secure structural mentorship, and access direct agricultural investment programs[cite: 301, 309].
          </p>
        </div>

        {/* High-End Toggle Bar */}
        <div className="bg-neutral-200/50 p-1.5 rounded-xl max-w-xs mx-auto flex items-center border border-gray-200/60 backdrop-blur-sm">
          <button
            onClick={() => setTab("register")}
            className={`flex-1 text-center font-heading text-xs uppercase tracking-widest py-3 transition-all duration-500 font-medium ${
              tab === "register" ? "bg-white text-black shadow-md rounded-lg" : "text-gray-500 hover:text-black"
            }`}
          >
            Register Profile
          </button>
          <button
            onClick={() => setTab("login")}
            className={`flex-1 text-center font-heading text-xs uppercase tracking-widest py-3 transition-all duration-500 font-medium ${
              tab === "login" ? "bg-white text-black shadow-md rounded-lg" : "text-gray-500 hover:text-black"
            }`}
          >
            Secure Login
          </button>
        </div>

        {/* Card Component Wrapper */}
        <div className="bg-white border border-gray-200/70 p-10 rounded-2xl shadow-xl transform-gpu transition-all duration-500">
          {tab === "register" ? (
            <div className="space-y-4">
              
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