import axios from "axios";

const api = axios.create({
  baseURL: "https://sanderson-sandbox.pipedrive.com/v1",
});

const token = "ed8fc4497cf8c59e597af885febe4cca2a636c5d";

export default {
  async deals(status: string) {
    const deals = await api.get("/deals", {
      params: {
        api_token: token,
        status,
      },
    });
    return deals;
  },
};
