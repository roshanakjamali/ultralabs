import { Respones, ExpertProps } from "./entities";

const axios = require("axios").default;
const base_url = process.env.REACT_APP_SERVER;

const getExperts = async (): Promise<ExpertProps[]> => {
  return axios
    .get(`${base_url}/experts?_sort=id&_order=desc`)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const getExpert = async (id: string): Promise<ExpertProps> => {
  return axios
    .get(`${base_url}/experts/${id}`)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const addExpert = async (expert: ExpertProps): Promise<ExpertProps | Error> => {
  return axios
    .post(`${base_url}/experts`, expert)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const deleteExpert = async (id: number): Promise<ExpertProps> => {
  return axios
    .delete(`${base_url}/experts/${id}`)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

const toggleFavExpert = async (expert: ExpertProps): Promise<ExpertProps> => {
  return axios
    .put(`${base_url}/experts/${expert.id}`, expert)
    .then((response: Respones<ExpertProps>) => response.data)
    .catch((error: any) => error.response.status);
};

export { getExperts, getExpert, addExpert, deleteExpert, toggleFavExpert };
