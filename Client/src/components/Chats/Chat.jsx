import  { useState, useEffect } from 'react';
import axios from 'axios';
import socket from '../../services/socket';

const Chat = () => {
    const [userId, setUserId] = useState('');
    const [receiverId, setReceiverId] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for private messages
        socket.on('private_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => socket.off('private_message'); // Cleanup
    }, []);

    const joinRoom = () => {
        if (userId) {
            socket.emit('join', userId);
            alert(`Joined as ${userId}`);
        }
    };

    const sendMessage = async () => {
        if (userId && receiverId && message) {
            const newMessage = { sender: userId, receiver: receiverId, content: message };

            // Send message via socket
            socket.emit('private_message', newMessage);

            // Add to UI immediately
            setMessages((prevMessages) => [...prevMessages, { ...newMessage, sender: 'You' }]);

            // Clear the input
            setMessage('');

            // Save the message to the database
            try {
                await axios.post('http://localhost:3000/api/messages', newMessage);
            } catch (err) {
                console.error('Error saving message:', err);
            }
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold mb-4">Chat Application</h1>

            <div className="mb-4">
                <input
                    type="text"
                    className="border p-2 w-full rounded"
                    placeholder="Your ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                    onClick={joinRoom}
                >
                    Join
                </button>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    className="border p-2 w-full rounded"
                    placeholder="Receiver ID"
                    value={receiverId}
                    onChange={(e) => setReceiverId(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    className="border p-2 w-full rounded"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>

            <div className="border p-4 rounded h-64 overflow-y-scroll">
                <h2 className="font-bold mb-2">Messages</h2>
                {messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;
