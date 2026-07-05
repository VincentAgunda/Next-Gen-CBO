import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { currentUser, isAdmin, isApproved, loading } = useAuth();
  
  // Wait for Firestore data to finish loading before making routing decisions
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Verifying access...</p>
      </div>
    );
  }

  if (!currentUser) return <Navigate to="/admin-login" replace />;
  
  // Enforce both Admin role and Approved status
  if (!isAdmin || !isApproved) return <Navigate to="/member-portal" replace />;
  
  return children;
}