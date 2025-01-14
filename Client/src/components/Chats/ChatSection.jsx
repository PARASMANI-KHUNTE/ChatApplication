const ChatSection = ({ name, profileUrl }) => {
    return (
      <div className="flex flex-col bg-gray-50 h-full">
        {/* Header */}
        <nav className="flex items-center gap-4 p-4 border-b bg-white shadow-sm">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={profileUrl}
            alt={`${name}'s profile`}
          />
          <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
        </nav>
  
        {/* Chat Messages */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-100 space-y-4">
          {/* Message from others */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={profileUrl}
              alt="User"
            />
            <div className="bg-white px-4 py-2 rounded-xl shadow text-sm text-gray-800 max-w-xs">
              Hi there! How are you doing today?
            </div>
          </div>
  
          {/* Message from yourself */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow text-sm max-w-xs">
              I’m doing well, thanks! How about you?
            </div>
          </div>
        </div>
  
        {/* Message Input */}
        <div className="flex items-center gap-2 p-4 bg-white border-t">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="button"
            className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
          >
            📎
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default ChatSection;
  