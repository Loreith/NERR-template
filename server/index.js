import { Router } from 'express';
import routes from './routes';

/*
 *  Server entry point.
 *
 *  Server code would be linked to here if this were
 *  a more complex server.
 *
 *  Structure:
 *    -routes
 *      Express router code for defining REST responses.
 *    -static
 *      Files such as images for the site structure like favicon ect. Not for content (ideally).
 *
 */

const app = new Router();

app.use(routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'An unexpected error has occurred.' +
    '  Please refresh and try again.' });
    return next();
});

export default app;
