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
import { useNavigate } from 'react-router-dom';
import { FILE_URL, getAllCustomers } from '../../api';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllCustomers().then((res) => setCustomers(res));
  }, []);
  return (
    <Layout>
      <Header />
      <Container maxWidth='xl' sx={{ p: 2, py: 8 }}>
        <Grid container spacing={2}>
          {customers.map((customer, index) => (
            <Grid mb={3} key={index} item lg={3} md={4} sm={12} width={'100%'}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`${FILE_URL}/${customer?.logo}`}
                  title={customer?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {customer?.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    <span style={{ fontWeight: 'bold' }}>Address: </span>
                    {customer?.address}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    <span style={{ fontWeight: 'bold' }}>Contact: </span>
                    {customer?.contact_info}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => navigate(`/projects/${customer?._id}`)}
                    size='small'
                  >
                    View Projects
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
