import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/member-portal");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold">Member Login</h2>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" {...register("email", { required: true })} className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input type="password" {...register("password", { required: true })} className="w-full border rounded p-2" />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button disabled={isSubmitting} className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600">
        Login
      </button>
    </form>
  );
}