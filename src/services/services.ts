import { Respones, ExpertProps } from "./entities";

const axios = require("axios").default;

const getExperts = async (): Promise<ExpertProps[]> => {
  return axios
    .get("http://localhost:3000/experts")
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => console.log(error));
};

export { getExperts };
