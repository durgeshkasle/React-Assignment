import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { DashboardContainer } from '../../containers';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to signup if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signup');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return <DashboardContainer />;
};

export default Dashboard;
