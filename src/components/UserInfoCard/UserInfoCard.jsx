import { Box, Typography, Avatar, Paper, Chip } from '@mui/material';
import { Person, Phone, Verified } from '@mui/icons-material';

const UserInfoCard = ({ user }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: '24px',
        background: '#111111',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'flex-start' },
        gap: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Avatar */}
      <Avatar
        sx={{
          width: { xs: 80, md: 100 },
          height: { xs: 80, md: 100 },
          background: 'linear-gradient(135deg, #D4AF37 0%, #B7950B 100%)',
          color: '#000',
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)',
        }}
      >
        {user?.name?.charAt(0)?.toUpperCase()}
      </Avatar>

      {/* User Details */}
      <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            gap: 1,
            mb: 0.5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#fff',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            {user?.name}
          </Typography>
          <Verified sx={{ color: '#D4AF37', fontSize: 24 }} />
        </Box>

        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.9rem',
            mb: 2,
          }}
        >
          Welcome back to Cars
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Chip
            icon={<Person sx={{ color: '#D4AF37 !important' }} />}
            label={user?.name}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontWeight: 500,
              px: 1,
            }}
          />
          <Chip
            icon={<Phone sx={{ color: '#F4D03F !important' }} />}
            label={user?.mobile}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontWeight: 500,
              px: 1,
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UserInfoCard;
