import { Container, Typography } from '@mui/material';
import { Layout } from '../Layout';

export const Error404 = () => {
  return (
    <Layout>
      <Container
        maxWidth={'lg'}
        sx={{ textAlign: 'center', p: 7, color: '#224575' }}
      >
        <Typography variant='h1' component={'h1'}>
          404 ERROR
        </Typography>
        <Typography variant='h4' component={'h2'}>
          PAGE NOT FOUND
        </Typography>
      </Container>
    </Layout>
  );
};
