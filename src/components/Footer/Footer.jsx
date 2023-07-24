import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
} from '@mui/material';

import { Mail, Map, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <Box sx={{ background: '#224575', color: '#fff' }} p={3} py={8}>
        <Container maxWidth={'xl'}>
          <Grid container spacing={2}>
            <Grid p={7} item sm={12} md={6} lg={4}>
              <Typography variant='h5' component={'h3'} mb={2}>
                Summary
              </Typography>
              <List sx={{ p: 0 }}>
                <ListItem sx={{ p: 0 }}>
                  <Typography variant='body2' component={'p'}>
                    ConsoleDot is a leading software solutions provider
                    dedicated to delivering innovative and customer-centric
                    experiences. Our comprehensive range of services combines
                    technical expertise with a customer-centric approach to meet
                    the evolving needs of businesses across industries.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid p={7} item sm={12} md={6} lg={4}>
              <Typography variant='h5' component={'h3'} mb={2}>
                Navigation
              </Typography>
              <List sx={{ p: 0 }}>
                <ListItem sx={{ p: 0, mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    component={Link}
                    sx={{ color: '#fff' }}
                    to='/customers'
                  >
                    Customers
                  </Typography>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    sx={{ color: '#fff' }}
                    component={Link}
                    to='/technologies'
                  >
                    Technologies
                  </Typography>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    sx={{ color: '#fff' }}
                    component={Link}
                    to='/careers'
                  >
                    Careers
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid p={7} item sm={12} md={6} lg={4}>
              <Typography variant='h5' component={'h3'} mb={2}>
                Contact Us
              </Typography>
              <List>
                <ListItem sx={{ p: 0, mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    component={'a'}
                    sx={{ color: '#fff' }}
                    display='flex'
                    alignItems={'center'}
                    columnGap={1.5}
                    target='_blank'
                    href='https://goo.gl/maps/QYF5w43v3k3Aynmx8'
                  >
                    <Map /> Ahmed Arcade, Suite 9, 1st Floor, Ferozpur Rd,
                    Muslim Town Mor Flyover, Lahore, 54600
                  </Typography>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    component={'a'}
                    sx={{ color: '#fff' }}
                    display='flex'
                    alignItems={'center'}
                    columnGap={1.5}
                    target='_blank'
                    href='mailto:info@consoledot.com'
                  >
                    <Mail /> info@consoledot.com
                  </Typography>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    component={'a'}
                    sx={{ color: '#fff' }}
                    display='flex'
                    alignItems={'center'}
                    columnGap={1.5}
                    target='_blank'
                    href='tel:+92-327-406-7437'
                  >
                    <Phone /> +92-327-406-7437
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: '#222', color: '#fff' }} p={2}>
        <Container maxWidth={'xl'}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Typography variant='body2' component={'p'}>
                Copyright &copy; {new Date().getFullYear()} ConsoleDot
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
