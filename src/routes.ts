import { Router } from "express";

import OrdersController from "./controllers/OrdersController";

const routes = Router();

routes.get("/", (request, response) => {
  return response.send("Welcome!");
});

routes.get("/orders", OrdersController.index);

export default routes;
