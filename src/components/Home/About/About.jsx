import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

export const About = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        p: 3,
        py: 8,
      }}
      id='About Us'
    >
      <Typography variant='h4' component={'h2'} mb={1} textAlign={'center'}>
        ABOUT US
      </Typography>
      <Typography variant='body1' component={'p'} mb={7} textAlign={'center'}>
        At ConsoleDot, we believe in the power of technology to transform
        businesses and drive societal progress. As a leading software solutions
        provider, we are dedicated to delivering high-quality and
        customer-centric experiences that enable enterprises, associates, and
        society to rise.
      </Typography>
      <Container maxWidth='md'>
        <Grid container my={3} spacing={2}>
          <Grid
            item
            width={'100%'}
            md={3}
            sm={12}
            p={2}
            py={5}
            textAlign={'center'}
          >
            <Typography variant='h4' component={'p'} mb={1}>
              12+
            </Typography>
            <Typography
              variant='body2'
              component={'p'}
              mb={1}
              textAlign={'center'}
            >
              Countries Where We Have Happy Customers
            </Typography>
          </Grid>
          <Grid
            item
            width={'100%'}
            md={3}
            sm={12}
            p={2}
            py={5}
            textAlign={'center'}
          >
            <Typography variant='h4' component={'p'} mb={1}>
              26
            </Typography>
            <Typography
              variant='body2'
              component={'p'}
              mb={1}
              textAlign={'center'}
            >
              Experienced Employees
            </Typography>
          </Grid>
          <Grid
            item
            width={'100%'}
            md={3}
            sm={12}
            p={2}
            py={5}
            textAlign={'center'}
          >
            <Typography variant='h4' component={'p'} mb={1}>
              05
            </Typography>
            <Typography
              variant='body2'
              component={'p'}
              mb={1}
              textAlign={'center'}
            >
              Scrum Teams
            </Typography>
          </Grid>
          <Grid
            item
            width={'100%'}
            md={3}
            sm={12}
            p={2}
            py={5}
            textAlign={'center'}
          >
            <Typography variant='h4' component={'p'} mb={1}>
              06
            </Typography>
            <Typography
              variant='body2'
              component={'p'}
              mb={1}
              textAlign={'center'}
            >
              Fullstack Developers
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography variant='h5' component={'h2'} mb={1}>
        WHO WE ARE
      </Typography>
      <Typography variant='body1' component={'p'} mb={7}>
        ConsoleDot represents the connected world, where we leverage the latest
        advancements in information technology to create innovative solutions.
        Our team of experts is passionate about crafting software solutions that
        empower businesses across industries. With our comprehensive range of
        services and technical expertise, we are committed to helping our
        clients thrive in the digital era.
      </Typography>
      <Typography variant='h4' component={'h2'} mb={1} textAlign={'center'}>
        OUR SERVICES
      </Typography>
      <Typography variant='body1' component={'p'} mb={3} textAlign={'center'}>
        We offer a wide array of services to address the diverse needs of our
        clients:
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <Card sx={{ background: '#224575', color: '#fff', p: 3 }}>
            <CardContent>
              <Typography variant='h5' component={'p'}>
                Web App Development
              </Typography>
              <Typography variant='body1' component={'p'}>
                Harness the power of the web with our dynamic and secure web
                applications. We build customized solutions that provide
                seamless user experiences and drive business growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12}>
          <Card sx={{ background: '#224575', color: '#fff', p: 3 }}>
            <CardContent>
              <Typography variant='h5' component={'p'}>
                Mobile App Development
              </Typography>
              <Typography variant='body1' component={'p'}>
                Reach your audience on the go with our cutting-edge mobile
                applications. From intuitive user interfaces to robust
                functionality, we create engaging experiences on iOS and Android
                platforms.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12}>
          <Card sx={{ background: '#224575', color: '#fff', p: 3 }}>
            <CardContent>
              <Typography variant='h5' component={'p'}>
                Blockchain Development
              </Typography>
              <Typography variant='body1' component={'p'}>
                Explore the potential of blockchain technology to revolutionize
                your business operations. Our experts develop secure and
                transparent blockchain solutions, enabling trust and efficiency
                across various industries.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12}>
          <Card sx={{ background: '#224575', color: '#fff', p: 3 }}>
            <CardContent>
              <Typography variant='h5' component={'p'}>
                Artificial Intelligence (AI)
              </Typography>
              <Typography variant='body1' component={'p'}>
                Unleash the power of AI to gain valuable insights and enhance
                decision-making. Our AI solutions leverage machine learning,
                natural language processing, and computer vision to automate
                processes and create intelligent systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12}>
          <Card sx={{ background: '#224575', color: '#fff', p: 3 }}>
            <CardContent>
              <Typography variant='h5' component={'p'}>
                Cross-Platform App Development
              </Typography>
              <Typography variant='body1' component={'p'}>
                Maximize your reach and reduce development costs with our
                cross-platform app development services. We utilize modern
                frameworks to build versatile applications that work seamlessly
                across multiple devices.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={12}>
          <Card sx={{ background: '#224575', color: '#fff', p: 3 }}>
            <CardContent>
              <Typography variant='h5' component={'p'}>
                Software Development
              </Typography>
              <Typography variant='body1' component={'p'}>
                As a full stack development company, we provide end-to-end
                software development services. From conceptualization to
                deployment, our team delivers robust, scalable, and secure
                software solutions tailored to your unique requirements.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
