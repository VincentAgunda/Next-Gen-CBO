import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { currentUser, isAdmin } = useAuth();
  if (!currentUser || !isAdmin) return <Navigate to="/admin-login" replace />;
  return children;
}