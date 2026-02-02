import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar/Navbar';

const NavbarContainer = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate('/');
  };

  const handleHomeClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
    setAnchorEl(null);
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Navbar
      isAuthenticated={isAuthenticated}
      user={user}
      onSignUpClick={handleSignUpClick}
      onLogout={handleLogout}
      onHomeClick={handleHomeClick}
      onDashboardClick={handleDashboardClick}
      anchorEl={anchorEl}
      mobileOpen={mobileOpen}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      onMobileToggle={handleMobileToggle}
    />
  );
};

export default NavbarContainer;
