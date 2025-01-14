import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUserId } from './redux/userSlice';

// Set the base URL for your API
const BASE_URL = 'http://localhost:5000';





const ForgotPassword = () => {
    const [email , setEmail] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handelSubmitBtn = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/api/auth/forgot-password`)
            if(response.status === 404){
                alert(`${response.data.message}`)
            }else if ( response.status === 200){
                
                const token = response.data.token;

    // Dispatch action to store token and user ID
    dispatch(setUserId({ token }));
             
                alert(`Otp Sent to ${email}`)
                navigate('/otp')

                
            }
        } catch (error) {
            alert(`Error ${error}`)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Forgot Password</h1>
            <form onSubmit={handelSubmitBtn} className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
