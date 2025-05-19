import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const fetchFromGraph = async () => {
    const response = await axios.get('${BASE_URL}/action-blueprint-graph');
    return response.data;
  };