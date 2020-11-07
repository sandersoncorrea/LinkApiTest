import { ok } from "assert";
import { Request, Response } from "express";

import Pipedrive from "../services/Pipedrive";

export default {
  async index(request: Request, response: Response) {
    const { data } = await Pipedrive.deals("won");
    console.log(data.data[0]);
    return response.status(200).json();
  },
};
