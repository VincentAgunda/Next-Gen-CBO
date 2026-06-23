import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { currentUser, userData } = useAuth();
  if (!currentUser) return <Navigate to="/membership" replace />;
  // Wait for userData if still loading – handled in AuthContext
  if (userData && userData.status !== "approved") {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">Account Pending Approval</h2>
        <p>Your membership is being reviewed. Check back later.</p>
      </div>
    );
  }
  return children;
}