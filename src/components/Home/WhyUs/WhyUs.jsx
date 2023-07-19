import { Box, Container, Grid, Typography } from "@mui/material";

export const WhyUs = () => {
  return (
    <Box sx={{ background: '#224575' }} p={3} py={8}>
      {/* WHY US */}
      <Container maxWidth='xl'>
        <Typography
          variant='h4'
          component={'h2'}
          mb={8}
          textAlign={'center'}
          textTransform='uppercase'
          color={'#fff'}
        >
          Why Choose ConsoleDot?
        </Typography>
        <Grid container>
          <Grid
            item
            width={'100%'}
            sm={12}
            md={6}
            lg={3}
            sx={{
              background: '#224575',
              color: '#fff',
              '&:hover': {
                background: '#0D7789',
              },
            }}
            py={3}
            p={2}
          >
            <Typography variant='h5' component={'h2'} mb={2}>
              Customer-Centric Approach
            </Typography>
            <Typography variant='body1' component={'p'} mb={3}>
              We place our clients at the heart of everything we do. Our team
              works closely with you to understand your specific needs and
              deliver personalized solutions that exceed your expectations.
            </Typography>
          </Grid>
          <Grid
            item
            width={'100%'}
            sm={12}
            md={6}
            lg={3}
            sx={{
              background: '#224575',
              color: '#fff',
              '&:hover': {
                background: '#0D7789',
              },
            }}
            py={3}
            p={2}
          >
            <Typography variant='h5' component={'h2'} mb={2}>
              Technical Excellence
            </Typography>
            <Typography variant='body1' component={'p'} mb={3}>
              Our skilled professionals stay at the forefront of technological
              advancements. With expertise in cutting-edge tools and frameworks,
              we deliver innovative and future-proof solutions that drive your
              business forward.
            </Typography>
          </Grid>
          <Grid
            item
            width={'100%'}
            sm={12}
            md={6}
            lg={3}
            sx={{
              background: '#224575',
              color: '#fff',
              '&:hover': {
                background: '#0D7789',
              },
            }}
            py={3}
            p={2}
          >
            <Typography variant='h5' component={'h2'} mb={2}>
              Reliability and Quality
            </Typography>
            <Typography variant='body1' component={'p'} mb={3}>
              We are committed to delivering reliable, high-quality software
              solutions. Our rigorous quality assurance processes ensure that
              our deliverables are thoroughly tested and meet the highest
              industry standards.
            </Typography>
          </Grid>
          <Grid
            item
            width={'100%'}
            sm={12}
            md={6}
            lg={3}
            sx={{
              background: '#224575',
              color: '#fff',
              '&:hover': {
                background: '#0D7789',
              },
            }}
            py={3}
            p={2}
          >
            <Typography variant='h5' component={'h2'} mb={2}>
              Collaborative Partnership
            </Typography>
            <Typography variant='body1' component={'p'} mb={3}>
              We believe in building strong relationships with our clients based
              on trust, transparency, and open communication. We work
              collaboratively to ensure that your vision is realized and your
              goals are achieved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
