import Logout from './Logout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const UserProfile = () => {
    const navigate = useNavigate()
  const { name, email, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <p>Email: {email}</p>
      < Logout />
    </div>
  );
};

export default UserProfile;
