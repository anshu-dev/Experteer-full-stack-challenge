import axios from "axios";

const getJobDiscription = async (id) => {
  return axios
    .get(`${process.env.REACT_APP_URL}/get-job/${id}`)
    .then((resjob) => resjob.data);
};

const getJobs = async () => {
  return axios
    .get(`${process.env.REACT_APP_URL}/get-jobs-list`)
    .then((resjob) => resjob.data);
};

const submitSearch = async (data) => {
  return axios
    .post(`${process.env.REACT_APP_URL}/submit-search`, data)
    .then((resjob) => resjob.data);
};
export { getJobDiscription, getJobs, submitSearch };
