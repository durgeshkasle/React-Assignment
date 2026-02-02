import { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, FiberManualRecord } from '@mui/icons-material';

const Carousel = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '70vh', md: '90vh' },
        overflow: 'hidden',
        backgroundColor: '#000000',
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9) 100%)',
              },
            }}
          />


        </Box>
      ))}

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: { xs: 10, md: 30 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          color: '#D4AF37', // Gold arrow
          width: { xs: 44, md: 56 },
          height: { xs: 44, md: 56 },
          border: '1px solid rgba(212, 175, 55, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            borderColor: '#D4AF37',
            transform: 'translateY(-50%) scale(1.1)',
          },
        }}
      >
        <ArrowBackIos sx={{ fontSize: { xs: 18, md: 22 }, ml: 0.5 }} />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: { xs: 10, md: 30 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          color: '#D4AF37',
          width: { xs: 44, md: 56 },
          height: { xs: 44, md: 56 },
          border: '1px solid rgba(212, 175, 55, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            borderColor: '#D4AF37',
            transform: 'translateY(-50%) scale(1.1)',
          },
        }}
      >
        <ArrowForwardIos sx={{ fontSize: { xs: 18, md: 22 } }} />
      </IconButton>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: 1.5,
        }}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              padding: 0,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          >
            <FiberManualRecord
              sx={{
                fontSize: index === currentSlide ? 14 : 10,
                color: index === currentSlide ? '#D4AF37' : 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s ease',
                filter: index === currentSlide ? 'drop-shadow(0 0 8px #D4AF37)' : 'none',
              }}
            />
          </IconButton>
        ))}
      </Box>

      {/* Progress Bar */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          width: '100%',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            height: '100%',
            background: 'linear-gradient(90deg, #D4AF37 0%, #F4D03F 100%)',
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 0.5s ease',
          }}
        />
      </Box>
    </Box>
  );
};

export default Carousel;
