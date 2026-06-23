import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      // AdminRoute will handle redirect if user is admin
      navigate("/admin");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" {...register("email", { required: true })} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" {...register("password", { required: true })} className="w-full border rounded p-2" />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button disabled={isSubmitting} className="w-full bg-brand-primary text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}