import { App } from './app'
import { Login } from './pages/login'
import {Dashboard, DashboardRoute, AboutRoute, NotFoundRoute} from './pages'


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
        }
    ]
}
