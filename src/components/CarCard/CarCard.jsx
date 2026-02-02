import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { CalendarMonth, Category } from '@mui/icons-material';

const CarCard = ({ car }) => {
  return (
    <Card
      sx={{
        width: '100%',
        minWidth: '540px',
        height: '100%',
        borderRadius: '20px',
        background: '#111111', // Distinct card background
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 60px rgba(212, 175, 55, 0.15)',
          borderColor: 'rgba(212, 175, 55, 0.3)',
          '& .car-image': {
            transform: 'scale(1.08)',
          },
          '& .car-overlay': {
            opacity: 1,
          },
        },
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height={200}
          image={car.image}
          alt={car.name}
          className="car-image"
          sx={{
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            objectFit: 'cover',
          }}
        />
        {/* Overlay */}
        <Box
          className="car-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.1) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* Brand Badge */}
        <Chip
          label={car.brand}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        {/* Price Badge */}

      </Box>

      <CardContent sx={{ p: 3 }}>
        {/* Car Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#fff',
            mb: 0.5,
            fontSize: '1.25rem',
          }}
        >
          {car.name}
        </Typography>

        {/* Model */}
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            mb: 2,
          }}
        >
          {car.model}
        </Typography>

        {/* Details */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CalendarMonth
              sx={{ fontSize: 18, color: '#D4AF37' }}
            />
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.85rem',
              }}
            >
              {car.year}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Category
              sx={{ fontSize: 18, color: '#F4D03F' }}
            />
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.85rem',
              }}
            >
              {car.type}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;
