// import { useState } from 'react'
import { CircularProgress } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import { totalSettingState } from './store/features/totalSettingSlice';
import { useAppSelector } from './store/hooks';
function App() {
  const routesElement = useRoutes(routes);
  const state = useAppSelector(totalSettingState);
  const { loading } = state;
  return (
    <>
      {loading && (
        <div className="background_loading">
          <CircularProgress />
        </div>
      )}
      {routesElement}
    </>
  );
}

export default App;
