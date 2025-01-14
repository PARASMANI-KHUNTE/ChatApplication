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
    <div className='p-4 border flex flex-col  items-center gap-3'>
      <h1 className='font-bold'>Welcome, <span className='text-blue-500'>{name}</span></h1>
      <p className='font-bold'>Email: <span className='text-blue-500'>{email}</span> </p>
      < Logout />
    </div>
  );
};

export default UserProfile;
