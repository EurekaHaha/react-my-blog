import { RouteObject } from 'react-router-dom';
import Layout from '../layout';

const route: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
        { index: true, element: <div>home</div> },
        { path: '/category', element: <div>categroy</div> },
        { path: '/article', element: <div>article</div> },
        { path: '*', element: <div>noMatch</div> }
    ]
  }
];

export default route;
