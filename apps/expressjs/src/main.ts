/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Application } from 'express';
import * as path from 'path';
import * as fs from "fs";
import { AuthRoute } from './features/auth/AuthRoute';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to expressjs!' });
// });

// Load routes
app.use("/auth", new AuthRoute().router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);