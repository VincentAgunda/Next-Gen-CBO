import { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../firebase/config";
import StatCard from "../../components/StatCard";
import { People, Event, Biotech, Handshake, VolunteerActivism } from "@mui/icons-material";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      const collections = ["members", "events", "research_publications", "partners", "volunteers"];
      const counts = {};
      for (const col of collections) {
        const snap = await getCountFromServer(collection(db, col));
        counts[col] = snap.data().count;
      }
      
      const pendingSnap = await getCountFromServer(
        collection(db, "member_applications")
      );
      counts.pendingMembers = pendingSnap.data().count;
      setStats(counts);
    };
    fetchCounts();
  }, []);

  return (
    <div className="space-y-8 font-sans">
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d2b79b] font-semibold font-heading block">
          Overview
        </span>
        <h1 className="text-3xl font-heading font-light tracking-tight text-[#333333]">
          System Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard icon={<People />} label="Total Members" value={stats.members || 0} color="bg-[#333333]" />
        <StatCard icon={<People />} label="Pending Approvals" value={stats.pendingMembers || 0} color="bg-[#d2b79b]" />
        <StatCard icon={<Event />} label="Events" value={stats.events || 0} color="bg-stone-600" />
        <StatCard icon={<Biotech />} label="Research Pubs" value={stats.research_publications || 0} color="bg-zinc-700" />
        <StatCard icon={<Handshake />} label="Partners" value={stats.partners || 0} color="bg-neutral-600" />
        <StatCard icon={<VolunteerActivism />} label="Volunteers" value={stats.volunteers || 0} color="bg-gray-800" />
      </div>
    </div>
  );
}