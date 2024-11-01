

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel({
  initialProgress = 10,
  interval = 800,
  size = 40,
  color = '#30b94d',      
  textColor = '#f9f9f9', 
}) {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress 
        variant="determinate" 
        value={progress} 
        size={size} 
        sx={{ color: color,  }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: textColor }}>
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  initialProgress: PropTypes.number,
  interval: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default CircularProgressWithLabel;


