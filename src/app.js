import express from 'express';
import cors from "cors";
import morgan from 'morgan';
import desc from '../package.json'

import {createRoles} from './libs/initialSetup'

import neasRoutes from './routes/neas.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
const app = express()
createRoles();


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

app.use('/api/neas', neasRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;

