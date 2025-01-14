const ChatCard = ({ name, message, ProfileUrl }) => {
    return (
      <div className="flex items-center bg-white gap-4 border border-gray-200 shadow-lg rounded-lg p-4 hover:bg-gray-50 transition duration-200">
        {/* Profile Picture */}
        <img
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
          src={ProfileUrl}
          alt={`${name}'s profile`}
        />
        
        {/* Text Content */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-600 truncate">{message}</p>
        </div>
      </div>
    );
  };
  
  export default ChatCard;
  