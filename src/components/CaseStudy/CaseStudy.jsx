import { useEffect, useState } from 'react';
import { Layout } from '../Layout';
import {
  getSingleProject,
  getSingleCaseStudy,
  FILE_URL,
  getAllTechnologies,
} from '../../api';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CaseStudy = () => {
  const [data, setData] = useState({});
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getSingleCaseStudy(window.location.pathname.split('/')[2]).then((res) => {
      setData(res);
    });
    getSingleProject(window.location.pathname.split('/')[2]).then((res) =>
      setProject(res)
    );
    getAllTechnologies().then((res) => setTechnologies(res));
  }, []);
  return (
    <Layout>
      <Box
        sx={{
          background: `url('${FILE_URL}/${project?.hero}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: 300,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: 0,
            left: 0,
            content: '""',
            width: '100%',
            minHeight: '100%',
            background: 'rgba(0,0,0,0.6)',
            zIndex: 2,
          },
        }}
      >
        <Container maxWidth='lg' sx={{ zIndex: 3, textAlign: 'center' }}>
          <Typography variant='h2' component={'h1'} p={3} color='#fff'>
            {project?.title}
          </Typography>
        </Container>
      </Box>
      <Container maxWidth='lg'>
        <Box p={3}>
          <Typography color={'#224575'} variant='h3' component={'h1'}>
            Overview
          </Typography>
          <Typography variant='body1' p={0.5} component={'p'} mb={5}>
            {data?.overview}
          </Typography>
          <Typography color={'#224575'} variant='h4' component={'h1'}>
            {data?.challenge_short}
          </Typography>
          <Typography variant='body1' p={0.5} component={'p'} mb={5}>
            {data?.challenge_long}
          </Typography>
          <Typography color={'#224575'} variant='h4' component={'h1'} mb={1}>
            How it works?
          </Typography>
          <Grid container mb={5} spacing={2}>
            {data?.how_it_work?.map((item, index) => (
              <Grid key={index} item md={4} sm={12}>
                <Card>
                  <CardContent>
                    <Typography variant='h5' component={'p'}>
                      Step {index + 1}
                    </Typography>
                    <Typography variant='body1' component={'p'}>
                      {item}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography color={'#224575'} variant='h4' component={'h1'} mb={3}>
            Technical Stack
          </Typography>
          <Grid container mb={5} spacing={2} alignItems={'center'}>
            {data?.technologies?.map((item, index) => (
              <Grid
                key={index}
                item
                md={4}
                sm={12}
                textAlign={'center'}
                className='hoverImage'
              >
                <img
                  src={`${FILE_URL}/${
                    technologies.find((i) => i?._id === item)?.hero
                  }`}
                  alt='LOGO'
                  width={160}
                  onClick={() => navigate(`/technologies/${item}`)}
                />
              </Grid>
            ))}
          </Grid>
          <Typography color={'#224575'} variant='h4' component={'h1'} mb={1}>
            Core Features
          </Typography>
          <Grid container mb={5} spacing={2}>
            {data?.core_features?.map((item, index) => (
              <Grid item key={index} md={4} sm={12}>
                <Card>
                  <CardContent>
                    <Typography variant='h5' component={'p'}>
                      {index + 1}.
                    </Typography>
                    <Typography variant='body1' component={'p'}>
                      {item}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: 5,
                py: 5,
              }}
            >
              <Typography color={'#224575'} variant='h4' component={'h1'}>
                Time Frame
              </Typography>
              <Typography color={'#0D7789'} variant='h4' component={'h1'}>
                {project?.start_date} - {project?.end_date}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Layout>
  );
};
