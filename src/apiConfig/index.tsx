import axios from "axios";

const basePaths = {
  url: process.env.PUBLIC_API || "https://dummyjson.com/",
};

const api = axios.create({
  baseURL: basePaths.url,
});

export { basePaths, api };
