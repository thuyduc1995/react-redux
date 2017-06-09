import {App} from './app'
import {Dashboard, DashboardRoute, AboutRoute, NotFoundRoute, Login} from './pages'

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
