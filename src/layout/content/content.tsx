import { Container } from '@mui/material';
import './content.css';
import { Outlet } from 'react-router-dom';
// type ContentProps = {
// };

const Content = () => {

  return (
      <Container className="content-container" maxWidth={'xl'}>
        <Outlet />
      </Container>
  );
};

export default Content;
