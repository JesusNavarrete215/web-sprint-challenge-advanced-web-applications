import axios from "axios";

import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
  return axiosWithAuth()
    .get(`/articles`)
    .then((res) => {
      const { data } = res;
      return data;
    });
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
