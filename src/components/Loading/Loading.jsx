import { Box } from '@mui/material';

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        background: '#222',
        flexDirection: 'column',
        rowGap: 3,
      }}
      className='loading'
    >
      <img
        src='/images/logo.png'
        alt='LOADING'
        width={220}
        style={{ borderRadius: '50%' }}
        className='heartbeat-img'
      />
    </Box>
  );
};
