import { gallery } from "../data/gallery";
import SectionHeader from "../components/SectionHeader";

export default function Gallery() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="Gallery" subtitle="Moments from our activities." />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((img, idx) => (
          <img key={idx} src={img} alt="Gallery" className="w-full h-48 object-cover rounded-xl shadow" />
        ))}
      </div>
    </div>
  );
}