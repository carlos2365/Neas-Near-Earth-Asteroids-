import express from 'express'
import morgan from 'morgan'
import desc from '../package.json'
import neasRoutes from './routes/neas.routes'
import authRoutes from './routes/auth.routes'

const app = express()


app.set('desc', desc);
app.use(express.json())
app.use(morgan('dev'))

app.get('/',  (req, res) => {
    res.json({
        name: app.get('desc').name,
        author: app.get('desc').author,
        description: app.get('desc').description,
        version:app.get('desc').version

    })
})

app.use('/api/neas', neasRoutes)
app.use('/api/auth', authRoutes)

export default app;

