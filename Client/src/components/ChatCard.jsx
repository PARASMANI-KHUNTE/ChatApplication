const ChatCard = ({ name, message, ProfileUrl }) => { // Destructure props from the props object
    return (
      <div className="flex items-center gap-4 border w-64 rounded-xl p-4">
        <img width={50} className="rounded-3xl " src={ProfileUrl} alt="" />
        <div className="flex flex-col">
        <h1>{name}</h1>
        <p>{message}</p>
        </div>
      </div>
    );
  }
  
export default ChatCard;
  