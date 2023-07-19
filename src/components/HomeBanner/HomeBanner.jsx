import { Box, Button, Typography } from '@mui/material';
import { Overlay } from '../Overlay';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
import { useRef } from 'react';

export const HomeBanner = ({ setShow }) => {
  const handleHide = () => {
    ref.current.style.top = '-150%';
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => {
      ref.current.style.display = 'none';
      setShow('false');
      localStorage.setItem('@HomeBanner', 'false');
    }, 0.6 * 1000);
  };
  const ref = useRef(null);
  return (
    <Box
      ref={ref}
      sx={{
        backgroundImage: "url('images/banner.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        position: 'fixed',
        zIndex: 99,
        top: 0,
        left: 0,
        transition: 'all 0.6s',
      }}
    >
      <Overlay />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { md: 'center', sm: 'flex-start', xs: 'flex-start' },
          textAlign: { md: 'center', sm: 'left', xs: 'left' },
          padding: '2rem',
          //   mb: 3,
          //   mt: 3,
        }}
      >
        <Box
          sx={{
            color: '#fff',
            fontSize: 32,
            fontFamily: 'monospace',
            fontWeight: 700,
            width: {
              md: 520,
              sm: 'calc(100%)',
              xs: 'calc(100%)',
            },
            wordBreak: 'break-all',
          }}
        >
          <img
            src='/images/logo.png'
            alt='Logo'
            style={{
              borderRadius: 30,
              width: 160,
              height: 160,
            }}
          />
          <Typography
            sx={{ fontFamily: 'monospace', fontWeight: 700 }}
            variant='h3'
            component='h1'
          >
            <span style={{ color: '#0D7789' }}>CONSOLE</span>
            <span style={{ color: '#224575' }}>DOT</span>
          </Typography>
          <Typography
            sx={{ fontFamily: 'monospace', fontWeight: 700 }}
            variant='h6'
            component='h2'
            mb={2}
          >
            INNOVATE THE TECHNOLOGY
          </Typography>
          <Box
            display={'flex'}
            alignItems='center'
            sx={{
              justifyContent: {
                md: 'center',
                sm: 'flex-start',
                xs: 'flex-start',
              },
            }}
            columnGap={3}
            mb={2}
          >
            <Facebook
              sx={{
                color: '#fff',
                fontSize: '32px',
                '&:hover': { color: '#0D7789' },
              }}
            />
            <LinkedIn
              sx={{
                color: '#fff',
                fontSize: '32px',
                '&:hover': { color: '#0D7789' },
              }}
            />
            <Twitter
              sx={{
                color: '#fff',
                fontSize: '32px',
                '&:hover': { color: '#0D7789' },
              }}
            />
          </Box>
          <Typewriter
            options={{
              strings: [
                `We are dedicated to providing high-quality software solutions to
              meet the evolving needs of businesses across industries. As a full
              stack development company, we offer a comprehensive range of
              services, combining technical expertise with a customer-centric
              approach.`,
              ],
              autoStart: true,
              loop: true,
              cursor: '',
              delay: 0.5,
              deleteSpeed: 0.5,
            }}
          />
          <Button
            onClick={handleHide}
            variant='outlined'
            sx={{
              color: '#fff',
              borderColor: '#0D7789',
              '&:hover': { background: '#0D7789', borderColor: '#0D7789' },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "calc(100% - 80px)",
          zIndex: 2,
          borderTop: "1px solid #fff",
          borderBottom: "1px solid #fff",
        }}
      >
        <Button sx={{ padding: "1.4rem 1.2rem", color: "#fff" }}>
          Learn More
        </Button>
      </Box> */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "5rem",
          zIndex: 2,
          borderLeft: "1px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          rowGap: 3,
          padding: "1rem 0",
        }}
      >
        <Facebook sx={{ color: "#fff", fontSize: "32px" }} />
        <LinkedIn sx={{ color: "#fff", fontSize: "32px" }} />
        <Twitter sx={{ color: "#fff", fontSize: "32px" }} />
      </Box> */}
    </Box>
  );
};
