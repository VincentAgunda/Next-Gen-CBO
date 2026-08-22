import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config"; // Ensure this path matches your project structure

export default function ProtectedRoute({ children }) {
  const { currentUser, userData, loading } = useAuth();
  const navigate = useNavigate();

  // Logout Handler for Pending Users
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/membership");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // 1. Loading State
  if (loading || (!userData && currentUser)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFC]">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-t-2 border-[#B0926A] rounded-full animate-spin"></div>
          <p className="text-neutral-400 text-[10px] tracking-[0.3em] uppercase">Synchronizing Data...</p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated State
  if (!currentUser) {
    return <Navigate to="/membership" replace />;
  }

  // 3. Pending Approval State (Now includes Header & Logout)
  if (userData.status !== "approved") {
    return (
      <div className="min-h-screen bg-[#FAFAFC] font-sans flex flex-col selection:bg-[#B0926A]/20">
        
        {/* Sticky Top Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/60 sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 h-20 sm:h-24 flex items-center justify-between">
            
            {/* Branding / Home Button */}
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-neutral-900">
                NGYAR
              </span>
              <span className="hidden sm:inline text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light text-[#B0926A]">
                Portal
              </span>
            </button>

            {/* Logout Control */}
            <div className="flex items-center gap-6">
              <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Account Pending
              </span>
              <button 
                onClick={handleLogout}
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-neutral-900 transition-all duration-300 border border-neutral-200 hover:border-[#B0926A]/50 px-6 py-3"
              >
                Secure Log Out
              </button>
            </div>
          </div>
        </header>

        {/* Main Pending Content */}
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <span className="block text-[#B0926A] text-[11px] uppercase tracking-[0.35em] mb-4">
              Access Restricted
            </span>
            <h2 className="text-4xl font-light text-neutral-900 tracking-tight">Account Pending</h2>
            <p className="text-neutral-500 font-light leading-relaxed">
              Your membership application is currently under review by the governance board. You will receive an email once clearance is granted.
            </p>
            <div className="pt-8 border-t border-neutral-300/50">
              <button 
                onClick={() => navigate("/")} 
                className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] hover:text-[#B0926A] transition-colors duration-500"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 4. Approved State (Renders the actual Dashboard component)
  return children;
}