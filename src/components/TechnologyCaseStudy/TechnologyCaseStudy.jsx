import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Layout } from '../Layout/Layout';
import { Header } from './Header';
import { useEffect, useState } from 'react';
import {
  FILE_URL,
  getAllProjects,
  getProjectByTechnology,
  getSingleTechnology,
} from '../../api';
import { useNavigate } from 'react-router-dom';

export const TechnologyCaseStudy = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [technology, setTechnology] = useState({});
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllProjects().then((res) => setProjects(res));
    getSingleTechnology(window.location?.pathname.split('/')[2]).then((res) =>
      setTechnology(res)
    );
    getProjectByTechnology(window.location?.pathname.split('/')[2]).then(
      (res) => setCaseStudies(res)
    );
  }, []);
  return (
    <Layout>
      <Header title={technology?.title} logo={technology?.hero} />
      <Container maxWidth='xl' sx={{ p: 2, py: 8 }}>
        <Grid container spacing={2}>
          {caseStudies.map((study, index) => {
            const p = projects.find(
              (project) => project?._id === study?.ref_id
            );
            return (
              <Grid
                mb={3}
                key={index}
                item
                lg={3}
                md={4}
                sm={12}
                width={'100%'}
              >
                <Card sx={{ width: '100%' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`${FILE_URL}/${p?.hero}`}
                    title={p?.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {p?.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      <span style={{ fontWeight: 'bold' }}>Start Date: </span>
                      {p?.start_date}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      <span style={{ fontWeight: 'bold' }}>End Date: </span>
                      {p?.end_date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => navigate(`/case_study/${p?._id}`)}
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
                    >
                      View Case Study
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};
