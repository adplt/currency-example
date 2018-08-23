import App from '../App';
import MainPages from '../pages/index';
import HomeContainer from '../containers/HomeContainer/home.container';

export const indexRoutes = [
  {path: '/', name: 'Home IndexRoute', component: App}
];

export const mainRoutes = [
  {path: '/', name: 'Home MainRoute', component: MainPages},
];

export const appRoutes = [
  {path: '/', name: 'Home', component: HomeContainer},
];
