import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingCommunityButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/community")}
      className="fixed bottom-20 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
    >
      <Users size={24} />
    </button>
  );
}
