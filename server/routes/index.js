import express, { Router } from "express"
import fs from 'fs'
import path from 'path'

/*
 *  Routes collation and generic defenitions.
 *
 *  Express routes in this directory will be added to the router here.
 */

const router = new Router();

// Add route files to Express router
fs.readdirSync(path.join('server', 'routes')) // 'synchronous read directory'
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .forEach(file => {
        // discard extension
        let routeName = file.substring(0, file.length - 3);

        // extract first component of route
        routeName = routeName.split('/')[0];

        // forward request to route file $routeName
        const route = require(path.resolve(__dirname, file)).default;

        router.use(`/api/${routeName}`, route);
    });

// static content
router.use('/static', express.static(path.join(__dirname, '..', '..', 'server', 'static')));

// images
router.use('/images', express.static(path.join(__dirname, '..', '..', 'server', 'static', 'images')));

// client bundle
router.use('/dist', express.static(path.join(__dirname, '..', '..', 'dist')));

// server index.html at the root
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
});

export default router;
