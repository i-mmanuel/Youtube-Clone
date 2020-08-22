import axios from "axios";

const KEY = "AIzaSyB1r0bN7U1Is1fGzplCmNFShbG8qClrcrA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`,
  },
});
