import express from 'express';

import routes from "./routes.ts"

const app = express();

app.use(routes)

app.listen(3333);