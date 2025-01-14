import { useState } from "react"
import Navbar from "./Navbar"
import RecentChats from "./RecentChats"
const ChatScreen = () => {
    const [name , setName] = useState('')
    const handelSearch = async (e) =>{
        e.preventDefault();
        alert(`You Have entered - ${name}`)
    }
  return (
    <>
    < Navbar />
    <div className=" h-screen  bg-white rounded shadow-md">
        <nav>
            <form onSubmit={handelSearch} action="" className="w-full flex bg-blue-300 justify-center p-4 gap-3">
                <input className="p-2 rounded" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
            <button className="border rounded-md p-2 hover:bg-blue-600  hover:text-white" type="submit">Search</button>
            </form>
        </nav>
        <div>
            <div>
                <RecentChats />
            </div>
            <div>

            </div>
        </div>

    </div>
    </>
    
  )
}

export default ChatScreen