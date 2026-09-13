import { useCallback, useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../firebase/config";
import StatCard from "../../components/StatCard";
import {
  People,
  Event,
  Biotech,
  Handshake,
  VolunteerActivism,
  EditNote,
  Refresh,
} from "@mui/icons-material";

// Central config so adding a collection later is a one-liner
const COUNTED_COLLECTIONS = [
  { key: "members", collectionName: "members" },
  { key: "events", collectionName: "events" },
  { key: "writingResources", collectionName: "writingResources" },
  { key: "research_publications", collectionName: "research_publications" },
  { key: "partners", collectionName: "partners" },
  { key: "volunteers", collectionName: "volunteers" },
];

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const fetchCounts = useCallback(async () => {
    setError("");
    try {
      const counts = {};

      // Fetch all counts in parallel for speed
      await Promise.all([
        ...COUNTED_COLLECTIONS.map(async ({ key, collectionName }) => {
          const snap = await getCountFromServer(collection(db, collectionName));
          counts[key] = snap.data().count;
        }),
        (async () => {
          const pendingSnap = await getCountFromServer(
            collection(db, "member_applications")
          );
          counts.pendingMembers = pendingSnap.data().count;
        })(),
      ]);

      setStats(counts);
    } catch (err) {
      console.error("Failed to load dashboard stats:", err);
      setError(
        err?.message ||
          "Unable to load dashboard statistics. Check Firestore rules and try again."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchCounts();
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
            Overview
          </span>
          <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
            System Dashboard
          </h1>
        </div>

        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-md border border-gray-200 text-[10px] uppercase tracking-[0.2em] text-[#777777] hover:text-[#333333] hover:border-[#d2b79b] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Refresh
            fontSize="small"
            className={refreshing ? "animate-spin" : ""}
          />
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 px-5 py-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Stat Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<People />}
          label="Total Members"
          value={stats.members}
          loading={loading}
          color="bg-[#333333]"
        />
        <StatCard
          icon={<People />}
          label="Pending Approvals"
          value={stats.pendingMembers}
          loading={loading}
          color="bg-[#d2b79b]"
        />
        <StatCard
          icon={<Event />}
          label="Events"
          value={stats.events}
          loading={loading}
          color="bg-stone-600"
        />
        <StatCard
          icon={<EditNote />}
          label="Writing"
          value={stats.writingResources}
          loading={loading}
          color="bg-amber-700"
        />
        <StatCard
          icon={<Biotech />}
          label="Research Pubs"
          value={stats.research_publications}
          loading={loading}
          color="bg-zinc-700"
        />
        <StatCard
          icon={<Handshake />}
          label="Partners"
          value={stats.partners}
          loading={loading}
          color="bg-neutral-600"
        />
        <StatCard
          icon={<VolunteerActivism />}
          label="Volunteers"
          value={stats.volunteers}
          loading={loading}
          color="bg-gray-800"
        />
      </div>
    </div>
  );
}