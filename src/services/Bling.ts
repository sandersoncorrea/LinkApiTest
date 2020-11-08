import axios from "axios";

import { IDeal } from "../interfaces/Deal";
import { Create } from "../utils/OrderCreatorxml";

const api = axios.create({
  baseURL: "https://bling.com.br/Api/v2",
});

export default {
  async CreateOrder(deal: IDeal) {
    try {
      const xmlBody = Create(deal);
      const response = await api.post(
        "/pedido/json",
        {},
        {
          params: {
            apikey: process.env.BLING_TOKEN,
            xml: xmlBody,
          },
          headers: { "Content-Type": "text/xml" },
        }
      );
    } catch (e) {
      console.error(e.message);
    }
  },
};
