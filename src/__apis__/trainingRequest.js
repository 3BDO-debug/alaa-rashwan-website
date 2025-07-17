import axiosInstance from "./axios";

export const createTrainingRequest = async (requestData) =>
  axiosInstance
    .post("training-requests/create-training-request", requestData)
    .then((response) => response.data);
