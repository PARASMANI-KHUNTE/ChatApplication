import { useState } from "react";
import ChatCard from "./ChatCard";

const RecentChats = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const chats = [
    { name: "John Doe", message: "Hello, how are you?", ProfileUrl: "https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg" },
    { name: "Jane Smith", message: "Let's catch up soon!", ProfileUrl: "https://i.pinimg.com/736x/78/a2/b2/78a2b216dc8e4979009e8766cb6e77bd.jpg" },
    { name: "Sam Wilson", message: "Got the files, thanks!", ProfileUrl: "https://i.pinimg.com/736x/48/0a/8c/480a8ce1aa4d854f5ac1e3a8cda857e6.jpg" },
    { name: "Chris Evans", message: "Meeting at 3 PM?", ProfileUrl: "https://i.pinimg.com/736x/b0/75/ce/b075cece62152b228546791e0ac13892.jpg" },
    { name: "Tony Stark", message: "The project is amazing!", ProfileUrl: "https://i.pinimg.com/736x/0b/6e/40/0b6e4079a621b67d659cf4336376d7dc.jpg" },
    { name: "Natasha Romanoff", message: "Call me when you're free.", ProfileUrl: "https://i.pinimg.com/736x/cc/e4/94/cce49415aa78b3762b4002849dbc5c4b.jpg" },
    { name: "Bruce Banner", message: "See you tomorrow.", ProfileUrl: "https://i.pinimg.com/736x/15/62/dd/1562dd7b35ec0a53ce105a451ea931d9.jpg" },
  ];

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full p-4 bg-blue-50 rounded-lg shadow-lg">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search recent chats..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Recent Chats List */}
      <div className="flex flex-col gap-3 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat, index) => (
            <ChatCard
              key={index}
              name={chat.name}
              message={chat.message}
              ProfileUrl={chat.ProfileUrl}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No chats found</p>
        )}
      </div>
    </div>
  );
};

export default RecentChats;
