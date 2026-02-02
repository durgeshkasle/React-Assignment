import { useState, useMemo } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { DirectionsCar, SearchOff } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { carsData } from '../../data/carsData';
import { UserInfoCard, CarCard, SearchBar } from '../../components';

const DashboardContainer = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter cars based on search query
  const filteredCars = useMemo(() => {
    if (!searchQuery.trim()) {
      return carsData;
    }
    const query = searchQuery.toLowerCase().trim();
    return carsData.filter((car) =>
      car.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#000000', // Pure black
        pt: { xs: 10, md: 12 },
        pb: 6,
      }}
    >
      {/* Background Decorations */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* User Info Section */}
        <Box sx={{ mb: 5 }}>
          <UserInfoCard user={user} />
        </Box>

        {/* Cars Section Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 3,
            mb: 4,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <DirectionsCar sx={{ color: '#D4AF37', fontSize: 32 }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Car Collection
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.95rem',
              }}
            >
              Showing {filteredCars.length} of {carsData.length} vehicles
            </Typography>
          </Box>

          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
            placeholder="Search by car name..."
          />
        </Box>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <Grid container spacing={8}>
            {filteredCars.map((car) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={car.id}>
                <CarCard car={car} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              textAlign: 'center',
              py: 10,
              px: 3,
            }}
          >
            <SearchOff
              sx={{
                fontSize: 80,
                color: 'rgba(255, 255, 255, 0.2)',
                mb: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 600,
                mb: 1,
              }}
            >
              No cars found
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '1rem',
              }}
            >
              Try searching with a different car name
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default DashboardContainer;
