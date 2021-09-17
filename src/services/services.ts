import { Respones, ExpertProps } from "./entities";

const axios = require("axios").default;

const getExperts = async (): Promise<ExpertProps[]> => {
  return axios
    .get("http://localhost:3000/experts?_sort=id&_order=desc")
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const getExpert = async (id: string): Promise<ExpertProps> => {
  return axios
    .get(`http://localhost:3000/experts/${id}`)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const addExpert = async (expert: ExpertProps): Promise<ExpertProps | Error> => {
  return axios
    .post("http://localhost:3000/experts", expert)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const deleteExpert = async (id: number): Promise<ExpertProps> => {
  return axios
    .delete(`http://localhost:3000/experts/${id}`)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const toggleFavExpert = async (expert: ExpertProps): Promise<ExpertProps> => {
  return axios
    .put(`http://localhost:3000/experts/${expert.id}`, expert)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

export { getExperts, getExpert, addExpert, deleteExpert, toggleFavExpert };
