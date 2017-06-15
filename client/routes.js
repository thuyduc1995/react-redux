import { App } from './app'
import { Login } from './pages/login'
import {Dashboard, DashboardRoute, AboutRoute, NotFoundRoute, LoginRoute} from './pages'

import SimplePage from './pages/simplePage/SimplePage';

export const AppRoute = {
    childRoutes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: App,
            indexRoute: {
                component: Dashboard
            },
            childRoutes: [
                DashboardRoute,
                AboutRoute,
                NotFoundRoute
            ]
        },
        {
            path: '/simple-page',
            component: SimplePage
        }
    ]
}
