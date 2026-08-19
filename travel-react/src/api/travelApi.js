import axios from "axios";

// 서버 주소
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/travels`;

// Todo 목록 조회
export const getList = async (pageParam) => {
   const { page = 1, size = 10 } = pageParam || {};
   // page와 size를 쿼리 스트링으로 전달
   const response = await axios.get(prefix, {params: { page, size }});
   // 응답 데이터 반환
   return response.data;
};

// Todo 한 건 조회
export const getOne = async (id) => {
   const response = await axios.get(`${prefix}/${id}`);
   return response.data;
};

// Todo 등록
export const postAdd = async (travelObject) => {
   const response = await axios.post(prefix, travelObject);
   return response.data;
};

// Todo 수정
export const putOne = async (travel) => {
   const response = await axios.put(`${prefix}/${travel.id}`, travel);
   return response.data;
};

// Todo 삭제
export const deleteOne = async (id) => {
   const response = await axios.delete(`${prefix}/${id}`);
   return response.data;
};



