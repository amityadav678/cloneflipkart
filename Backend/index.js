import express from 'express';
import Connection from './database/db.js';
// import DefaultData from './defaultData.js';
import DefaultData from './defaultData.js';
import Router from './routes.js/route.js';
import bodyParser from 'body-parser';
const app = express();

app.use('/', Router);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

Connection();

app.listen(8000, () => {
    console.log('listening to port 8000');
});
DefaultData();
