import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  DirectionsCar,
  Person,
  Logout,
  Menu as MenuIcon,
  Home,
  Dashboard as DashboardIcon,
  PersonAdd,
} from '@mui/icons-material';

const Navbar = ({
  isAuthenticated,
  user,
  onSignUpClick,
  onLogout,
  onHomeClick,
  onDashboardClick,
  anchorEl,
  mobileOpen,
  onMenuOpen,
  onMenuClose,
  onMobileToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        background: '#111111', // Dark background for drawer
        borderLeft: '1px solid rgba(212, 175, 55, 0.2)',
      }}
    >
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DirectionsCar sx={{ color: '#D4AF37', fontSize: 28 }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#D4AF37', // Gold text
            }}
          >
            Cars
          </Typography>
        </Box>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => {
              item.onClick();
              onMobileToggle();
            }}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                '& .MuiListItemIcon-root': { color: '#D4AF37' },
              },
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{ color: '#fff', '& .MuiTypography-root': { fontWeight: 500 } }}
            />
          </ListItem>
        ))}
        {!isAuthenticated && (
          <ListItem
            button
            onClick={() => {
              onSignUpClick();
              onMobileToggle();
            }}
            sx={{
              mx: 1,
              borderRadius: 2,
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#D4AF37', minWidth: 40 }}>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText
              primary="Sign Up"
              sx={{ color: '#D4AF37', '& .MuiTypography-root': { fontWeight: 600 } }}
            />
          </ListItem>
        )}
        {isAuthenticated && (
          <ListItem
            button
            onClick={() => {
              onLogout();
              onMobileToggle();
            }}
            sx={{
              mx: 1,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 99, 99, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#ff6363', minWidth: 40 }}>
              <Logout />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{ color: '#ff6363', '& .MuiTypography-root': { fontWeight: 500 } }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'rgba(0, 0, 0, 0.95)', // Pure black background
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'scale(1.02)' },
              }}
              onClick={onHomeClick}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',
                  border: '1px solid #D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)',
                }}
              >
                <DirectionsCar sx={{ color: '#D4AF37', fontSize: 24 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#D4AF37', // Gold text
                  letterSpacing: '-0.5px',
                }}
              >
                Cars
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={item.onClick}
                    startIcon={item.icon}
                    sx={{
                      color: item.label === 'Home' ? '#D4AF37' : '#fff', // Highlight Home
                      px: 2.5,
                      py: 1,
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      borderBottom: item.label === 'Home' ? '2px solid #D4AF37' : 'none',
                      borderRadius: item.label === 'Home' ? '0' : '30px',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#D4AF37',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Auth Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!isMobile && (
                <>
                  {isAuthenticated ? (
                    <>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          padding: '6px 12px',
                          borderRadius: '50px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          background: 'rgba(255, 255, 255, 0.02)',
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            background: '#D4AF37',
                            color: '#000',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                          }}
                        >
                          {user?.name?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        <Typography
                          sx={{
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            display: { xs: 'none', sm: 'block' },
                          }}
                        >
                          {user?.name}
                        </Typography>
                        <IconButton
                          onClick={onLogout}
                          size="small"
                          sx={{
                            ml: 0.5,
                            color: '#ff6363',
                            transition: 'all 0.2s',
                            '&:hover': {
                              background: 'rgba(255, 99, 99, 0.1)',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <Logout fontSize="small" />
                        </IconButton>
                      </Box>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={onSignUpClick}
                      startIcon={<PersonAdd />}
                      sx={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #B7950B 100%)',
                        color: '#000',
                        fontWeight: 700,
                        px: 3,
                        py: 1,
                        borderRadius: '30px',
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
                          boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  )}
                </>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={onMobileToggle}
                  sx={{
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={onMobileToggle}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
