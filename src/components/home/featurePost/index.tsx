import {
  Card,
  Link,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import './index.css';

const featurePost = () => {
  return (
    <Grid>
      {[1, 2, 3].map((key: number) => {
        return (
          <Card key={key} className={'myFeature'} sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                post.title
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                post.date
              </Typography>
              <Typography variant="subtitle1" paragraph>
                post.description
              </Typography>
              <Link component="button" color="primary">详情……</Link>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              // image={post.image}
              // alt={post.imageLabel}
            />
          </Card>
        );
      })}
    </Grid>
  );
};

export default featurePost;
