import axiosInstance from "./axios";

export const createInquiryRequest = async (requestData) =>
  axiosInstance
    .post("inquiries/inquiry", requestData)
    .then((response) => response.data);
