
import { lazy } from 'react';
import Loadable from '../loadable/Loadable';

const TrelloTask = Loadable(lazy(() => import('../components/task/Trellotask')));

const Router = [
  {
    path: '/',
    element: <TrelloTask />,
  },
  
];

export default Router;
