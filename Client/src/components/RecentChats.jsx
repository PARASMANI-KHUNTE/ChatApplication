import ChatCard from "./ChatCard"
const RecentChats = () => {
  return (
    <>
    <div className="p-4 border w-80 flex flex-col gap-3">
    <ChatCard 
        name="John Doe" 
        message="Hello, how are you?" 
        ProfileUrl="https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg" 
      />
    <ChatCard 
        name="John Doe" 
        message="Hello, how are you?" 
        ProfileUrl="https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg" 
      />
    <ChatCard 
        name="John Doe" 
        message="Hello, how are you?" 
        ProfileUrl="https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg" 
      />
    <ChatCard 
        name="John Doe" 
        message="Hello, how are you?" 
        ProfileUrl="https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg" 
      />
    <ChatCard 
        name="John Doe" 
        message="Hello, how are you?" 
        ProfileUrl="https://i.pinimg.com/736x/52/73/13/527313b77d418427366203d4bd37fd16.jpg" 
      />
    </div>
    
    </>
  )
}

export default RecentChats