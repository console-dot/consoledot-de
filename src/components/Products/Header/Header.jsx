import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: '#f9f9f9' }} p={3} py={8} id='Home'>
      <Container maxWidth='xl'>
        <Grid container display={'flex'} alignItems='center' justifyContent={"center"} my={3} spacing={2}>
          <Grid
            item
            sm={12}
            md={6}
            p={2}
            py={5}
            textAlign={'center'}
            sx={{ display: { md: 'none', sm: 'block', xs: 'block' } }}
          >
            <img
              src='/images/logo.png'
              alt='Logo'
              style={{ borderRadius: 10, width: '50%', marginRight: 12 }}
            />
          </Grid>
          <Grid item sm={12} md={6} p={2} py={5}>
            <Typography variant='h4' component={'h1'} mb={2}>
              <span style={{ color: '#0D7789' }}>CONSOLE</span>
              <span style={{ color: '#224575' }}>DOT</span> PRODUCTS
            </Typography>
            <Typography variant='body1' component={'p'} mb={3}>
              We are dedicated to providing high-quality software solutions to
              meet the evolving needs of businesses across industries. As a full
              stack development company, we offer a comprehensive range of
              services, combining technical expertise with a customer-centric
              approach.
            </Typography>
            <Button
              variant='contained'
              sx={{
                color: '#fff',
                borderColor: '#224575',
                background: '#224575',
                '&:hover': {
                  background: '#0D7789',
                  borderColor: '#0D7789',
                  color: '#fff',
                },
              }}
              onClick={() => navigate('/contact us')}
            >
              Be Our Customer
            </Button>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            p={2}
            py={5}
            textAlign={'center'}
            sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
          >
            <img
              src='/images/logo.png'
              alt='Logo'
              style={{ borderRadius: 10, width: '50%', marginRight: 12 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
