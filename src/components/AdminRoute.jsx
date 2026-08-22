import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { currentUser, isAdmin, isApproved, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-t-2 border-[#B0926A] rounded-full animate-spin"></div>
          <p className="text-neutral-400 text-[10px] tracking-[0.3em] uppercase">Verifying Clearance...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) return <Navigate to="/admin-login" replace />;
  
  if (!isAdmin || !isApproved) return <Navigate to="/member-portal" replace />;
  
  return children;
}