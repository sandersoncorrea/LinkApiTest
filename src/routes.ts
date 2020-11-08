import { Router } from "express";

import OrdersController from "./controllers/OrdersController";
import ReportController from "./controllers/ReportController";

const routes = Router();

routes.get("/", (request, response) => {
  return response.send("Welcome!");
});

routes.get("/import", OrdersController.index);
routes.post("/import", OrdersController.store);

routes.get("/reports", ReportController.index);
routes.delete("/reports", ReportController.delete);

export default routes;
