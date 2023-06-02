import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
// import AdbIcon from '@mui/icons-material/Adb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import NaviMenu from '../../components/navi/menu/naviMenu';
import './header.css';
import { clickHeaderBtn, selectHeaderState } from '../../store/features/headerSlice';

// type HeaderProps = {
// };

const Header = () => {
  const state = useAppSelector(selectHeaderState);
  const dispatch = useAppDispatch();

  console.log('wzTest dis', {dispatch, state})

  return (
    <AppBar color="primary" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BLOG
          </Typography>
          <Box
            className="navi-menu"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            <NaviMenu btnClick={(clickData: number) => dispatch(clickHeaderBtn(clickData))} meunList={state.menuList}></NaviMenu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>avatar</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
