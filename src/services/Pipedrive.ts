import axios from "axios";

const api = axios.create({
  baseURL: "https://sanderson-sandbox.pipedrive.com/v1",
});

export default {
  async deals(status: string) {
    const deals = await api.get("/deals", {
      params: {
        api_token: process.env.PIPEDRIVE_TOKEN,
        status,
      },
    });
    return deals;
  },
};
