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
      // Additional: pending members count
      const pendingSnap = await getCountFromServer(
        collection(db, "member_applications")
      );
      counts.pendingMembers = pendingSnap.data().count;
      setStats(counts);
    };
    fetchCounts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard icon={<People />} label="Total Members" value={stats.members || 0} color="bg-blue-500" />
        <StatCard icon={<People />} label="Pending Approvals" value={stats.pendingMembers || 0} color="bg-yellow-500" />
        <StatCard icon={<Event />} label="Events" value={stats.events || 0} color="bg-green-500" />
        <StatCard icon={<Biotech />} label="Research Pubs" value={stats.research_publications || 0} color="bg-purple-500" />
        <StatCard icon={<Handshake />} label="Partners" value={stats.partners || 0} color="bg-indigo-500" />
        <StatCard icon={<VolunteerActivism />} label="Volunteers" value={stats.volunteers || 0} color="bg-red-500" />
      </div>
    </div>
  );
}