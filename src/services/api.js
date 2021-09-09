import axios from "axios";

const Api = axios.create({
  baseURL: "https://www.reddit.com/",
});

export default Api;
