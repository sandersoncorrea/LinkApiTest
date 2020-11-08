import axios from "axios";

import { IDeal } from "../interfaces/Deal";
import { Create } from "../utils/OrderCreatorxml";

const api = axios.create({
  baseURL: "https://bling.com.br/Api/v2",
});

const token =
  "cce8e582d40465b7946ec47c41fb7df7c196c9865b7ff96bf785041efd54c1f90ad3a3c6";

export default {
  async CreateOrder(deal: IDeal) {
    try {
      const xmlBody = Create(deal);
      const response = await api.post(
        "/pedido/json",
        {},
        {
          params: {
            apikey: token,
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
