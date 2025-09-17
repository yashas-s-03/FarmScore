import { Linkedin } from "lucide-react";

const FloatingButton = ({ onOpenCommunity }) => {
  return (
    <button
      onClick={onOpenCommunity}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-transform hover:scale-110 z-50"
    >
      <Linkedin size={28} />
    </button>
  );
};

export default FloatingButton;
