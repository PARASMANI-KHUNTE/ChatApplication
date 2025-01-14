import { useState } from "react";
import Navbar from "../Navbar";
import RecentChats from "./RecentChats";
import ChatSection from "./ChatSection";

const ChatScreen = () => {
  const [name, setName] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    alert(`You have entered - ${name}`);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col h-screen bg-gray-100">
        {/* Search Bar */}
        <nav className="bg-blue-800 p-4">
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-4 max-w-full px-4"
          >
            <input
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Search by name"
            />
            <button
              className="px-4 py-2 bg-white text-blue-800 rounded-lg hover:bg-blue-100 focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>

        {/* Main Chat Section */}
        <div className="flex flex-grow w-full h-full bg-white shadow-lg overflow-hidden">
          {/* Recent Chats */}
          <div className="w-2/5 bg-gray-50 border-r h-full overflow-y-auto">
            <RecentChats />
          </div>

          {/* Chat Section */}
          <div className="w-3/5 h-full">
            <ChatSection
              name="John Doe"
              profileUrl="https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
