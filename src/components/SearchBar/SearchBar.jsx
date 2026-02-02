import { Box, InputBase, IconButton, Paper } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const SearchBar = ({ value, onChange, onClear, placeholder = 'Search...' }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 500,
        borderRadius: '16px',
        background: '#111111',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        px: 2,
        py: 0.5,
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(212, 175, 55, 0.3)',
          background: 'rgba(255, 255, 255, 0.05)',
        },
        '&:focus-within': {
          borderColor: '#D4AF37',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
          background: 'rgba(255, 255, 255, 0.05)',
        },
      }}
    >
      <Search
        sx={{
          color: 'rgba(255, 255, 255, 0.5)',
          mr: 1.5,
          transition: 'color 0.3s ease',
          '.MuiPaper-root:focus-within &': {
            color: '#D4AF37',
          },
        }}
      />
      <InputBase
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id="search-input"
        sx={{
          py: 1,
          color: '#fff',
          fontSize: '1rem',
          '& input::placeholder': {
            color: 'rgba(255, 255, 255, 0.4)',
            opacity: 1,
          },
        }}
      />
      {value && (
        <IconButton
          size="small"
          onClick={onClear}
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: '#ff6363',
              backgroundColor: 'rgba(255, 99, 99, 0.1)',
            },
          }}
        >
          <Clear fontSize="small" />
        </IconButton>
      )}
    </Paper>
  );
};

export default SearchBar;
