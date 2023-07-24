import { Container, Grid, Typography, Box } from '@mui/material';
import { FILE_URL } from '../../../api';

export const Header = ({ title, logo }) => {
  return (
    <Box sx={{ background: '#f9f9f9' }} p={3} py={8} id='Home'>
      <Container maxWidth='md'>
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
              src={`${FILE_URL}/${logo}`}
              alt='Logo'
              style={{ borderRadius: 10, width: '50%', marginRight: 12 }}
            />
          </Grid>
          <Grid item sm={12} md={6} p={2} py={5}>
            <Typography variant='h4' component={'h1'} mb={2}>
              {title}
            </Typography>
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
              src={`${FILE_URL}/${logo}`}
              alt='Logo'
              style={{ borderRadius: 10, width: '50%', marginRight: 12 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
