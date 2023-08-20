import config from '../config';

//Cau hinh router
import Casts from '../page/Casts/Casts';
import Collection from '../page/logged/Collection';
import Home from '../page/Home';
import HotMovie from '../page/HotMovie';
import Login from '../page/Login';
import NewMovie from '../page/NewMovie';
import MovieDetails from '../page/MovieDetails';
import OddMovie from '../page/OddMovie';
import Register from '../page/Register';
import Search from '../page/Search';
import SeriesMovie from '../page/SeriesMovie';
import Settings from '../page/logged/Settings';
import User from '../page/User';
import Watching from '../page/Watching/Watching';

const publicRoutes = [
    { path: config.routes.collection, component: Collection },
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.search, component: Search },
    { path: config.routes.login, component: Login },
    { path: config.routes.newmovie, component: NewMovie },
    { path: config.routes.register, component: Register },
    { path: config.routes.hotmovie, component: HotMovie },
    { path: config.routes.oddmovie, component: OddMovie },
    { path: config.routes.seriesmovie, component: SeriesMovie },
    { path: config.routes.settings, component: Settings },

    {
        path: config.routes.moviedetails,
        component: MovieDetails,
        layout: MovieDetails,
    },
    {
        path: config.routes.casts,
        component: Casts,
        layout: Casts,
    },
    {
        path: config.routes.watching,
        component: Watching,
        layout: Watching,
    },
];

//Dang nhap: Login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
