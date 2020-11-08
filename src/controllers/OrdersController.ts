import { Request, Response } from "express";

import DealReport from "../models/DealReport";
import Bling from "../services/Bling";
import Pipedrive from "../services/Pipedrive";

export default {
  async index(request: Request, response: Response) {
    const { data } = await Pipedrive.deals("won");

    const deals = data.data;

    await Promise.all(
      deals.map(async (deal) => {
        return await Bling.CreateOrder({
          id: deal.id,
          name: deal.name,
          title: deal.title,
          value: deal.value,
          add_time: deal.add_time,
          status: deal.status,
        });
      })
    );

    deals.map((deal) => {
      DealReport.create({
        date: deal.add_time,
        total: deal.value,
      });
    });

    return response
      .status(200)
      .json({ message: `${deals.length} registered orders` });
  },
};
