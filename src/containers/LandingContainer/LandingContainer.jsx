import { Box } from '@mui/material';
import { Carousel } from '../../components';
import { carouselSlides } from '../../data/carouselData';

const LandingContainer = () => {
  return (
    <Box sx={{ pt: { xs: 7, md: 8 } }}>
      <Carousel slides={carouselSlides} autoPlayInterval={5000} />
      

    </Box>
  );
};

export default LandingContainer;
