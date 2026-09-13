import { useAuth } from "../contexts/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard"; // adjust path to match your folder structure

// Statuses that grant full portal access
const ACTIVE_STATUSES = ["approved", "active"];
// Statuses that mean "waiting for review"
const PENDING_STATUSES = ["pending", "submitted", "under_review"];
// Statuses that mean "no access"
const BLOCKED_STATUSES = ["revoked", "rejected", "suspended", "disabled"];

export default function MemberPortalDashboard() {
  const { userData, currentUser, loading } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [writingResources, setWritingResources] = useState([]);
  const navigate = useNavigate();

  // 0. Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Security & Routing: Redirect Admins to the Admin Portal
  useEffect(() => {
    if (userData?.role === "admin") {
      navigate("/admin");
    }
  }, [userData, navigate]);

  // Normalized status helpers
  const status = (userData?.status || "").toLowerCase();
  const isActive = ACTIVE_STATUSES.includes(status);
  const isPending = PENDING_STATUSES.includes(status);
  const isBlocked = BLOCKED_STATUSES.includes(status);

  // 2. Fetch Announcements (only if the member is active)
  useEffect(() => {
    if (!currentUser || !isActive) return;

    const q = query(
      collection(db, "announcements"),
      where("target", "array-contains", "all")
    );

    const unsub = onSnapshot(q, (snap) => {
      setAnnouncements(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return unsub;
  }, [currentUser, isActive]);

  // 3. Fetch Events (only if active)
  useEffect(() => {
    if (!currentUser || !isActive) return;

    const eventsRef = collection(db, "events");

    const unsub = onSnapshot(
      eventsRef,
      (snap) => {
        const firebaseEvents = snap.docs.map((eventDoc) => ({
          id: eventDoc.id,
          ...eventDoc.data(),
        }));
        setEvents(firebaseEvents);
      },
      (err) => {
        console.error("Error loading member events:", err);
      }
    );

    return unsub;
  }, [currentUser, isActive]);

  // 4. Fetch Writing Exercises & Works (only if active)
  useEffect(() => {
    if (!currentUser || !isActive) return;

    const writingRef = collection(db, "writingResources");

    const unsub = onSnapshot(
      writingRef,
      (snap) => {
        const firebaseResources = snap.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setWritingResources(firebaseResources);
      },
      (err) => {
        console.error("Error loading writing resources:", err);
      }
    );

    return unsub;
  }, [currentUser, isActive]);

  // 5. Logout Handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/membership");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // High-end loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFC]">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-t-2 border-[#B0926A] rounded-full animate-spin"></div>
          <p className="text-neutral-400 text-[10px] tracking-[0.3em] uppercase">
            Loading Portal...
          </p>
        </div>
      </div>
    );
  }

  // Fallback if data fails to load
  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] px-6">
        <div className="text-center space-y-8 max-w-md">
          <p className="text-[#B0926A] font-light tracking-widest text-sm uppercase">
            Authentication required. Please log in.
          </p>
          <button
            onClick={() => navigate("/membership")}
            className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-500 hover:text-neutral-900 transition-all duration-300 border border-neutral-200 hover:border-[#B0926A]/50 px-8 py-3"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  // ============================================================
  // STATUS GATE
  // Revoked / Rejected / Suspended / Pending → no full portal
  // ============================================================

  if (isBlocked || (!isActive && !isPending)) {
    return <AccessDeniedScreen status={status} onLogout={handleLogout} />;
  }

  if (isPending) {
    return <PendingScreen status={status} onLogout={handleLogout} />;
  }

  // ============================================================
  // ACTIVE MEMBER — full portal
  // ============================================================

  const firstName = userData?.fullName?.split(" ")[0] || "Member";

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans selection:bg-[#B0926A]/20">
      {/* Sticky Top Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/60 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 h-20 sm:h-24 flex items-center justify-between">

          {/* NGYAR Logo - Clickable button routing to Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center hover:opacity-70 transition-opacity duration-300 outline-none"
          >
            <img
              src="/assets/navbar/nav1.png"
              alt="NGYAR Logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Session Active
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

      {/* Main Dashboard Content */}
      <main className="py-16 sm:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto space-y-16">
          {/* Massive Typography Greeting */}
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
              Overview
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight">
              Welcome, {firstName}.
            </h1>
            <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed max-w-xl">
              Access your membership credentials, structural mentorship programs,
              and the latest ngyar announcements.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column (Credentials & Quick Actions) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Membership Details Card */}
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-10 transition-all duration-500 hover:border-[#B0926A]/40 shadow-sm shadow-neutral-200/20">
                <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A] mb-8 border-b border-neutral-100 pb-4">
                  Credentials
                </h2>

                <div className="space-y-6 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-50">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">
                      Status
                    </span>
                    <span
                      className={`tracking-widest uppercase text-[11px] font-medium ${
                        isActive ? "text-emerald-700" : "text-[#B0926A]"
                      }`}
                    >
                      {status || "unknown"}
                    </span>
                  </div>

                  {userData.memberNumber && (
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-neutral-50">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">
                        Alliance ID
                      </span>
                      <span className="text-neutral-900 font-light tracking-wider">
                        {userData.memberNumber}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1 sm:mb-0">
                      Clearance Level
                    </span>
                    <span className="text-neutral-900 font-light tracking-wider capitalize">
                      {userData.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ecosystem Resources Card */}
              <div className="bg-neutral-900 p-8 sm:p-10 transition-all duration-500 shadow-xl">
                <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A] mb-6">
                  Ecosystem Resources
                </h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                  Download structural mentorship guidelines and agricultural
                  investment frameworks.
                </p>
                <button className="w-full text-center text-[10px] uppercase tracking-[0.2em] text-white border border-neutral-700 hover:border-[#B0926A] hover:bg-[#B0926A]/10 transition-all duration-300 py-4">
                  Access Document Library
                </button>
              </div>
            </div>

            {/* Right Column (Announcements) */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-12 transition-all duration-500 hover:border-[#B0926A]/40 shadow-sm shadow-neutral-200/20 h-full">
                <div className="flex justify-between items-end mb-10 border-b border-neutral-100 pb-4">
                  <h2 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B0926A]">
                    Directives & Updates
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Live Feed
                  </span>
                </div>

                {announcements.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-48 text-center">
                    <p className="text-neutral-400 text-sm font-light italic">
                      No active directives at this time.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {announcements.map((a) => (
                      <li
                        key={a.id}
                        className="text-sm font-light text-neutral-700 bg-neutral-50/80 p-6 sm:p-8 border-l-2 border-[#B0926A] leading-relaxed relative group"
                      >
                        <p>{a.message}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================
              UPCOMING EVENTS (synced from Admin EventManagement)
          ============================================================ */}
          <section className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b border-neutral-200 pb-6">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
                  Alliance Calendar
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight">
                  Upcoming Events
                </h2>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                {events.length} {events.length === 1 ? "Event" : "Events"} Listed
              </span>
            </div>

            {events.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-16 text-center">
                <p className="text-neutral-400 text-sm font-light italic">
                  No events have been published yet. Check back soon.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    venue={event.venue}
                    description={event.description}
                  />
                ))}
              </div>
            )}
          </section>

          {/* ============================================================
              WRITING EXERCISES & WORKS (synced from Admin WritingManagement)
          ============================================================ */}
          <section className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b border-neutral-200 pb-6">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
                  Craft & Composition
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight">
                  Writing Exercises & Works
                </h2>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                {writingResources.length}{" "}
                {writingResources.length === 1 ? "Resource" : "Resources"} Listed
              </span>
            </div>

            {writingResources.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-16 text-center">
                <p className="text-neutral-400 text-sm font-light italic">
                  No writing exercises or works have been published yet.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {writingResources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-8 sm:p-10 transition-all duration-500 hover:border-[#B0926A]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-6 mb-6">
                      <div className="space-y-2">
                        <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
                          {resource.type || "Exercise"}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-light text-neutral-900 tracking-tight leading-snug group-hover:text-[#B0926A] transition-colors duration-300">
                          {resource.title}
                        </h3>
                      </div>

                      {resource.deadline && (
                        <div className="text-right flex-shrink-0 max-w-[140px]">
                          <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
                            Due
                          </span>
                          <span className="mt-3 block text-[11px] md:text-xs uppercase tracking-[0.15em] text-neutral-700 font-medium leading-relaxed">
                            {resource.deadline}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="w-full h-[1px] bg-neutral-100 group-hover:bg-[#B0926A]/20 transition-colors duration-700" />

                    {resource.description && (
                      <p className="mt-6 text-sm font-light text-neutral-500 leading-relaxed">
                        {resource.description}
                      </p>
                    )}

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 group-hover:text-[#B0926A] font-semibold transition-colors duration-300">
                        Open Resource
                      </span>
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1d1d1f] group-hover:bg-[#B0926A] transition-colors duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

/* ============================================================
   Status Screens
============================================================ */

function AccessDeniedScreen({ status, onLogout }) {
  return (
    <div className="min-h-screen bg-[#FAFAFC] flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-10 sm:p-14 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
            Access Restricted
          </span>
          <h1 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
            Your access has been revoked.
          </h1>
          <p className="text-neutral-500 font-light text-sm leading-relaxed">
            Your NGYAR member access is currently marked as{" "}
            <span className="uppercase tracking-widest text-[#B0926A] font-medium">
              {status || "restricted"}
            </span>
            . If you believe this is a mistake, please contact the alliance
            administration to restore your access.
          </p>
        </div>

        <div className="pt-4 border-t border-neutral-100">
          <button
            onClick={onLogout}
            className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-500 hover:text-neutral-900 transition-all duration-300 border border-neutral-200 hover:border-[#B0926A]/50 px-8 py-3"
          >
            Secure Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

function PendingScreen({ status, onLogout }) {
  return (
    <div className="min-h-screen bg-[#FAFAFC] flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-sm border border-neutral-200/60 p-10 sm:p-14 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B0926A] font-semibold block">
            Application Under Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
            Your application is pending.
          </h1>
          <p className="text-neutral-500 font-light text-sm leading-relaxed">
            Your application is currently{" "}
            <span className="uppercase tracking-widest text-[#B0926A] font-medium">
              {status || "pending"}
            </span>
            . Once an administrator reviews and approves it, you will gain full
            access to the member portal, events, and writing resources.
          </p>
        </div>

        <div className="pt-4 border-t border-neutral-100">
          <button
            onClick={onLogout}
            className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-500 hover:text-neutral-900 transition-all duration-300 border border-neutral-200 hover:border-[#B0926A]/50 px-8 py-3"
          >
            Secure Log Out
          </button>
        </div>
      </div>
    </div>
  );
}