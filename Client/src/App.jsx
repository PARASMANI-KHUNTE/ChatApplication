
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPassword from './components/ForgotPassword';
import OtpPage from './components/OtpPage';
import UserProfile from './components/UserProfile';
import ResetPassword from './components/ResetPassword';
import ChatScreen from './components/Chats/ChatScreen';
import Chat from './components/Chats/Chat';
const App = () => {
    return (
        <Router>
            <div className="bg-gray-100 min-h-screen">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/otp" element={<OtpPage />} />
                    <Route path="/home" element={<UserProfile />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/chatscreen" element={<ChatScreen />} />
                    <Route path="/Chat" element={<Chat />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;