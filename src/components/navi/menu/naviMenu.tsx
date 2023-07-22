import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { useLinkClickHandler } from 'react-router-dom';

type naviMenuProps = {
  meunList: naviMenu[];
  btnClick: (clickData: number) => {
    payload: number;
    type: 'route/changeActive';
  };
};

const NaviMenu = (props: naviMenuProps) => {
  const { meunList, btnClick } = props;
  const navigate = useNavigate();
  return (
    <>
      {meunList.map((menu: naviMenu) => {
        return (
          <Button
            key={menu.id}
            onClick={() => {
              navigate(menu.path);
              return btnClick(menu.id);
            }}
            sx={{ color: '#fff' }}
          >
            {menu.name}
          </Button>
        );
      })}
    </>
  );
};

export default NaviMenu;
