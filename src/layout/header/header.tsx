import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
// import AdbIcon from '@mui/icons-material/Adb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import NaviMenu from '../../components/navi/menu/naviMenu';
import './header.css';
import {
  changeActive,
  selectRouteState,
} from '../../store/features/routeSlice';

// type HeaderProps = {
// };

const Header = () => {
  const state = useAppSelector(selectRouteState);
  const dispatch = useAppDispatch();

  console.log('wzTest dis', { dispatch, state });

  return (
    <AppBar
      sx={{
        backgroundColor: '#d7d7d7',
      }}
      color="primary"
      position="sticky"
    >
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
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
            <NaviMenu
              btnClick={(clickData: number) =>
                dispatch(changeActive(clickData))
              }
              meunList={state.menuList}
            ></NaviMenu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>avatar</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
