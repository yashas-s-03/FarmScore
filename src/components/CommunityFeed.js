import React, { useState } from "react";
import { ThumbsUp, MessageCircle, UserPlus, Share2 } from "lucide-react";

/**
 * CommunityFeed
 * - Accepts `currentUser` prop: "farmer" | "buyer" | "vet"
 * - Uses Unsplash queries for cattle/dairy images (small sizes for faster load).
 *
 * If you'd rather host images locally for top performance:
 * 1) Download images into public/assets/farms/
 * 2) replace urls like `remoteImageUrl` with '/assets/farms/file.jpg'
 */

export default function CommunityFeed({ currentUser = "farmer" }) {
  // normalize key so casing doesn't break mapping
  const userKey = String(currentUser || "farmer").toLowerCase().trim();

  // profile mapping based on user type
  const profiles = {
    farmer: {
      name: "Farmer Kumar",
      role: "Farmer",
      location: "Karnataka, IN",
      // smaller avatar image for faster load (dairy/farm related)
      avatar: "https://source.unsplash.com/100x100/?dairy,farmer,cow",
    },
    buyer: {
      name: "Anita Traders",
      role: "Buyer",
      location: "Bengaluru, IN",
      avatar: "https://source.unsplash.com/100x100/?market,business,farm",
    },
    vet: {
      name: "Dr. Meera",
      role: "Veterinarian",
      location: "Bengaluru, IN",
      avatar: "https://source.unsplash.com/100x100/?vet,veterinarian,clinic",
    },
  };

  const profile = profiles[userKey] || profiles.farmer;

  // sample posts focused on cattle/dairy farms with small image sizes for speed
  const initialPosts = [
    {
      id: 1,
      author: "Green Valley Dairy",
      content:
        "We vaccinated the herd this week and switched to organic feed — milk quality improved noticeably.",
      likes: 18,
      comments: ["Good job!", "What feed brand did you use?"],
      // Unsplash query focused on cattle/dairy cows - small size & q param for faster transfer
      image:
        "cows.png",
    },
    {
      id: 2,
      author: "Riverside Cattle Farm",
      content:
        "New calf crop this season — grazing is great thanks to recent rains. Anyone tried rotational grazing?",
      likes: 42,
      comments: ["Congrats!", "Rotational grazing worked for me."],
      image:
        "goats.png",
    },
    {
      id: 3,
      author: "Sunny Acres Dairy",
      content:
        "Looking for a buyer for 200 liters/day near maddur(mandya). MRL compliant, chilled and packed.",
      likes: 9,
      comments: ["How much per liter?", "Send contact details."],
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [connected, setConnected] = useState([]); // author names connected
  const [liked, setLiked] = useState({}); // postId -> boolean

  const toggleConnect = (author) => {
    setConnected((prev) =>
      prev.includes(author) ? prev.filter((a) => a !== author) : [...prev, author]
    );
  };

  const toggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const isLiked = liked[postId];
        return {
          ...p,
          likes: isLiked ? Math.max(0, p.likes - 1) : p.likes + 1,
        };
      })
    );
    setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Responsive action button classes
  const actionBtnBase =
    "flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition-colors";

  return (
    <div className="flex gap-6">
      {/* Left sidebar - user profile */}
      <aside className="hidden md:block w-72 sticky top-6 self-start">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
          <img
            src={profile.avatar}
            alt={`${profile.name} avatar`}
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
            width={80}
            height={80}
            loading="lazy"
          />
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {profile.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {profile.role} • {profile.location}
          </p>
          <button
            onClick={() => alert("View Profile clicked")}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          >
            View Profile
          </button>
        </div>

        {/* Quick stats (placeholder) */}
        <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-3">
          <p className="text-sm text-gray-500">Connections</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">124</p>
        </div>
      </aside>

      {/* Main feed */}
      <main className="flex-1">
        {/* header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
            🌱 FarmConnect Community
          </h1>
        </div>

        {/* create post box */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-6">
          <textarea
            placeholder={`Share something as ${profile.name}...`}
            className="w-full p-2 border rounded-md dark:bg-gray-900 dark:text-gray-200"
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              Post
            </button>
          </div>
        </div>

        {/* feed posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {post.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>

                <div>
                  <button
                    onClick={() => toggleConnect(post.author)}
                    className={`ml-2 ${actionBtnBase} ${
                      connected.includes(post.author)
                        ? "bg-gray-200 dark:bg-gray-700 text-gray-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    <UserPlus size={16} />
                    <span className="hidden sm:inline">
                      {connected.includes(post.author) ? "Connected" : "Connect"}
                    </span>
                    <span className="sm:hidden">{connected.includes(post.author) ? "✓" : "+"}</span>
                  </button>
                </div>
              </div>

              {/* content text */}
              <p className="text-gray-600 dark:text-gray-300 mt-3">{post.content}</p>

              {/* post image - give explicit width/height to reduce layout shift */}
              {post.image && (
                <div className="mt-3 w-full h-60 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={`${post.author} post`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={500}
                    style={{ display: "block" }}
                  />
                </div>
              )}

              {/* action row */}
              <div className="mt-3 flex flex-wrap gap-2 items-center text-sm text-gray-600 dark:text-gray-300 border-t pt-3">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`${actionBtnBase} ${liked[post.id] ? "text-green-600" : "hover:text-green-600"}`}
                >
                  <ThumbsUp size={16} /> <span className="ml-1">{post.likes}</span>
                </button>

                <button className={`${actionBtnBase} hover:text-blue-600`}>
                  <MessageCircle size={16} /> <span className="ml-1">{post.comments.length}</span>
                </button>

                <button className={`${actionBtnBase} hover:text-purple-600`}>
                  <Share2 size={16} /> <span className="ml-1 hidden sm:inline">Share</span>
                </button>
              </div>

              {/* comments preview */}
              <div className="mt-3 pl-3 border-l text-gray-500 dark:text-gray-400">
                {post.comments.map((c, i) => (
                  <p key={i} className="text-sm mb-1">💬 {c}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
