const express = require('express')
const compression = require('compression')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack/config')
const app = express()
const host = config.settings.host || '0.0.0.0'
const port = config.settings.port || 8000
const env = process.env.NODE_ENV || 'development'
const isDevMode = env.toLowerCase() !== 'production'
const fetch = require('isomorphic-fetch')
const dataType = ['contacts', 'dashboards', 'tasks','stocks']

app.use(compression())
app.set('views', `${__dirname}`)
app.set('view engine', 'pug')

/* Case DEV mode */
if (isDevMode) {
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        stats: {
            colors: true,
            timings: true
        }
    }))
} else {
    /* Case PRODUCTION mode */
    app.use(express.static(config.settings.distPath))
}
let initialState = {
    contacts: {},
    dashboards: {},
    tasks: {}
}
// const initialState = {
//     dashboards: {
//         title: 'My Dashboard',
//         layoutColumn: 3,
//         widgets: [
//             {
//                 title: 'widget 1'
//             },
//             {
//                 title: 'widget 2'
//             },
//             {
//                 title: 'widget 3'
//             }
//         ]
//     }
// }

dataType.forEach(type => {
    fetch(`http://localhost:8080/api/${type}`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            response.json()
                .then(data => initialState[type] = data)
        })
        .catch(
            // Log the rejection reason
            (reason) => {
                console.log(`Handle rejected promise (${reason}) here.`)
            })
})
app.get('*', (req, res) => {
    res.render('index', { initialState })
})


app.listen(port, config.settings.host, error => {
    if (error) {
        console.info("⛔ ⛔ ⛔  *** ERROR *** ⛔ ⛔ ⛔")
        console.error(error)
    } else {
        console.info("✅ ✅ ✅  *** %s mode's started *** ✅ ✅ ✅", env.toUpperCase())
        console.info("✅ ✅ ✅  *** Listening at http://%s:%s *** ✅ ✅ ✅", host, port)
    }
})


// const initialState = {
//     account: {
//         title: 'Admin account',
//         account: {id: data.username, password: data.password}
//     },
//     dashboard: {
//         title: 'My Dashboard',
//         layoutColumn: 3,
//         widgets: [
//             {
//                 title: 'widget 1'
//             },
//             {
//                 title: 'widget 2'
//             },
//             {
//                 title: 'widget 3'
//             }
//         ]
//     }
// }
