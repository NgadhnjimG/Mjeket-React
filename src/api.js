import axios from "axios";

const path = "http://localhost:50500";

const instance = axios.create({ baseURL: path });

export default instance;
