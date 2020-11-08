import { Request, Response, response } from "express";
import moment from "moment";

import DealReport from "../models/DealReport";

export default {
  async index(request: Request, response: Response) {
    const group = [];
    const data = await DealReport.find().sort("date");

    data.forEach((d) => {
      d.date = moment(d.date).format("YYYY-MM-DD");
      if (group.length == 0) {
        group.push({ date: d.date, total: d.total });
      } else {
        group[group.length - 1].date.toString() == d.date.toString()
          ? (group[group.length - 1].total =
              group[group.length - 1].total + d.total)
          : group.push({ date: d.date, total: d.total });
      }
    });

    return response
      .status(200)
      .json({ message: "Report grouped by day", report: group });
  },

  async delete(request: Request, response: Response) {
    await DealReport.deleteMany();
    return response.status(200).json({ message: "The database was cleaned" });
  },
};
