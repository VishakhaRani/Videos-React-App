import axios from "axios";

const KEY = "AIzaSyB1m8L-ujqpQVxDXLGMAvkUEF5w9WFmXlE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
