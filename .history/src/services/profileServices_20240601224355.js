
import axios from 'axios';

const API_URL = 'http://localhost:3000/NhanVien'; // Replace with your actual API URL

export const getList = async () => {
  const response = await axios.get(`${API_URL}/list`);
  return response.data;
};

export const getDetail = async (SK_id, NV_id) => {
  const response = await axios.get(`${API_URL}/detail/${SK_id}/${NV_id}`);
  return response.data;
};

export const addCTSK = async (data) => {
  const response = await axios.post(`${API_URL}/add`, data);
  return response.data;
};

export const deleteCTSK = async (SK_id, NV_id) => {
  const response = await axios.delete(`${API_URL}/delete/${SK_id}/${NV_id}`);
  return response.data;
};

export const updateCTSK = async (SK_id, NV_id, data) => {
  const response = await axios.put(`${API_URL}/update/${SK_id}/${NV_id}`, data);
  return response.data;
};
