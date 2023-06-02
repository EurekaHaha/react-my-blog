import { Box, Grid, Paper, Typography } from '@mui/material';
import Img from '../../../assets/47bg.jpeg';

type HomeBannerProps = {};

const Banner = (props: HomeBannerProps) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        background: 'grey',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${Img})`,
      }}
    >
      {<img style={{ display: 'none' }} src={Img} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              asdasdasd
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              asgfgggggg
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Banner;
