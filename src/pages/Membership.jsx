import { useState } from "react";
import MembershipForm from "../components/MembershipForm";
import LoginForm from "../components/LoginForm";

export default function Membership() {
  const [tab, setTab] = useState("register");

  return (
    <div className="py-16 px-4">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setTab("register")}
          className={`px-6 py-2 rounded-full ${
            tab === "register" ? "bg-brand-primary text-white" : "bg-gray-200"
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setTab("login")}
          className={`px-6 py-2 rounded-full ${
            tab === "login" ? "bg-brand-primary text-white" : "bg-gray-200"
          }`}
        >
          Login
        </button>
      </div>
      {tab === "register" ? <MembershipForm /> : <LoginForm />}
    </div>
  );
}