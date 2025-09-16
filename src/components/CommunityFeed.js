import { useState } from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

export default function CommunityFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Ramesh (Farmer, Karnataka)",
      content: "Tried a new natural remedy for poultry health. Results were great!",
      likes: 12,
      comments: ["That’s awesome!", "Can you share more details?"],
    },
    {
      id: 2,
      author: "Dr. Meera (Vet, Bangalore)",
      content: "Remember to follow FSSAI guidelines for antibiotics withdrawal period.",
      likes: 20,
      comments: ["Thanks for the reminder!", "Super useful 👍"],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">
        🌱 FarmConnect Community
      </h1>

      {/* Post Box */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-6">
        <textarea
          placeholder="Share your thoughts..."
          className="w-full p-2 border rounded-md dark:bg-gray-900 dark:text-gray-200"
        ></textarea>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Post
        </button>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-4"
        >
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {post.author}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {post.content}
          </p>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <button className="flex items-center gap-1 hover:text-green-600">
              <ThumbsUp size={16} /> {post.likes}
            </button>
            <button className="flex items-center gap-1 hover:text-blue-600">
              <MessageCircle size={16} /> {post.comments.length}
            </button>
          </div>

          {/* Comments */}
          <div className="mt-2 pl-3 border-l text-gray-500 dark:text-gray-400">
            {post.comments.map((c, i) => (
              <p key={i}>💬 {c}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
