import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { Layout } from '../Layout';
import { useEffect, useState } from 'react';
import {
  FILE_URL,
  getAllTechnologies,
  getAllTechnologyCategories,
} from '../../api';
import { useNavigate } from 'react-router-dom';

export const Technologies = () => {
  const [categories, setCategories] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const navigate = useNavigate();
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  useEffect(() => {
    getAllTechnologies().then((res) => setTechnologies(res));
    getAllTechnologyCategories().then((res) => setCategories(res));
  }, []);
  return (
    <Layout>
      <Grid container>
        <Grid sx={{ background: '#275c9e' }} sm={12} md={2}>
          <List>
            {categories.map((category, index) => {
              return (
                technologies.filter(
                  (technology) => technology?.category === category?._id
                ).length > 0 && (
                  <ListItem key={index}>
                    <Typography
                      component={'p'}
                      variant='body1'
                      onClick={() => {
                        scrollTo(category?.title);
                      }}
                      sx={{
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'block',
                        padding: '10px 14px',
                        width: '100%',
                        '&:hover': {
                          background: 'rgba(0,0,0,0.4)',
                        },
                        textTransform: 'uppercase',
                      }}
                    >
                      {category?.title}
                    </Typography>
                  </ListItem>
                )
              );
            })}
          </List>
        </Grid>
        <Grid
          item
          md={10}
          sm={12}
          sx={{
            height: 'calc(100vh - 68.5px)',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          {categories.map((category, index) => (
            <Box key={index} id={category?.title}>
              {technologies.filter(
                (technology) => technology?.category === category?._id
              ).length > 0 && (
                <>
                  <Typography
                    variant='h5'
                    component={'h1'}
                    sx={{
                      width: '100%',
                      display: 'block',
                      padding: '10px 14px',
                      background: '#f1f1f1',
                      textTransform: 'uppercase',
                    }}
                  >
                    {category?.title}
                  </Typography>
                  <Grid container spacing={4} padding={3} alignItems={'center'}>
                    {technologies
                      .filter(
                        (technology) => technology?.category === category?._id
                      )
                      .map((technology, index) => (
                        <Grid item md={4} sm={6} key={index}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                            }}
                          >
                            <img
                              src={`${FILE_URL}/${technology?.hero}`}
                              alt={technology?.title}
                              width={160}
                              title={technology?.title}
                              className='hoverImage'
                              onClick={() =>
                                navigate(`/technologies/${technology?._id}`)
                              }
                            />
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                </>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};
