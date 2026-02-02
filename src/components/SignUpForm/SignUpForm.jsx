import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import { Person, Phone, HowToReg, DirectionsCar } from '@mui/icons-material';

const SignUpForm = ({
  formData,
  errors,
  isLoading,
  onInputChange,
  onSubmit,
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000', // Pure black
        padding: 3,
        pt: 12,
      }}
    >
      {/* Decorative Elements */}
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
            top: '10%',
            left: '5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </Box>

      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 480,
          p: { xs: 4, sm: 6 },
          borderRadius: '24px',
          background: '#111111', // Distinct card background
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.3)', // Stronger gold border
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B7950B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 10px 40px rgba(212, 175, 55, 0.2)',
            }}
          >
            <DirectionsCar sx={{ fontSize: 40, color: '#000' }} />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#D4AF37', // Gold Header
              mb: 1,
              letterSpacing: '-0.5px',
            }}
          >
            Create Account
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1rem',
            }}
          >
            Join Cars and explore our car collection
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={onSubmit} noValidate>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={onInputChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: '#D4AF37' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(212, 175, 55, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D4AF37',
                  borderWidth: 2,
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.6)',
                '&.Mui-focused': {
                  color: '#D4AF37',
                },
              },
              '& .MuiOutlinedInput-input': {
                color: '#fff',
                py: 1.8,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.4)',
                  opacity: 1,
                },
              },
              '& .MuiFormHelperText-root': {
                color: '#ff6363',
                ml: 0,
                mt: 1,
              },
            }}
          />

          <TextField
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile Number"
            placeholder="Enter your 10-digit mobile number"
            value={formData.mobile}
            onChange={onInputChange}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone sx={{ color: '#D4AF37' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 4,
              '& .MuiOutlinedInput-root': {
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(212, 175, 55, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#D4AF37',
                  borderWidth: 2,
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.6)',
                '&.Mui-focused': {
                  color: '#D4AF37',
                },
              },
              '& .MuiOutlinedInput-input': {
                color: '#fff',
                py: 1.8,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.4)',
                  opacity: 1,
                },
              },
              '& .MuiFormHelperText-root': {
                color: '#ff6363',
                ml: 0,
                mt: 1,
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            startIcon={isLoading ? null : <HowToReg />}
            sx={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B7950B 100%)',
              color: '#000',
              fontWeight: 700,
              fontSize: '1.1rem',
              py: 1.8,
              borderRadius: '30px', // Pill shape
              textTransform: 'none',
              boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
                boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)',
                transform: 'translateY(-2px)',
              },
              '&:disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            {isLoading ? (
              <CircularProgress size={26} sx={{ color: '#000' }} />
            ) : (
              'Sign Up'
            )}
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          sx={{
            textAlign: 'center',
            mt: 4,
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.85rem',
          }}
        >
          By signing up, you agree to our Terms & Privacy Policy
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUpForm;
