import { Respones, ExpertProps } from "./entities";

const axios = require("axios").default;

const getExperts = async (): Promise<ExpertProps[]> => {
  return axios
    .get("http://localhost:3000/experts?_sort=id&_order=desc")
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};

const addExpert = async (expert: ExpertProps): Promise<ExpertProps> => {
  return axios
    .post("http://localhost:3000/experts", expert)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};
const deleteExpert = async (id: number): Promise<ExpertProps> => {
  return axios
    .delete(`http://localhost:3000/experts/${id}`)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};

export { getExperts, addExpert, deleteExpert };
