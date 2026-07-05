import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { currentUser, userData, loading } = useAuth();

  // 1. Wait for the initial global auth check to finish
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <p className="text-[#777777] font-sans text-xs uppercase tracking-[0.15em] font-medium">
          Verifying session...
        </p>
      </div>
    );
  }

  // 2. If no user is logged in, kick them back to the login page
  if (!currentUser) {
    return <Navigate to="/membership" replace />;
  }

  // 3. The Race Condition Fix: Logged in, but Firestore data is still fetching
  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
        <p className="text-[#777777] font-sans text-xs uppercase tracking-[0.15em] font-medium">
          Loading profile...
        </p>
      </div>
    );
  }

  // 4. Logged in and data loaded, but account is pending/rejected
  if (userData.status !== "approved") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F7] p-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md w-full text-center">
          <span className="block text-[#d2b79b] font-heading text-[11px] uppercase tracking-[0.25em] mb-4 border-b border-gray-100 pb-3">
            Access Restricted
          </span>
          <h2 className="text-xl font-bold text-[#333333] mb-2">Account Pending</h2>
          <p className="text-sm text-[#777777]">
            Your membership is currently being reviewed by our team. Please check back later once your account is approved.
          </p>
        </div>
      </div>
    );
  }

  // 5. Fully authenticated and approved! Render the dashboard.
  return children;
}