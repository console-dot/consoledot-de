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
import {
  FILE_URL,
  getAllCategories,
  getAllProducts,
  getSingleCategory,
} from '../../api';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
    getAllCategories().then((res) => setCategories(res));
  }, []);
  return (
    <Layout>
      <Header />
      <Container maxWidth='xl' sx={{ p: 2, py: 8 }}>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid mb={3} key={index} item lg={3} md={4} sm={12} width={'100%'}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`${FILE_URL}/${product?.hero}`}
                  title={product?.title}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {product?.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {
                      categories.find(
                        (category) => category?._id === product?.category
                      )?.title
                    }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => navigate(`/case_study/${product?._id}`)}
                    size='small'
                  >
                    View Case Study
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
